"use client"
import { useState } from "react";
import NavBar from "../componentes/NavBar/NavBar";
import style from "./formRubro.module.css";
import { useDispatch } from "react-redux";
import validate from "../componentes/validations.js/validationTags"
import { postTags } from "../redux/actions/actions";

const formRubro = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        isActive: false,
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })

        const validation = validate(input);
        setErrors(validation)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        event.preventDefault();
        const nameTag = Object.fromEntries(formData.entries());
        const validationErrors = validate(input);
        setErrors(validationErrors);
        if(Object.keys(validationErrors) === 0) {
            setInput({
                name: nameTag.name,
            });
            
            window.location.href = "/dashAdmin";
        }
        dispatch(postTags(nameTag));
        alert("El Rubro se ha creado con éxito");
    }

    return (
        <>
            <NavBar />
            <form action="" onSubmit={handleSubmit} className={style.form}>
                <div className={style.formgroup}>
                    <label className={style.label}>
                        Nombre de Rubro
                    </label>
                    <input 
                        className={style.input}
                        type="text" 
                        id="rubro" 
                        name="name" 
                        onChange={handleChange}
                        value={input.name} 
                        placeholder="Escriba un nombre de rubro"/>
                        <h2>{errors.name && (<p className={style.error}>{errors.name}</p>)}</h2>
                </div>
                <button type="submit">Crear Rubro</button>
            </form>
        </>
    )
}

export default formRubro;