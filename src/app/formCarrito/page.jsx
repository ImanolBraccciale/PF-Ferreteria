"use client";
import { useRouter } from 'next/router';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import style from "./page.module.css";

import NavBar from "../componentes/NavBar/NavBar";
import BackButtom from "../componentes/BackButtom/BackButtom";
import ProductListCart from "../componentes/ProductListCart/ProductListCart";
import ProductBarCart from "../componentes/ProductBarCart/ProductBarCart";

import { postSale } from "../redux/actions/actions";

function FormCarrito() {
  const dispatch = useDispatch();
  const allCartItems = useSelector((state) => state.allCartItems);
  console.log("allCartItems", allCartItems);

  const productSummary = [];

  allCartItems.forEach((item) => {
    const productName = item.Name;
    const quantity = item.Qty;
    const price = parseFloat(item.Price); // Convierte el precio a un número

    // Buscar si el producto ya existe en el arreglo productSummary
    const existingProduct = productSummary.find(
      (summaryItem) => summaryItem.Name === productName
    );

    if (existingProduct) {
      // Si el producto ya existe en el resumen, suma la cantidad
      existingProduct.Qty += quantity;
      // Calcula el subtotal para el producto existente
      existingProduct.Subtotal = existingProduct.Qty * price;
    } else {
      // Si el producto no existe en el resumen, agrégalo como un nuevo objeto
      const Subtotal = quantity * price;
      productSummary.push({ ...item, Subtotal });
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (productSummary.length === 0) {
      alert(
        "Debe agregar al menos un producto al carrito para poder generar la compra"
      );
    } else {
      dispatch(postSale(productSummary)).then((data) => {
        if (typeof data.payload === "object") {
         alert("Su compra se realizó existósamente.")
        //  Se redirecciona por window a / y se limpia el carrito
         location.href = "/";
        } else {
          alert("Hebo un error al generar su compra, por favor inténtelo nuevamente.")
        }
      });
    }
  };

  return (
    <div>
      <NavBar />
      <ProductBarCart />
      {productSummary.map(
        ({ ID, Image, Name, Description, Price, Qty, Subtotal }) => {
          return (
            <ProductListCart
              key={ID}
              id={ID}
              image={Image}
              name={Name}
              description={Description}
              price={Price}
              qty={Qty}
              subTotal={Subtotal}
            />
          );
        }
      )}
      <Link href="/">
        <BackButtom />
      </Link>
      <button className={style.add} onClick={(e) => onSubmit(e)}>
        $
      </button>
    </div>
  );
}

export default FormCarrito;
