"use client"
import { useState } from 'react'
import style from './page.module.css'
import validateProductos from '../componentes/Validations/validateProductos'

function FormProducto() {
    const [input, setInput] = useState({
        name: '',
        descripcion: '',
        price: '',
        ganance: ''
    })
    const [errors, setErros] = useState({})

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })

        setErros(validateProductos({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (Object.keys(errors).length > 0) {
            alert('te falta llenar valores')
        }
        else {
            alert('fue creado correctamente')
            setInput({
                name: '',
                descripcion: '',
                price: '',
                ganance: ''
            })
        }


    }

    return (
        <main className={style.main}>
            <div className={style.contenedor}>
                <h1 className={style.title}>Añadir producto</h1>
                <form className={style.form} action="" onSubmit={handleSubmit}>
                    <div className={style.group}>
                        <label className={style.nombre} htmlFor="name">Nombre:</label>
                        <input className={style.inputNombre} type="text" id='name' name='name' value={input.name} onChange={handleChange} />
                        {errors.name ? <span style={{ color: 'red' }}>{errors.name}</span> : ''}
                    </div>
                    <div className={style.group}>
                        <label className={style.nombre} >Imagen</label>
                        <input  type="file" id="imagen" name="imagen" accept=".png, .jpg, .jpeg" required />

                    </div>
                    <div className={style.group}>
                        <label className={style.descripcion} htmlFor="descripcion">Observaciones:</label>
                        <textarea className={style.inputDescripcion} name="descripcion" id="descripcion" value={input.descripcion} onChange={handleChange}></textarea>
                        {errors.descripcion ? <span style={{ color: 'red' }}>{errors.descripcion}</span> : ''}
                    </div>
                    <div className={style.group}>
                        <label className={style.tipo} htmlFor="type">Tipo:</label>
                        <select className={style.inputTipo} name="type" id="type">
                            <option value="">Seleccionar</option>
                            <option value="">No seleccionar</option>
                            <option value="">No o si?</option>
                        </select>
                    </div>
                    <div className={style.group}>
                        <label className={style.proveedor} htmlFor="provider">Proveedor:</label>
                        <select className={style.inputProveedor} name="provider" id="provider">
                            <option value="">Seleccionar</option>
                            <option value="">No seleccionar</option>
                            <option value="">No o si?</option>
                        </select>
                    </div>
                    <div className={style.grupoCorto}>
                        <div className={style.group}>
                            <label className={style.precio} htmlFor="price">Precio:</label>
                            <input className={style.inputPrecio} type="number" id='price' name='price' value={input.price} onChange={handleChange} />
                            {errors.price ? <span style={{ color: 'red' }}>{errors.price}</span> : ''}
                        </div>
                        <div className={style.group}>
                            <label className={style.ganancia} htmlFor="ganance">% Ganancia:</label>
                            <input className={style.inputGanancia} type="number" id='ganance' name='ganance' value={input.ganance} onChange={handleChange} />
                            {errors.ganance ? <span style={{ color: 'red' }}>{errors.ganance}</span> : ''}
                        </div>
                    </div>
                    <div className={style.divButton}>
                        <button className={style.buttonCreate} type='submit'>Crear</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default FormProducto