'use client'
import s from "@/app/componentes/NavBar/NavBar.module.css"
import Link from "next/link"
import SearchBar from "../SearchBar/SearchBar"

function NavBar() {
    return (
        <div className={s.container}>
            <div className={s.logo}>
            </div>
            <div>
                <div className={s.search}><SearchBar /></div>
                <div className={s.botones}>
                    <div className={s.option}>
                        <select onChange={e => handleSort(e)}>
                            <option value="" >ordenar</option>
                            <option value="A-Z" >A-Z</option>
                            <option value="Z-A" >Z-A</option>
                        </select>
                    </div>
                    <div className={s.option2}>
                        <select onChange={e => handleFilter(e)}>
                            <option value=''>Genders</option>
                        </select>
                    </div>
                    <div className={s.rutas}>
                        <Link href="/historial">historial</Link>
                    </div>
                    <div className={s.rutas}>
                        <Link href="/proveedores">proveedores</Link>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Link href="/">cerrar sesion</Link>
                </div>
                <div>

                </div>
                <div>
                    modo oscuro
                </div>
            </div>
        </div>
    )
}

export default NavBar