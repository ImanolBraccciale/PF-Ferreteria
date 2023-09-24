"use client"
import { useEffect, useState } from "react";
import style from "./login.module.css";
import Link from "next/link";
import validationEmail from "../componentes/validations.js/validationEmail";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { credential, getUserByEmail } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
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

  const isFormValid = Object.keys(errors).length === 0 && input.usuario && input.contraseña;

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const credencial = await dispatch(credential(input.usuario, input.contraseña));
    const userEmail = await dispatch(getUserByEmail(input.usuario));
    
    if (!isFormValid) {
      alert("Complete valores");
      return;
    }

    if (credencial.payload !== true) {
      alert("El usuario no existe");
      return;
    }else{
      
      try {
        window.location.href = "/";
      } catch (error) {
        console.log(error);
      }
    }

  };

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

        {/* <Link
          href={isFormValid ? "/" : "#"}
          className={style.button}
          disabled={!isFormValid}
        >
          Ingresar
        </Link> */}
        <button className={style.button} type="submit"> Ingresar </button>
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
