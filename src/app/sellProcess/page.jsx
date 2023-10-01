import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

import ProductBar from "../componentes/ProductBar/ProductBar";
import AddButtom from "../componentes/AddButtom/AddButtom"
import VentaButton from "../componentes/IngresarVenta/VentaButton"

const CartForm = () => {
  const allProducts = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 30

  const indexOfLastProducts = currentPage * productsPerPage 
  const indexOfFirstProducts= indexOfLastProducts - productsPerPage 
  const currentProducts = allProducts.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  return (
    <>
      <ProductBar />
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
      <Link href="/formCarrito">
        <VentaButton />
      </Link>
    </>
  );
};

export default CartForm;
