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
            {productDetail.image ? (
              <Image
                src={productDetail.image}
                alt="Mi Imagen"
                width={600} // Define el ancho deseado
                height={400} // Define la altura deseada
              />
            ) : (
              <Image
                src="/ruta/a/martillo.jpg"
                alt="Martillo"
                width={600} // Define el ancho deseado
                height={400} // Define la altura deseada
              />
            )}
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
                  <h2>Grupo:</h2>
                  <p>{productDetail.rubro}</p>
                </div>
                <div className={style.seguido}>
                  <h2>Rubro:</h2>
                  <p>{productDetail.group}</p>
                </div>
                <div className={style.seguido}>
                  <h2>Proveedor:</h2>
                  <p>{productDetail.supplierName}</p>
                </div>
                <div className={style.seguido}>
                  <h2>Precio anterior:</h2>
                  <p>{productDetail.costoAnterior}</p>
                </div>
                <div className={style.seguido}>
                  <h2>Stock:</h2>
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
