const { Resend } = require('resend');

const sendEmail = async (email, otp) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Your OTP Code',
    html: `<h2>Your OTP is: <b>${otp}</b></h2><p>Valid for 5 minutes.</p>`
  });
};

module.exports = sendEmail;