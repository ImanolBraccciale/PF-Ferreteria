import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import ProductBar from "../componentes/ProductBar/ProductBar";
import AddButtom from "../componentes/AddButtom/AddButtom";
import VentaButton from "../componentes/IngresarVenta/VentaButton";
import ProductList from "../componentes/ProductList/ProductList";
import Paginado from "../componentes/paginado/paginado";

const CartForm = () => {
  const allProducts = useSelector((state) => state.products);

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

  return (
    <>
      <ProductBar />
      {currentProducts.map(({ id, name, stock, costoActual, price }) => {
        return (
          <ProductList
            key={id}
            id={id}
            name={name}
            stock={stock}
            costoActual={costoActual}
            price={price}
            enlace={`/${id}`}
          />
        );
      })}
      <Link href="/formProducto">
        <AddButtom />
      </Link>
      <Link href="/formCarrito">
        <VentaButton />
      </Link>
      <div style={{marginLeft: 200}}>
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
