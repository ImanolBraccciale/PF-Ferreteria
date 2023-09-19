const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ferreRofe@gmail.com",
    pass: "tu_contrasena",
  },
});

module.exports = transporter;
