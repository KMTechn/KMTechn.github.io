const jsonHeaders = {
  'content-type': 'application/json; charset=utf-8',
};

const defaultAllowedOrigins = [
  'https://3pl.kmtecherp.com',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5197',
  'http://localhost:5173',
];

const labels = {
  '3pl': '3PL 상담',
  partner: '입고·검수',
  quality: '운영 문의',
  general: '기타 문의',
};

function getCorsHeaders(request, env) {
  const origin = request.headers.get('origin') || '';
  const configuredOrigins = (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const allowedOrigins = configuredOrigins.length ? configuredOrigins : defaultAllowedOrigins;
  const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    'access-control-allow-origin': allowOrigin,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
    vary: 'Origin',
  };
}

function jsonResponse(request, env, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...jsonHeaders,
      ...getCorsHeaders(request, env),
    },
  });
}

function cleanText(value, maxLength) {
  return String(value || '')
    .replace(/\r/g, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(payload) {
  const data = {
    inquiryType: cleanText(payload.inquiryType, 32) || 'general',
    company: cleanText(payload.company, 120),
    name: cleanText(payload.name, 80),
    email: cleanText(payload.email, 160),
    phone: cleanText(payload.phone, 60),
    subject: cleanText(payload.subject, 160),
    message: cleanText(payload.message, 4000),
    website: cleanText(payload.website, 200),
  };

  const errors = {};
  if (data.website) errors.website = 'spam';
  if (data.name.length < 2) errors.name = 'required';
  if (!isEmail(data.email)) errors.email = 'invalid';
  if (data.phone.replace(/[^\d]/g, '').length < 8) errors.phone = 'required';
  if (data.message.length < 10) errors.message = 'required';

  return { data, errors };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildEmail(data, env) {
  const inquiryLabel = labels[data.inquiryType] || labels.general;
  const subjectText = data.subject || inquiryLabel;
  const subject = `[KMTech 문의] ${subjectText} - ${data.name}`;
  const submittedAt = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

  const rows = [
    ['문의 유형', inquiryLabel],
    ['회사명', data.company || '-'],
    ['성함', data.name],
    ['이메일', data.email],
    ['연락처', data.phone],
    ['제목', subjectText],
    ['접수 시간', submittedAt],
  ];

  const text = [
    'KMTech 홈페이지 문의가 접수되었습니다.',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    '문의 내용:',
    data.message,
  ].join('\n');

  const htmlRows = rows.map(([label, value]) => `
    <tr>
      <th style="width:120px;text-align:left;padding:10px 12px;border-bottom:1px solid #e5e7eb;background:#f8fafc;color:#111827;">${escapeHtml(label)}</th>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#374151;">${escapeHtml(value)}</td>
    </tr>
  `).join('');

  const html = `
    <div style="font-family:Arial,'Noto Sans KR',sans-serif;line-height:1.6;color:#111827;">
      <h2 style="margin:0 0 16px;font-size:22px;">KMTech 홈페이지 문의</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px;border:1px solid #e5e7eb;">${htmlRows}</table>
      <h3 style="margin:24px 0 8px;font-size:16px;">문의 내용</h3>
      <div style="white-space:pre-wrap;padding:14px 16px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;">${escapeHtml(data.message)}</div>
    </div>
  `;

  return {
    from: env.FROM_EMAIL,
    to: env.TO_EMAIL || 'cgpark@kmtechn.com',
    reply_to: data.email,
    subject,
    text,
    html,
  };
}

async function sendWithResend(email, env) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = result?.message || result?.error || `Resend request failed with ${response.status}`;
    throw new Error(message);
  }
  return result;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: getCorsHeaders(request, env) });
    }

    const url = new URL(request.url);
    if (request.method !== 'POST' || url.pathname !== '/api/contact') {
      return jsonResponse(request, env, 404, { ok: false, error: 'not_found' });
    }

    if (!env.RESEND_API_KEY || !env.FROM_EMAIL) {
      return jsonResponse(request, env, 503, {
        ok: false,
        error: 'email_service_not_configured',
      });
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return jsonResponse(request, env, 415, { ok: false, error: 'unsupported_media_type' });
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse(request, env, 400, { ok: false, error: 'invalid_json' });
    }

    const { data, errors } = validatePayload(payload);
    if (Object.keys(errors).length > 0) {
      return jsonResponse(request, env, 400, { ok: false, error: 'validation_failed', fields: errors });
    }

    try {
      const result = await sendWithResend(buildEmail(data, env), env);
      return jsonResponse(request, env, 200, { ok: true, id: result.id });
    } catch (error) {
      console.error('contact email failed', error);
      return jsonResponse(request, env, 502, { ok: false, error: 'email_delivery_failed' });
    }
  },
};
