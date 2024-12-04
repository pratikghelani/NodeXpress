const twilio = require('twilio');
require('dotenv').config(); // Load environment variables

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendSMS = (toPhoneNumber, message) => {
  return new Promise((resolve, reject) => {
    client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: toPhoneNumber
    })
    .then((message) => {
      console.log("SMS sent successfully:", message.sid);
      resolve(message.sid);
    })
    .catch((error) => {
      console.error("Error sending SMS:", error.message);
      reject(error);
    });
  });
};

module.exports = { sendSMS };
