"use client"

import { useState } from 'react';
import { validate } from "@/app/componentes/validations.js/validationTags.js"
import NavBar from '../componentes/NavBar/NavBar';
import BackButtom from '../componentes/BackButtom/BackButtom';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { postTags } from '../redux/actions/actions';
import s from "@/app/postTag/postTag.module.css"

const ProveedorForm = () => {
  const [input, setInput] = useState({
    name: '',
    type: 'group', // Establece el tipo predeterminado como 'group'
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
    const validatepost = validate(input);

    if (Object.keys(validatepost).length !== 0) {
      alert('Llene los campos correctamente');
      setErrors(validatepost);
    } else {
      dispatch(postTags(input));
      console.log(input)
      setInput({
        name: '',
        type: 'group', // Restablece el tipo a 'group' después del envío
      });
      alert('Felicidades, el Rubro/Grupo fue creado exitosamente.');
    }
  }

  return (
    <div>
      <NavBar />
      <Link href='/suppliers'><BackButtom /></Link>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.label}>
          <label htmlFor="nametag">Nombre de Rubro/Grupo:</label><br />
          <input className={s.input}
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
          /><br />
          {errors.name && <p className={s.error}>{errors.name}</p>}
        </div>
        <div className={s.label}>
          <label htmlFor="type">Tipo:</label><br />
          <select
            id="type"
            name="type"
            value={input.type}
            onChange={handleChange}
          >
            <option value="group">Grupo</option>
            <option value="rubro">Rubro</option>
          </select>
        </div>
        <button type="submit" className={s.b}>Enviar</button>
      </form>
    </div>
  );
};

export default ProveedorForm;
