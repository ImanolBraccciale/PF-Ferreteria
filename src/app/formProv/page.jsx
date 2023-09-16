"use client"
import { useState } from 'react';
import { validateProveedor } from '../componentes/validations.js/ValidationProveedores';
import styles from './FormProv.module.css';
import NavBar from '../componentes/NavBar/NavBar';

const ProveedorForm = () => {
    const [formData, setFormData] = useState({
        empresa: '',
        nombre: '',
        direccion: '',
        email: '',
        telefono: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateProveedor(formData);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Formulario válido');
            alert("proveedor creado con exito")
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <NavBar />
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formgroup}>
                    <label className={styles.label} htmlFor="empresa">
                        Empresa:
                    </label>
                    <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.empresa && <p className={`${styles.error} error`}>{errors.empresa}</p>}
                </div>

                <div className={styles.formgroup}>
                    <label className={styles.label} htmlFor="nombre">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.nombre && <p className={`${styles.error} error`}>{errors.nombre}</p>}
                </div>

                <div className={styles.formgroup}>
                    <label className={styles.label} htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.direccion && <p className={`${styles.error} error`}>{errors.direccion}</p>}
                </div>

                <div className={styles.formgroup}>
                    <label className={styles.label} htmlFor="email">E-Mail:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.email && <p className={`${styles.error} error`}>{errors.email}</p>}
                </div>

                <div className={styles.formgroup}>
                    <label className={styles.label} htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.telefono && <p className={`${styles.error} error`}>{errors.telefono}</p>}
                </div>

                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default ProveedorForm;