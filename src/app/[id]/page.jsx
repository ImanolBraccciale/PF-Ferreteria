"use client"
import Image from 'next/image'
import style from './page.module.css'
import martillo from '../componentes/assets/images/97957.jpeg'
import Link from 'next/link'
import NavBar from '../componentes/NavBar/NavBar'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductById, detailDelete } from '../redux/actions/actions'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams
    const dispatch = useDispatch()
    const productDetail = useSelector((state) => state.productDetail)
    console.log('page detail: ',productDetail);
    useEffect(() => {
        dispatch(getProductById(id))
        return (() => dispatch(detailDelete()))
    }, [dispatch, id])
    return (
        <>
            <NavBar />
            <main className={style.main}>
                <section className={style.section}>
                    <div className={style.divImg}>
                        <Image src={martillo} alt="Mi Imagen" />
                    </div>
                    <div className={style.divDescription}>
                        {
                            productDetail ? (
                                <>
                                    <h1 key={productDetail.id}>{productDetail.name}</h1>
                                    <div className={style.description}>
                                        <h2>Descripcion:</h2>
                                        <p>{productDetail.descripcion}</p>
                                    </div>
                                    <div className={style.seguido}>
                                        <h2>Proveedor:</h2>
                                        <p>qué mirá bobo</p>
                                    </div>
                                    <div className={style.seguido}>
                                        <h2>stock:</h2>
                                        <p>{productDetail.stock}</p>
                                    </div>
                                    <div className={style.seguido}>
                                        <h2>Precio:</h2>
                                        <p>{productDetail.price}</p>
                                    </div>
                                </>

                            ) : ''
                        }
                        {/* <h1>Martillo de una</h1>
                        <div className={style.description}>
                            <h2>Descripcion:</h2>
                            <p>El martillo de una de 27mm tiene una cabeza forjada de acero al carbono con mango de fibra y es adecuado para clavar o retirar clavos, y tambien para desgarrar y retirar componentes estructurales de madera y driwall.</p>
                        </div> */}

                        {/* <div className={style.seguido}>
                            <h2>Proveedor:</h2>
                            <p>pepito.inc</p>
                        </div> */}
                        {/* <div className={style.seguido}>
                            <h2>stock:</h2>
                            <p>7</p>
                        </div> */}
                        {/* <div className={style.seguido}>
                            <h2>Precio:</h2>
                            <p>5.420.00$ars</p>
                        </div> */}
                    </div>
                </section>
                <Link href='/'  >
                    <button className={style.button}>Volver</button>
                </Link>
            </main>
        </>
    )
}

export default Detail