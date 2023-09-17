import React from 'react'
import NavBar from '../componentes/NavBar/NavBar'
import SuppliersBar from '../componentes/SuppliersBar/SuppliersBar'
import SuppliersList from '../componentes/SuppliersList/SuppliersList'
import Link from 'next/link'
import AddButtom from '../componentes/AddButtom/AddButtom'

function suppliers() {
    return (
        <div>
            <NavBar/>
            <SuppliersBar/>
            <SuppliersList/>
            <Link href="/formProv">
                <AddButtom/>
            </Link>
        </div>
    )
}

export default suppliers