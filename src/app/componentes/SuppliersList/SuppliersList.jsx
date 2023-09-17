import React from 'react'
import s from '@/app/componentes/SuppliersList/SuppliersList.module.css'
function SuppliersList({ id_suppliers, name, cellphone, name_company, isActive }) {
    return (
        <div className={s.all}>
            <div className={s.container}>
                <div className={s.a}>
                    {name_company}
                </div>
                <div className={s.b}>
                    {name}
                </div>
                <div className={s.c}>
                    Dirreción
                </div>
                <div className={s.d}>
                    E-Mail
                </div>
                <div className={s.e}>
                    {cellphone}
                </div>
            </div>
        </div>
    )
}

export default SuppliersList