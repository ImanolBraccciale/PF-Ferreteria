import { sendMail } from "../service/mailService";

const handlerMail = async (req, res) => {
  try {
    const { method, body } = req;

    switch (method) {
      case "POST": {
        const { subject, toEmail, otpText, loginText } = body;
        if (otpText) {
          // Si otpText está presente, es un correo de registro
          await sendMail(subject, toEmail, otpText);
        } else if (loginText) {
          // Si loginText está presente, es un correo de inicio de sesión
          await sendMail(subject, toEmail, null, loginText);
        } else {
          return res.status(400).send("Missing email text");
        }

        res.status(200).send("Success");
        break;
      }
      case "GET": {
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(500).json({
      error_code: "api_error",
      message: err.message,
    });
  }
};

export default handlerMail;
