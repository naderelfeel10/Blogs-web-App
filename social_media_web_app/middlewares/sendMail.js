
const nodemailer = require('nodemailer');

const sendEmail = async (option) => {
  try {
      const transporter = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 587,
          auth: {
              user: "479b916205d055",
              pass: "bd996bff4f24f3"
          },
          tls: {
            rejectUnauthorized: false
        }
      });

      const emailOptions = {
          from: 'cineflix support <support@cineflix.com>',
          to: option.email,
          subject: option.subject,
          text: option.message
      };

      console.log('Sending email with options:', emailOptions);

      const info = await transporter.sendMail(emailOptions);

      console.log('Email sent successfully:', info);
  } catch (error) {
      console.error('Error while sending email:', error.message);
      throw new Error('Email sending failed.');
  }
};

module.exports = sendEmail;
