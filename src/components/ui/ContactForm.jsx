import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Headphones, Package, Send, ShieldCheck, Truck, Warehouse } from 'lucide-react';

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.05rem;
  margin-top: 1.15rem;
  position: relative;
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.92rem 1.15rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin-bottom: 0.22rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const TypeOption = styled.button`
  min-height: 88px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => $active ? 'var(--accent-amber)' : 'var(--border-color)'};
  background: ${({ $active }) => $active ? 'linear-gradient(135deg, rgba(var(--accent-amber-rgb), 0.13), #fff 76%)' : '#fff'};
  color: var(--text-color);
  padding: 0.88rem 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
  font: inherit;
  cursor: pointer;
  box-shadow: ${({ $active }) => $active ? '0 14px 30px rgba(var(--accent-amber-rgb), 0.14)' : '0 8px 20px rgba(15, 23, 42, 0.025)'};

  &:hover {
    border-color: rgba(var(--accent-amber-rgb), 0.72);
  }

  svg {
    width: 27px;
    height: 27px;
    color: var(--text-color);
  }

  @media (max-width: 520px) {
    min-height: 78px;
  }
`;

const TypeText = styled.span`
  display: grid;
  gap: 0.15rem;
  min-width: 0;

  strong {
    font-size: 1rem;
    line-height: 1.25;
  }

  small {
    color: var(--text-secondary);
    font-size: 0.78rem;
    line-height: 1.35;
  }
`;

const TypeIndicator = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${({ $active }) => $active ? 'var(--accent-amber)' : 'rgba(17, 24, 39, 0.18)'};
  background: ${({ $active }) => $active ? 'var(--accent-amber)' : '#fff'};
  color: #121212;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
`;

const Label = styled.label`
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-color);
`;

const inputStyles = css`
  min-height: 44px;
  padding: 0.68rem 0.92rem;
  border-radius: 8px;
  border: 1px solid ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--border-color)'};
  background-color: #fff;
  color: var(--text-color);
  font-size: var(--font-base);
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: inherit;

  &:hover:not(:disabled) {
    border-color: ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--accent-amber)'};
  }

  &:focus {
    outline: 2px solid ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--accent-amber)'};
    outline-offset: 2px;
    border-color: ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--accent-amber)'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  line-height: var(--line-height-relaxed);
  min-height: 124px;
  resize: vertical;
`;

const ErrorMessage = styled.span`
  font-size: var(--font-sm);
  color: var(--error-color);
  display: flex;
  align-items: center;
  gap: var(--space-1);
`;

const SubmitButton = styled.button`
  padding: 0.82rem var(--space-8);
  border-radius: 8px;
  background-color: var(--accent-amber);
  color: #121212;
  font-size: var(--font-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--accent-amber);
  align-self: stretch;
  font-family: inherit;
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--accent-amber);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  width: 100%;
`;

const StatusMessage = styled(motion.div)`
  background-color: var(--card-bg);
  border: 1px solid ${props => {
    if (props.status === 'success') return '#10b981';
    if (props.status === 'fallback') return 'var(--accent-amber)';
    return '#ef4444';
  }};
  color: ${props => {
    if (props.status === 'success') return '#10b981';
    if (props.status === 'fallback') return '#121212';
    return '#ef4444';
  }};
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
`;

const StatusTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ConsentLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  color: var(--text-secondary);
  font-size: var(--font-sm);
  line-height: 1.45;

  input {
    margin-top: 0.2rem;
    accent-color: var(--accent-amber);
    flex: 0 0 auto;
  }
`;

const PrivacyPanel = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  padding-top: 1.05rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }
`;

const SecurityCopy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: var(--font-sm);
  line-height: 1.45;

  svg {
    color: var(--text-color);
    flex: 0 0 auto;
  }
`;

const HoneypotField = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';

// Validation helpers
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateName = (name) => {
  return name.trim().length >= 2;
};

const validateMessage = (message) => {
  return message.trim().length >= 10;
};

