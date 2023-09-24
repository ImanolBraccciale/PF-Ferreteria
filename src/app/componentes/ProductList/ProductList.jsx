import s from '@/app/componentes/ProductList/ProductList.module.css'

function ProductList({id, name,stock, costoActual,price}) {
    return (
        <div className={s.all}>
            <div className={s.container}>
                <div className={s.a}>
                    {id}
                </div>
                <div className={s.b}>
                    {name}
                </div>
                <div className={s.c}>
                    {stock}
                </div>
                <div className={s.d}>
                    {costoActual}
                </div>
                <div className={s.e}>
                    {(costoActual * 1.21)}
                </div>
                <div className={s.d}>
                    {price}
                </div>
                <div className={s.f}>
                    <button className={s.button}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductList