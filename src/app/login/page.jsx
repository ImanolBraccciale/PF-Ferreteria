"use client"
import { useState } from "react";
import style from "./login.module.css";
import Link from "next/link";



const LoginPage = () => {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("")

    const handleInputUser = (event) => {
        setInput(event.target.value)
    }

    const handleInputPassword = (event) => {
        setPassword(event.target.value)

    }

    return (
        <div className={style.container} key="login">
            <h1 className={style.title}>LOGIN</h1>

            <h3 className={style.subtitle}>Usuario:</h3>

            <input className={style.input} placeholder="Escriba su usuario" type="text" value={input} onChange={handleInputUser}/>
            
            <h3 className={style.subtitle} >Contraseña:</h3>

            <input className={style.input} placeholder="Escriba su contraseña" type="password" value={password} onChange={handleInputPassword}/>
            
            <Link href="/" className={style.button}>Ingresar</Link>
            <p>¿Has olvidado tu contraseña?</p>
        </div>
    )
}

export default LoginPage;