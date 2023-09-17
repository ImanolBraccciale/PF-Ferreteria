import React from 'react'
import s from '@/app/componentes/ProductBar/ProductBar.module.css'

function ProductBar() {
    return (
        <div className={s.all}>
            <div className={s.container}>
                <div className={s.a}>
                    Codigo
                </div>
                <div className={s.b}>
                    Descripción
                </div>
                <div className={s.c}>
                    Stock
                </div>
                <div className={s.d}>
                    Precio sin IVA
                </div>
                <div className={s.e}>
                    Precio final
                </div>
                <div className={s.f}>
                </div>

            </div>
        </div>
    )
}

export default ProductBar