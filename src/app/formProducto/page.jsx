import style from './page.module.css'


function FormProducto() {
    return (
        <main className={style.main}>
            <div className={style.contenedor}>
                <h1 className={style.title}>Añadir producto</h1>
                <form className={style.form} action="" method='post'>
                    <div className={style.group}>
                        <label className={style.nombre} htmlFor="name">Nombre:</label>
                        <input className={style.inputNombre} type="text" id='name' name='name' />
                    </div>
                    <div className={style.group}>
                        <label className={style.nombre}  htmlFor="">Imagen</label>
                        <input className={style.inputImagen} type="file" id="imagen" name="imagen" accept=".png, .jpg, .jpeg" required />

                    </div>
                    <div className={style.group}>
                        <label className={style.descripcion} htmlFor="description">Observaciones:</label>
                        <textarea className={style.inputDescripcion} name="description" id="description" cols="30" rows="10"></textarea>
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
                            <input className={style.inputPrecio} type="number" id='price' name='price' />
                        </div>
                        <div className={style.group}>
                            <label className={style.ganancia} htmlFor="price">% Ganancia:</label>
                            <input className={style.inputGanancia} type="number" id='price' name='price' />
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