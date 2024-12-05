const nodemailer = require("nodemailer");
const { isEmail } = require("validator"); // Email validation library

const sendMail = (toMail, subject, body) => {
  return new Promise((resolve, reject) => {
    // Validate email
    if (!isEmail(toMail)) {
      return reject(new Error("Invalid email address"));
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: process.env.OAUTH_ACCESS_TOKEN, // Use a generated access token
      },
      tls: {
        rejectUnauthorized: true, // Enforce certificate validation
      },
    });

    const mailData = {
      from: `"Your Company Name" <${process.env.EMAIL}>`, // Customized sender address
      to: toMail, // Receiver email
      subject, // Email subject
      html: body, // HTML email body
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.error("Email error:", error.message); // Enhanced logging
        reject(new Error("Failed to send email. Please try again later."));
      } else {
        console.log("Email sent successfully:", info.response);
        resolve(info.response);
      }
    });
  });
};

module.exports = { sendMail };
