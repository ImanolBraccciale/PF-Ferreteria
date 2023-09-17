import Image from 'next/image'
import style from './page.module.css'
import martillo from '../componentes/assets/images/97957.jpeg'
import Link from 'next/link'
import NavBar from '../componentes/NavBar/NavBar'
const page = () => {
    return (
        <>
            <NavBar />
            <main className={style.main}>
                <section className={style.section}>
                    <div className={style.divImg}>
                        <Image src={martillo} alt="Mi Imagen" />
                    </div>
                    <div className={style.divDescription}>
                        <h1>Martillo de una</h1>
                        <div className={style.description}>
                            <h2>Descripcion:</h2>
                            <p>El martillo de una de 27mm tiene una cabeza forjada de acero al carbono con mango de fibra y es adecuado para clavar o retirar clavos, y tambien para desgarrar y retirar componentes estructurales de madera y driwall.</p>
                        </div>

                        <div className={style.seguido}>
                            <h2>Proveedor:</h2>
                            <p>pepito.inc</p>
                        </div>
                        <div className={style.seguido}>
                            <h2>stock:</h2>
                            <p>7</p>
                        </div>
                        <div className={style.seguido}>
                            <h2>Precio:</h2>
                            <p>5.420.00$ars</p>
                        </div>
                    </div>
                </section>
                <Link href='/'  >
                    <button className={style.button}>Volver</button>
                </Link>
            </main>
        </>
    )
}

export default page