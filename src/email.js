const emailJsConfigs = {
  default: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL,
  },
  appointment: {
    serviceId: import.meta.env.VITE_APPOINTMENT_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_APPOINTMENT_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_APPOINTMENT_EMAILJS_PUBLIC_KEY,
    toEmail: import.meta.env.VITE_APPOINTMENT_EMAILJS_TO_EMAIL,
  },
};

export const sendFormEmail = async ({ subject, body, replyTo, templateParams = {}, configName = 'default' }) => {
  const { serviceId, templateId, publicKey, toEmail } = emailJsConfigs[configName] || emailJsConfigs.default;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(`EmailJS ${configName} config is not complete. Please check the EmailJS values in your .env file.`);
  }

  const params = {
    subject,
    message: body,
    body,
    reply_to: replyTo,
    from_email: replyTo,
    to_email: toEmail,
    ...templateParams,
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: params,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    throw new Error(errorText || 'Email could not be sent.');
  }

  return { success: true };
};
