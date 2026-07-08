# KMTech Contact Mailer Worker

This Worker handles `POST /api/contact` for the KMTech website.

Runtime flow:

1. Validate the contact form payload server-side.
2. Send a transactional email through Resend.
3. Return `{ "ok": true }` to the website.

Cloudflare route:

```text
3pl.kmtecherp.com/api/contact*
```

Required Cloudflare secret:

```powershell
npx wrangler secret put RESEND_API_KEY --config wrangler.contact.jsonc
```

Required Resend setup:

- Verify the sending domain in Resend.
- The default sender is `KMTech <noreply@kmtecherp.com>`.
- The recipient is `cgpark@kmtechn.com`.

Deploy:

```powershell
npx wrangler deploy --config wrangler.contact.jsonc
```
