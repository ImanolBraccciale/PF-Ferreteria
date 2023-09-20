import { sendMail } from "../service/mailService";

// Constantes para el correo
const SUBJECT = "TEST";
const TO_EMAIL = "ajhd2022@gmail.com";
const OTP_TEXT = "THIS IS A TEST FOR MY MEDIUM USERS";

const handlerMail = async (req, res) => {
  try {
    const { method } = req;

    switch (method) {
      case "POST": {
        // Enviar correo utilizando los valores constantes o parámetros adecuados
        await sendMail(SUBJECT, TO_EMAIL, OTP_TEXT);
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        // Realizar alguna acción para el método GET
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handlerMail;

// import { sendMail } from "../service/mailService";
// const handlerMail = async (req, res) => {
//   try {
//     const { method } = req;
//     switch (method) {
//       case "POST": {
//         //Do some thing
//         await sendMail(
//           "TEST",
//           "dontkillme@bunnyfiedlabs.com",
//           "THI IS A TEST FOR MY MEDIUM USERS"
//         );
//         res.status(200).send("Success");
//         break;
//       }
//       case "GET": {
//         //Do some thing
//         res.status(200).send(req.auth_data);
//         break;
//       }
//       default:
//         res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//         break;
//     }
//   } catch (err) {
//     res.status(400).json({
//       error_code: "api_one",
//       message: err.message,
//     });
//   }
// };

// export default handlerMail;
