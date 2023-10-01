"use client"
import Link from "next/link"
import AddButtom from "./componentes/AddButtom/AddButtom"
import VentaButton from "./componentes/IngresarVenta/VentaButton"
import NavBar from "./componentes/NavBar/NavBar"
import ProductBar from "./componentes/ProductBar/ProductBar"
import ProductList from "./componentes/ProductList/ProductList"
// import Rating from "./componentes/Rating/Rating"
import { getAllProducts } from "./redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import s from "@/app/page.module.css"
import Paginado from "./componentes/paginado/paginado"

const page = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 30
  const indexOfLastProducts = currentPage * productsPerPage 
  const indexOfFirstProducts= indexOfLastProducts - productsPerPage 
  const currentProducts = allProducts.slice(indexOfFirstProducts, indexOfLastProducts) 
  
  const paginado = (pageNumber) => { 
    setCurrentPage(pageNumber)
  }
  
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [currentPage])

  return (
    <div>
      <div>
        <NavBar />
        <ProductBar />
        {/* <Rating/> */}
        {/* <h1>
        {rolUser === "admin"
          ? "Bienvenido, administrador"
          : rolUser === "employee"
          ? "Bienvenido, empleado"
          : "Bienvenido, cliente"}
          </h1> */}
        {currentProducts.map(({ id, name, stock, costoActual, price }) => {
          return (
            <Link className={s.z} href={`/${id}`} key={id}>
              <ProductList
                id={id}
                name={name}
                stock={stock}
                costoActual={costoActual}
                price={price}
              />
            </Link>
          );
        })}
        <Link href="/formProducto">
          <AddButtom />
        </Link>
      </div>
      <Link href="/formCarrito">
        <VentaButton/>
      </Link>
      <div>
        <Paginado
                productsPerPage={productsPerPage} 
                allProducts={allProducts.length} 
                paginado={paginado} />
      </div>
    </div>
  );
};

export default page;






