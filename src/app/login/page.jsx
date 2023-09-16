"use client"
import { useState } from "react";
import style from "./login.module.css";
import Link from "next/link";



const LoginPage = () => {
    const [input, setInput] = useState({
        usuario: '',
        contraseña: '',
    })
    const [mostrarContr , setMostrarContr] = useState(true)

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className={style.container} key="login">
            <h1 className={style.title}>LOGIN</h1>

            <h3 className={style.subtitle}>Usuario:</h3>

            <input className={style.input} placeholder="Escriba su usuario" type="text" value={input.usuario} id="usuario" onChange={handleChange}/>
            
            <h3 className={style.subtitle} >Contraseña:</h3>

            <input className={style.input} placeholder="Escriba su contraseña" type={mostrarContr ? "text" : "password"} value={input.contraseña} id="contraseña" onChange={handleChange}/>
            <button onClick={() => setMostrarContr(!mostrarContr)}>Mostrar contraseña</button>
            {mostrarContr ? "mostrando contraseña" : "contraseña oculta"}


            <Link href="/" className={style.button}>Ingresar</Link>

            <p>¿Has olvidado tu contraseña?</p>
        </div>
    )
}

export default LoginPage;