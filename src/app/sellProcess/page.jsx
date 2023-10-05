"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import ProductBar from "../componentes/ProductBar/ProductBar";
import AddButtom from "../componentes/AddButtom/AddButtom";
import VentaButton from "../componentes/IngresarVenta/VentaButton";
import ProductList from "../componentes/ProductList/ProductList";
import Paginado from "../componentes/paginado/paginado";
import { getAllProducts } from "../redux/actions/actions"

const CartForm = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;



  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage])

  const user = typeof localStorage !== 'undefined' ? localStorage.getItem("user") : null;
  useEffect(() => {

    // Si el usuario no está presente y estás en un entorno de navegador
    if (!user && typeof window !== 'undefined' && window.localStorage) {
      // Redirige al usuario a la página de inicio de sesión
      window.location.replace("/login");
    }
  }, []);
  const userActual = JSON.parse(user)
  return (
    <>
      <ProductBar />
      {currentProducts.filter(product => product.isActive).map(({ id, name, stock, costoActual, price }) => {
        return (
          <div key={id}>
            <ProductList
              id={id}
              name={name}
              stock={stock}
              costoActual={costoActual}
              price={price}
              enlace={`/${id}`}
            />

          </div>
        );
      })}
      {userActual.rolUser !== "client" &&
        <Link href="/formProducto">
          <AddButtom />
        </Link>
      }
      <Link href="/formCarrito">
        <VentaButton />
      </Link>
      <div style={{ marginLeft: 200 }}>
        <Paginado
          productsPerPage={productsPerPage}
          allProducts={allProducts.length}
          paginado={paginado}
        />
      </div>
    </>
  );
};

export default CartForm;
