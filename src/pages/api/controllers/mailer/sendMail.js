const nodemailer = require("../../mailerConfig");

async function sendMail(addressee, affair, content) {
  const mailOptions = {
    from: "tu_correo@gmail.com",
    to: addressee, //destinatario
    subject: affair, //asunto
    html: content, //contenido
  };

  try {
    const info = await nodemailer.sendMail(mailOptions);
    console.log("email sent:", info.messageId);
    return info.messageId;
  } catch (error) {
    console.error("error sending email:", error);
    throw new Error("Could not send email.");
  }
}

module.exports = sendMail;

// const nodemailer = require("nodemailer");
// const transporter = require("./index");

// const sendEmail = async (to, subject, text) => {
//   const mailOptions = {
//     from: "ferreRofe@gmail.com",
//     to,
//     subject,
//     text,
//   };

//   try {
//     const info = await nodemailer.sendMail(mailOptions);
//     console.log("Email sent:", info.messageId);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// module.exports = sendEmail;
