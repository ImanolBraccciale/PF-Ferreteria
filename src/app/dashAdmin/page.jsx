"use client"
import Link from "next/link";
import style from "./dashboard.module.css"
//import { Bar, Line } from "react-chartjs-2";
import NavBar from "../componentes/NavBar/NavBar";
import LinesChart from "./graficos/LinesChart";
import BarsChart from "./graficos/BarsChart";
import PiesChart from "./graficos/PiesChart";
//import History from "../history/page";

const Dashboard = () => {
    return(
        <div>
        <NavBar/>
            <div className={style.containerGrid}>
                <div className={style.caja1}>
                    <div className={style.infoAdmin}>
                        <img className={style.image} src="https://pbs.twimg.com/media/EG7QuK-XUAEa8Gr.jpg" alt="Avatar" />
                        <ul className={style.ul}>
                            <li className={style.li}>ADMIN</li>
                            <li className={style.li}>RoFe@gmail.com</li>
                            <li className={style.li}>2165295375</li>
                        </ul>
                    </div>
                    <div className={style.cajaButtons1}>
                        <Link href="/formProv" className={style.buttonsCaja1}>Crear Proveedor</Link>
                        <Link href="/formRubro" className={style.buttonsCaja1}>Crear Rubro</Link>
                        <Link href="/formGrupo" className={style.buttonsCaja1}>Crear Grupo</Link>
                        <Link href="/formProducto" className={style.buttonsCaja1}>Crear Producto</Link>
                        <Link href="/" className={style.buttonsCaja1}>Volver al inicio</Link>
                    </div>
                </div>
                <div className={style.caja2}>
                    <div className={style.cajaButtons2}>
                        <Link href="/" className={style.buttonsCaja2}>Productos</Link>
                        <Link href="/history" className={style.buttonsCaja2}>Historial</Link>
                        <Link href="/suppliers" className={style.buttonsCaja2}>Proveedores</Link>
                        <Link href="/" className={style.buttonsCaja2}>Empleados</Link>
                    </div>
                    <div className={style.cajaGraficos}>
                        <div className={style.grafico}><LinesChart /></div>
                        <div className={style.grafico}><BarsChart /></div>
                        <div className={style.grafico}><PiesChart /></div>
                        <div className={style.grafico}><h3>Personal</h3></div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Dashboard;