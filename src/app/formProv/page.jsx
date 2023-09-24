"use client"
import { useState } from 'react';
import { validateProveedor } from '../componentes/validations.js/ValidationProveedores';
import NavBar from '../componentes/NavBar/NavBar';
import BackButtom from '../componentes/BackButtom/BackButtom';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { postSuppliers } from '../redux/actions/actions';


const ProveedorForm = () => {
    const [input, setInput] = useState({
        name_company: '',
        name: '',
        direccion: '',
        email: '',
        cellphone: '',
        isActive: true
    });

    const dispatch = useDispatch()
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }));
        setErrors({
            ...errors,
            [name]: undefined
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validate = validateProveedor(input);

        if (Object.keys(validate).length !== 0) {
            alert('Llene los campos correctamente');
            setErrors(validate);
        } else {
            dispatch(postSuppliers(input));
            console.log(input)
            setInput({
                name_company: '',
                name: '',
                direccion: '',
                email: '',
                cellphone: '',
                isActive: true

            });
            alert('Felicidades, el proveedor fue creado exitosamente.');
        }
    }


    return (
        <>
            <NavBar />
            <Link href='/suppliers'><BackButtom /></Link>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name_company">nombre de la empresa:</label>
                    <input
                        type="text"
                        id="name_company"
                        name="name_company"
                        value={input.name_company}
                        onChange={handleChange}
                    />
                    {errors.name_company && <p>{errors.name_company}</p>}
                </div>

                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="direccion">dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={input.direccion}
                        onChange={handleChange}
                    />
                    {errors.direccion && <p>{errors.direccion}</p>}
                </div>

                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="cellphone">Telefono:</label>
                    <input
                        type="text"
                        id="cellphone"
                        name="cellphone"
                        value={input.cellphone}
                        onChange={handleChange}
                    />
                    {errors.cellphone && <p >{errors.cellphone}</p>}
                </div>

                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default ProveedorForm;