const validatePhone = (phone) => {
  return phone.replace(/[^\d]/g, '').length >= 8;
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '',
    privacy: false,
  });
  const inquiryTypes = [
    { value: '3pl', labelKey: 'contact_inquiry_type_3pl', text: '견적·계약 문의', icon: Package },
    { value: 'partner', label: '입고·검수', labelKey: 'contact_inquiry_type_partner', text: '입고 예약, 검수 기준', icon: Truck },
    { value: 'quality', label: '운영 문의', labelKey: 'contact_inquiry_type_quality', text: '재고, 출고, 시스템', icon: Warehouse },
    { value: 'general', label: '기타 문의', labelKey: 'contact_inquiry_type_general', text: '기타 일반 문의', icon: Headphones },
  ];
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0].value);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', message: '', privacy: '' });
  const [touched, setTouched] = useState({ name: false, email: false, phone: false, message: false, privacy: false });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, fallback, error

  // Validate field on blur or change
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return !validateName(value) ? t('validation_name_required') || 'Name must be at least 2 characters' : '';
      case 'email':
        return !validateEmail(value) ? t('validation_email_invalid') || 'Please enter a valid email address' : '';
      case 'phone':
        return !validatePhone(value) ? t('validation_phone_required') : '';
      case 'message':
        return !validateMessage(value) ? t('validation_message_required') || 'Message must be at least 10 characters' : '';
      case 'privacy':
        return !value ? t('validation_privacy_required') : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: nextValue }));

    // Clear error when user starts typing
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, nextValue) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
      privacy: validateField('privacy', formData.privacy),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true, privacy: true });
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    const selectedInquiry = inquiryTypes.find((type) => type.value === inquiryType);
    const inquiryLabel = selectedInquiry?.label || t(selectedInquiry?.labelKey || 'contact_inquiry_type_general');
    const subjectText = formData.subject.trim() || inquiryLabel;
    const resetForm = () => {
      setFormData({ company: '', name: '', email: '', phone: '', subject: '', message: '', website: '', privacy: false });
      setInquiryType(inquiryTypes[0].value);
      setErrors({ name: '', email: '', phone: '', message: '', privacy: '' });
      setTouched({ name: false, email: false, phone: false, message: false, privacy: false });
    };
    const openMailFallback = () => {
      const recipient = 'cgpark@kmtechn.com';
      const subject = encodeURIComponent(`[KMTech 문의] ${subjectText} - ${formData.name}`);
      const body = encodeURIComponent(
        `회사명: ${formData.company || '-'}\n` +
        `보낸 사람: ${formData.name}\n` +
        `연락처: ${formData.phone}\n` +
        `이메일: ${formData.email}\n\n` +
        `문의 유형: ${inquiryLabel}\n\n` +
        `제목: ${subjectText}\n\n` +
        `문의 내용:\n${formData.message}`
      );

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          inquiryType,
          inquiryLabel,
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: subjectText,
          message: formData.message,
          website: formData.website,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'contact_request_failed');
      }

      setStatus('success');
      resetForm();

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Contact request failed', error);
      openMailFallback();
      setStatus('fallback');
      resetForm();

      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' || status === 'fallback' || status === 'error' ? (
        <StatusMessage
          key="status"
          status={status}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <StatusTitle>
            {status === 'success' || status === 'fallback' ? (
              <>
                <CheckCircle size={28} /> {status === 'fallback' ? t('contact_form_fallback_title') : t('contact_form_success_title')}
              </>
            ) : (
              <>
                <AlertCircle size={28} /> {t('contact_form_error_title') || 'Error'}
              </>
            )}
          </StatusTitle>
          <p>
            {status === 'success'
              ? t('contact_form_success_desc')
              : status === 'fallback'
                ? t('contact_form_fallback_desc')
                : t('contact_form_error_desc') || 'Failed to send message'}
          </p>
        </StatusMessage>
      ) : (
        <FormContainer
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          noValidate
        >
          <HoneypotField aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </HoneypotField>

          <TypeGrid aria-label={t('contact_inquiry_type_label')}>
            {inquiryTypes.map((type) => {
              const Icon = type.icon;
              const active = inquiryType === type.value;
              return (
                <TypeOption
                  key={type.value}
                  type="button"
                  $active={active}
                  aria-pressed={active}
                  onClick={() => setInquiryType(type.value)}
                  disabled={status === 'submitting'}
                >
                  <Icon aria-hidden="true" />
                  <TypeText>
                    <strong>{type.label || t(type.labelKey)}</strong>
                    <small>{type.text}</small>
                  </TypeText>
                  <TypeIndicator $active={active} aria-hidden="true">
                    {active && <CheckCircle />}
                  </TypeIndicator>
                </TypeOption>
              );
            })}
          </TypeGrid>

          <FieldGrid>
            <FormField>
              <Label htmlFor="contact-company">{t('contact_form_company')}</Label>
              <Input
                id="contact-company"
                type="text"
                name="company"
                placeholder={t('contact_form_company')}
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'submitting'}
              />
            </FormField>

            <FormField>
              <Label htmlFor="contact-email">{t('contact_form_email')} *</Label>
              <Input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t('contact_form_email')}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                $hasError={touched.email && errors.email}
                aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {touched.email && errors.email && (
                <ErrorMessage id="email-error" role="alert">
                  <AlertCircle size={14} /> {errors.email}
                </ErrorMessage>
              )}
            </FormField>
          </FieldGrid>

          <FieldGrid>
            <FormField>
              <Label htmlFor="contact-name">{t('contact_form_name')} *</Label>
              <Input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t('contact_form_name')}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                $hasError={touched.name && errors.name}
                aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {touched.name && errors.name && (
                <ErrorMessage id="name-error" role="alert">
                  <AlertCircle size={14} /> {errors.name}
                </ErrorMessage>
              )}
            </FormField>

            <FormField>
              <Label htmlFor="contact-phone">{t('contact_form_phone')} *</Label>
              <Input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder={t('contact_form_phone')}
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === 'submitting'}
                $hasError={touched.phone && errors.phone}
                aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {touched.phone && errors.phone && (
                <ErrorMessage id="phone-error" role="alert">
                  <AlertCircle size={14} /> {errors.phone}
                </ErrorMessage>
              )}
            </FormField>
          </FieldGrid>

          <FormField>
            <Label htmlFor="contact-subject">{t('contact_form_subject')}</Label>
            <Input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder={t('contact_form_subject')}
              value={formData.subject}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </FormField>

          <FormField>
            <Label htmlFor="contact-message">{t('contact_form_message')} *</Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder={t('contact_form_message')}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === 'submitting'}
              $hasError={touched.message && errors.message}
              aria-invalid={touched.message && errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {touched.message && errors.message && (
              <ErrorMessage id="message-error" role="alert">
                <AlertCircle size={14} /> {errors.message}
              </ErrorMessage>
            )}
          </FormField>

          <PrivacyPanel>
            <FormField>
              <ConsentLabel htmlFor="contact-privacy">
                <input
                  id="contact-privacy"
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === 'submitting'}
                  aria-invalid={touched.privacy && errors.privacy ? 'true' : 'false'}
                />
                <span>{t('contact_form_privacy')}</span>
              </ConsentLabel>
              {touched.privacy && errors.privacy && (
                <ErrorMessage id="privacy-error" role="alert">
                  <AlertCircle size={14} /> {errors.privacy}
                </ErrorMessage>
              )}
            </FormField>
            <SecurityCopy>
              <ShieldCheck size={18} />
              <span>보내주신 정보는 안전하게 보호되며, 영업 목적의 연락은 하지 않습니다.</span>
            </SecurityCopy>
          </PrivacyPanel>

          <SubmitButton type="submit" disabled={status === 'submitting'}>
            <Send size={18} />
            {status === 'submitting' ? t('contact_form_submitting') : t('contact_form_submit')}
          </SubmitButton>
        </FormContainer>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
