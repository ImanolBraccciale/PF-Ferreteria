const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tu_correo@gmail.com",
    pass: "tu_contraseña",
  },
});

module.exports = transporter;
