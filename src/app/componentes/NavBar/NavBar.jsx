'use client'
import s from "@/app/componentes/NavBar/NavBar.module.css"
import Link from "next/link"
import SearchBar from "../SearchBar/SearchBar"
import { filterByProd, getAllProducts, orderBy } from "@/app/redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"


function NavBar() {

const dispatch = useDispatch()
const productos = useSelector(state => state.allProducts)

console.log(productos);

    function handleSort(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getAllProducts())
        } else {
            dispatch(orderBy(e.target.value))
        }
    }

    function handleFilter(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getAllProducts());
        } else {
            dispatch(filterByProd(e.target.value))
        }
    }



    return (
        <div className={s.container}>
                <Link href="/">
            <div className={s.logo}></div>
                </Link>
            <div>
                <div className={s.search}><SearchBar/></div>
                <div className={s.botones}>
                    <div className={s.option}>
                    <select onChange={e => handleSort(e)}>
                        <option value="" >Ordenar</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A" >Z-A</option>
                        <option value="MenorPrecio">Menor Precio</option>
                        <option value="MayorPrecio">Mayor Precio</option>
                    </select>
                    </div>
                    <div className={s.option2}>
                    <select onChange={e => handleFilter(e)}>
                        <option value=''>Filtrar</option>
                        {productos && productos.map(p => {
                            return (
                                <option key={p.id} value={p.TagId}>{p.TagId}</option>
                            )
                        })}
                    </select>
                    </div>
                    <div className={s.rutas}>
                        <Link href="/history">Historial</Link>
                    </div>
                    <div className={s.rutas}>
                        <Link href="/suppliers">Proveedores</Link>
                    </div>
                </div>
            </div>
            <div className={s.sesion}>
                <div>
                    <Link href="/login">cerrar sesion</Link>
                </div>
                <div>
                    logo
                </div>
                <div>
                    modo oscuro
                </div>
            </div>
        </div>
    )
}

export default NavBar
