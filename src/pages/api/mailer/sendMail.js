const nodemailer = require("nodemailer");
const transporter = require("./index");

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "ferreRofe@gmail.com",
    to,
    subject,
    text,
  };

  try {
    const info = await nodemailer.sendMail(mailOptions);
    //console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
