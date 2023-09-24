"use client";
import Image from "next/image";
import style from "./page.module.css";
import martillo from "../componentes/assets/images/97957.jpeg";
import Link from "next/link";
import NavBar from "../componentes/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductById } from "../redux/actions/actions";

const Detail = ({ params }) => {
  
  const id = params.id;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);


  return (
    <>
      <NavBar />
      <main className={style.main}>
        <section className={style.section}>
          <div className={style.divImg}>
            <Image src={martillo} alt="Mi Imagen" />
          </div>
          <div className={style.divDescription}>
            {productDetail ? (
              <>
                <h1 key={productDetail.id}>{productDetail.name}</h1>
                <div className={style.description}>
                  <h2>Descripcion:</h2>
                  <p>{productDetail.descripcion}</p>
                </div>
                <div className={style.seguido}>
                  <h2>grupo:</h2>
                  <p>{productDetail.rubroTagId}</p>
                </div>
                <div className={style.seguido}>
                  <h2>Grupo:</h2>
                  <p>{productDetail.groupTagId}</p>
                </div>
                <div className={style.seguido}>
                  <h2>Proveedor:</h2>
                  <p>{productDetail.SupplierId}</p>
                </div>
                <div className={style.seguido}>
                  <h2>Precio anterior:</h2>
                  <p>{productDetail.costoAnterior}</p>
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
            ) : (
              ""
            )}
          </div>
        </section>
        <Link href="/">
          <button className={style.button}>Volver</button>
        </Link>
      </main>
    </>
  );
};

export default Detail;
