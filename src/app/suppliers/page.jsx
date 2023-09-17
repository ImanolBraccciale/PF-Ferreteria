"use client"
import { useEffect } from 'react'
import NavBar from '../componentes/NavBar/NavBar'
import SuppliersBar from '../componentes/SuppliersBar/SuppliersBar'
import SuppliersList from '../componentes/SuppliersList/SuppliersList'
import Link from 'next/link'
import AddButtom from '../componentes/AddButtom/AddButtom'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers } from '../redux/actions/actions'

function suppliers() {
    const dispatch = useDispatch()
    const allSuppliers = useSelector((state) => state.allSuppliers)
    console.log('desde el page',allSuppliers);
    useEffect(() => {
        dispatch(getSuppliers())
    }, [dispatch])
    return (
        <div>
            <NavBar />
            <SuppliersBar />
            {
                allSuppliers.map(({ id_suppliers, name, cellphone, name_company, isActive }) =>{
                    return (
                        <SuppliersList
                            key={id_suppliers}
                            name={name}
                            cellphone={cellphone}
                            name_company={name_company}
                            isActive={isActive}
                        />
                    )
                })
            }
            
            <Link href="/formProv">
                <AddButtom />
            </Link>
        </div>
    )
}

export default suppliers