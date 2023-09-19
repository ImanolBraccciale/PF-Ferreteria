const sendingMail = require("../controllers/mailer/sendMail");

// Supongamos que tienes una ruta para enviar un correo
const sendMailer = async (req, res) => {
  const { addressee, affair, content } = req.body;

  try {
    await sendingMail(addressee, affair, content);
    res.status(200).json({ message: "email sent successfully." });
  } catch (error) {
    res.status(500).json({ error: "email could not be sent" });
  }
};
export default sendMailer;

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "ferreRofe@gmail.com",
//     pass: "tu_contrasena",
//   },
// });

// module.exports = transporter;
