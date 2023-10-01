"use client"

import NavBar from "./componentes/NavBar/NavBar"
import ProductBar from "./componentes/ProductBar/ProductBar"
import ProductList from "./componentes/ProductList/ProductList"
import CartForm  from "./sellProcess/page"
// import Rating from "./componentes/Rating/Rating"
import { getAllProducts } from "./redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

import Paginado from "./componentes/paginado/paginado"

const page = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 30
  const indexOfLastProducts = currentPage * productsPerPage 
  const indexOfFirstProducts= indexOfLastProducts - productsPerPage 

  
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
        <CartForm />
        {/* <Rating/> */}
        {/* <h1>
        {rolUser === "admin"
          ? "Bienvenido, administrador"
          : rolUser === "employee"
          ? "Bienvenido, empleado"
          : "Bienvenido, cliente"}
          </h1> */}
        
      </div>
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






