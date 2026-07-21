import { sendSubmissionEmail } from './email-service.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { subject, body, replyTo } = req.body || {};
  const result = await sendSubmissionEmail({ subject, body, replyTo });
  return res.status(result.status).json(result.data);
}
