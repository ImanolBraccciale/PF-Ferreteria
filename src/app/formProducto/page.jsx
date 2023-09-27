"use client"
import React, { useEffect, useState } from "react";
import validate from "../componentes/validations.js/validateProductos";
import NavBar from "../componentes/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getSuppliers, getTags, postProducts } from "../redux/actions/actions";
import { CldUploadButton } from 'next-cloudinary';


import s from "@/app/formProducto/page.module.css"
function FormProducto() {
  const [input, setInput] = useState({
    name: "",
    descripcion: "",
    costoAnterior: "",
    costoActual: "",
    group: [],
    rubro: [],
    supplierName: [],
    price: "",
    stock: ""
  });

  const handleUploadSuccess = (e) => {
    console.log('Imagen subida:', e);

  };


  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const group = useSelector((state) => state.etiquetas);
  const suppliers = useSelector((state) => state.allSuppliers);

  useEffect(() => {
    dispatch(getTags());
    dispatch(getSuppliers());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(input);

    if (Object.keys(validationErrors).length !== 0 || !input.group.length || !input.rubro.length || !input.supplierName.length) {
      alert('Llene los campos correctamente');
      setErrors(validationErrors);
    } else {
      dispatch(postProducts(input));
      console.log(input)
      setInput({
        name: "",
        descripcion: "",
        costoAnterior: "",
        costoActual: "",
        group: [],
        rubro: [],
        supplierName: [],
        price: "",
        stock: ""
      });
      alert('Felicidades, el producto fue creado exitosamente.');
    }
  }

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

  function handleTags(e) {
    const tagValue = e.target.value;
    if (!input.group.includes(tagValue)) {
      setInput((prevInput) => ({
        ...prevInput,
        group: [...prevInput.group, tagValue]
      }));
    }
  }

  function handleRubro(e) {
    const RubroValue = e.target.value;
    if (!input.rubro.includes(RubroValue)) {
      setInput((prevInput) => ({
        ...prevInput,
        rubro: [...prevInput.rubro, RubroValue]
      }));
    }
  }

  function handleSuppliers(e) {
    const supplierValue = e.target.value;
    if (!input.supplierName.includes(supplierValue)) {
      setInput((prevInput) => ({
        ...prevInput,
        supplierName: [...prevInput.supplierName, supplierValue]
      }));
    }
  }

  function handleDeleteG(tagToDelete) {
    setInput((prevInput) => ({
      ...prevInput,
      group: prevInput.group.filter((tag) => tag !== tagToDelete)
    }));
  }

  function handleDeleteS(supplierToDelete) {
    setInput((prevInput) => ({
      ...prevInput,
      supplierName: prevInput.supplierName.filter((sup) => sup !== supplierToDelete)
    }));
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit} className={s.form}>

        <div className={s.label}>
          <label htmlFor="name">Nombre:</label>
          <input className={s.input}
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          {errors.name && <p className={s.error}>{errors.name}</p>}
        </div>

        <div className={s.label}>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea className={s.input}
            id="descripcion"
            name="descripcion"
            value={input.descripcion}
            onChange={handleChange}
          />
          {errors.descripcion && <p className={s.error}>{errors.descripcion}</p>}
        </div>

        <div className={s.label}>
          <label htmlFor="costoAnterior">Costo Anterior:</label>
          <input className={s.input}
            type="number"
            id="costoAnterior"
            name="costoAnterior"
            value={input.costoAnterior}
            onChange={handleChange}
          />
          {errors.costoAnterior && <p className={s.error}>{errors.costoAnterior}</p>}
        </div>

        <div className={s.label}>
          <label htmlFor="costoActual">Costo Actual:</label>
          <input className={s.input}
            type="number"
            id="costoActual"
            name="costoActual"
            value={input.costoActual}
            onChange={handleChange}
          />
          {errors.costoActual && <p className={s.error}>{errors.costoActual}</p>}
        </div>

        <div className={s.label}>
          <label htmlFor="price">% Ganancia:</label>
          <input className={s.input}
            type="number"
            id="price"
            name="price"
            value={input.price}
            onChange={handleChange}
          />
          {errors.price && <p className={s.error}>{errors.price}</p>}
        </div>

        <div className={s.label}>
          <label htmlFor="stock">Stock:</label>
          <input className={s.input}
            type="number"
            id="stock"
            name="stock"
            value={input.stock}
            onChange={handleChange}
          />
          {errors.stock && <p className={s.error}>{errors.stock}</p>}
        </div>

        <div className={s.label1}>
          <select id="grupo" defaultValue="" className={s.option} onChange={(e) => handleTags(e)}>
            <option value='' disabled hidden>Grupo</option>
            {group.map((g) => {
              return (
                <option key={g.id} value={g.name}>{g.name}</option>
              );
            })}
          </select>
          {input.group.map((g) => (
            <div >
              <div className={s.selectioned}>{g}</div>
              <button onClick={() => handleDeleteG(g)} key={g} value={g} className={s.x}><span >X</span></button>
            </div>
          ))}
        </div>

        <div className={s.label1}>
          <select id="rubro" defaultValue="" className={s.option} onChange={(e) => handleRubro(e)}>
            <option value='' disabled hidden>Rubro</option>
            {group.map((r) => {
              return (
                <option key={r.id} value={r.name}>{r.name}</option>
              );
            })}
          </select>
          {input.rubro.map((r) => (
            <div >
              <div className={s.selectioned}>{r}</div>
              <button onClick={() => handleDeleteG(r)} key={r} value={r} className={s.x}><span >X</span></button>
            </div>
          ))}
        </div>

        <div className={s.label1}>
          <select id="" defaultValue="" className={s.option} onChange={(e) => handleSuppliers(e)}>
            <option value='' disabled hidden>Proveedor</option>
            {suppliers.map((s) => {
              return (
                <option key={s.id} value={s.name}>{s.name}</option>
              );
            })}
          </select>
          {input.supplierName.map((s) => (
            <div >
              <div className={s.selectioned}>{s}</div>
              <button onClick={() => handleDeleteS(s)} key={s} value={s} className={s.x}><span >X</span></button>
            </div>
          ))}
        </div>

        <div>
          <h2>Subir una imagen</h2>
          <CldUploadButton
            uploadPreset="uv0vtybv"
            onSuccess={handleUploadSuccess}
          >
            Seleccionar imagen
          </CldUploadButton>
        </div>

        <div>
          <button type="submit" className={s.b}>Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default FormProducto;
