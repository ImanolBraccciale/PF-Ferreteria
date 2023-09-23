"use client";
import { useState } from "react";
import style from "./login.module.css";
import Link from "next/link";
import validationEmail from "../componentes/validations.js/validationEmail";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  const [input, setInput] = useState({
    usuario: "",
    contraseña: "",
  });

  const [mostrarContr, setMostrarContr] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });

    setErrors(
      validationEmail({
        ...input,
        [event.target.id]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length > 0) {
      alert("Complete valores");
    } else {
      console.log(input.usuario);
      setInput({
        usuario: "",
        contraseña: "",
      });
    }

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
      console.error("Error de autenticación de Google:", error);
    }
  };

  const isFormValid =
    Object.keys(errors).length === 0 && input.usuario && input.contraseña;

  return (
    <div key="login">
      <form onSubmit={handleSubmit} className={style.container}>
        <h1 className={style.title}>LOGIN</h1>

        <h3 className={style.subtitle}>Usuario:</h3>

        <input
          className={style.input}
          placeholder="Escriba su usuario"
          type="text"
          value={input.usuario}
          id="usuario"
          onChange={handleChange}
        />

        {errors.usuario && <p>{errors.usuario}</p>}

        <h3 className={style.subtitle}>Contraseña:</h3>

        <input
          className={style.input}
          placeholder="Escriba su contraseña"
          type={mostrarContr ? "text" : "password"}
          value={input.contraseña}
          id="contraseña"
          onChange={handleChange}
        />

        {errors.contraseña && <p>{errors.contraseña}</p>}

        <button type="button" onClick={() => setMostrarContr(!mostrarContr)}>
          Mostrar contraseña
        </button>
        {mostrarContr ? "mostrando contraseña" : "contraseña oculta"}

        <Link
          href={isFormValid ? "/" : "#"}
          className={style.button}
          disabled={!isFormValid}
        >
          Ingresar
        </Link>
        <p>O ingresa con</p>
        <button
          type="button"
          className="btn-floating"
          onClick={() => signIn("google")}
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span className="google-icon"></span>
        </button>
        <br></br>
        <p>
          ¿No tienes una cuenta? <Link href="/register">¡Registrate!</Link>
        </p>
        <br></br>
        <p>¿Has olvidado tu contraseña?</p>
        <br></br>
      </form>
    </div>
  );
};

export default LoginPage;
