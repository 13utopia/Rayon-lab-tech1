const escapeHtml = (value) =>
  String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export const sendSubmissionEmail = async ({ subject, body, replyTo, env = process.env }) => {
  if (!subject || !body) {
    return { ok: false, status: 400, data: { error: 'Subject and body are required.' } };
  }

  if (!env.RESEND_API_KEY) {
    return { ok: false, status: 500, data: { error: 'Email service is not configured.' } };
  }

  const emailTo = env.EMAIL_TO || 'Rltsales@rayonlabtech.in';
  const emailFrom = env.EMAIL_FROM || 'Rayon Lab Tech <onboarding@resend.dev>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: emailFrom,
      to: [emailTo],
      subject,
      text: body,
      html: `<pre style="font-family:Arial,sans-serif;white-space:pre-wrap;line-height:1.5">${escapeHtml(body)}</pre>`,
      reply_to: replyTo || undefined,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return { ok: false, status: 502, data: { error: 'Email could not be sent.', details } };
  }

  return { ok: true, status: 200, data: { ok: true } };
};
