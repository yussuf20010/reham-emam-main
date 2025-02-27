// utils/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "send.one.com", // Use the SMTP server provided
    port: 465, // Use the SMTP port provided
    secure: true, // Use secure connection
    auth: {
        user: "adamhassan@b-circles.co", // Your email address
        pass: "A_123456", // Your email password
    },
});
const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: 'adamhassan@b-circles.co',
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
