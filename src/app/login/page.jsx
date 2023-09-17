"use client"
import { useState } from "react";
import style from "./login.module.css";
import Link from "next/link";
import validationEmail from "../componentes/validations.js/validationEmail";


const LoginPage = () => {
    const [input, setInput] = useState({
        usuario: "",
        contraseña: "",
    })
    const [mostrarContr , setMostrarContr] = useState(true)
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.id] : event.target.value
        })

        setErrors(validationEmail({
            ...input,
            [event.target.id]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (Object.keys(errors).length > 0) {
            alert('Complete valores')
        }
        else {
            console.log(input.usuario);
            setInput({
                usuario: '',
                contraseña: '',
            })
        }
    }

    const isFormValid = Object.keys(errors).length === 0 && input.usuario && input.contraseña;

    return (
        <div  key="login"> 
            <form onSubmit={handleSubmit} className={style.container}>
                <h1 className={style.title}>LOGIN</h1>

                <h3 className={style.subtitle}>Usuario:</h3>

                <input 
                    className={style.input} 
                    placeholder="Escriba su usuario" 
                    type="text" value={input.usuario} 
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

                <button type="button" onClick={() => setMostrarContr(!mostrarContr)}>Mostrar contraseña</button>
                {mostrarContr ? "mostrando contraseña" : "contraseña oculta"}


                <Link 
                    href={isFormValid ? "/" : "#"} 
                    className={style.button} 
                    disabled={!isFormValid}
                >Ingresar</Link>

                <p>¿Has olvidado tu contraseña?</p>
            </form>
        </div>
    )
}

export default LoginPage;