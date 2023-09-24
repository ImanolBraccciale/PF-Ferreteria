"use client";
import { useState } from "react";
import style from "./login.module.css";
import Link from "next/link";
// import validationRegister from "../componentes/validations.js/validationRegister";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { postUsers } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
  });

  const [mostrarContr, setMostrarContr] = useState(true);
  // const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });

    // setErrors(
    //   validationRegister({
    //     ...input,
    //     [event.target.id]: event.target.value,
    //   })
    // );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData.entries());
    // const validationErrors = validationRegister(user);
    // setErrors({});
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return
    // }
    console.log(input);
    dispatch(postUsers(input))
  }
    // const isFormValid =
    //   Object.keys(errors).length === 0 && input.nombre && input.usuario && input.contraseña;

    return (
      <div key="login">
        <form onSubmit={handleSubmit} className={style.container}>
          <h1 className={style.title}>REGISTER</h1>

          <h3 className={style.subtitle}>Nombre:</h3>

          <input
            name="nameUser"
            className={style.input}
            placeholder="Escriba su nombre completo"
            type="text"
            value={input.nameUser}
            id="nameUser"
            onChange={handleChange}
          />

          {/* {errors.nombre && <p>{errors.nombre}</p>} */}

          <h3 className={style.subtitle}>Usuario:</h3>

          <input
            name="emailUser"
            className={style.input}
            placeholder="Escriba su usuario"
            type="text"
            value={input.emailUser}
            id="emailUser"
            onChange={handleChange}
          />

          {/* {errors.usuario && <p>{errors.usuario}</p>} */}

          <h3 className={style.subtitle}>Contraseña:</h3>

          <input
            name="passwordUser"
            className={style.input}
            placeholder="Escriba su contraseña"
            type={mostrarContr ? "text" : "password"}
            value={input.passwordUser}
            id="passwordUser"
            onChange={handleChange}
          />

          {/* {errors.contraseña && <p>{errors.contraseña}</p>} */}

          <button type="button" onClick={() => setMostrarContr(!mostrarContr)}>
            Mostrar contraseña
          </button>
          {mostrarContr ? "mostrando contraseña" : "contraseña oculta"}

          {/* <Link
            href={isFormValid ? "/" : "#"}
            className={style.button}
            disabled={!isFormValid}
          >
            Crear Cuenta
          </Link> */}
          <button className={style.button} type="submit"> Crear Cuenta </button>
          <p>O registrate con</p>
          <p>
          ¿Tienes una cuenta? <Link href="/login">¡Inicia Sesión!</Link>
        </p>
          <button
            type="button"
            className="btn-floating"
            onClick={() => signIn("google")}
          >
           <FontAwesomeIcon icon={faGoogle} />
         </button>
        </form>
      </div>
    );
};

export default LoginPage;
