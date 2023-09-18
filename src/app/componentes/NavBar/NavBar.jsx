'use client'
import s from "@/app/componentes/NavBar/NavBar.module.css"
import Link from "next/link"
import SearchBar from "../SearchBar/SearchBar"


function NavBar() {

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
                        <option value="all" >Ordenar</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A" >Z-A</option>
                    </select>
                    </div>
                    <div className={s.option2}>
                        <select >
                            <option value=''>Filtrar</option>
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