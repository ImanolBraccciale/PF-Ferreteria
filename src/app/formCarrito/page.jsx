"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import style from "./page.module.css";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import axios from "axios";
=======
import { useState } from 'react';
>>>>>>> fdc7431c63d9719a35b7c41bb823d6308ab26a2f
import NavBar from "../componentes/NavBar/NavBar";
import BackButtom from "../componentes/BackButtom/BackButtom";
import ProductListCart from "../componentes/ProductListCart/ProductListCart";
import ProductBarCart from "../componentes/ProductBarCart/ProductBarCart";
import { postSale } from "../redux/actions/actions";
import { getUserByEmail } from "../redux/actions/actions";

function FormCarrito() {
  const dispatch = useDispatch();
  const allCartItems = useSelector((state) => state.allCartItems);
<<<<<<< HEAD

  const userData = useSelector((state) => state.userData);
  console.log("user----************", userData);
=======
  console.log("allCartItems", allCartItems);
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
>>>>>>> fdc7431c63d9719a35b7c41bb823d6308ab26a2f
  const productSummary = [];

  allCartItems.forEach((item) => {
    const productName = item.Name;
    const quantity = item.Qty;
    const price = parseFloat(item.Price);
    // Buscar si el producto ya existe en el arreglo productSummary
    const existingProduct = productSummary.find(
      (summaryItem) => summaryItem.Name === productName
    );

    if (existingProduct) {
      existingProduct.Qty += quantity;

      existingProduct.Subtotal = existingProduct.Qty * price;
    } else {
      const Subtotal = quantity * price;
      productSummary.push({ ...item, Subtotal });
    }
  });

  useEffect(() => {
    console.log("correo electronico user", userData);
    dispatch(getUserByEmail(userData));
  }, [dispatch, userData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (productSummary.length === 0) {
      alert("Debe agregar al menos un producto al carrito para poder generar la compra");
    } else {
      const dataToSend = {
        productSummary,
        paymentMethod,
      };
      console.log(dataToSend);
      dispatch(postSale(dataToSend)).then((data) => {
        if (typeof data.payload === "object") {
<<<<<<< HEAD
          try {
            axios.post("/api/nodemailer", {
              subject: "Confirmación de compra",
              toEmail: "rofeferreteria@gmail.com ", //userData,
              productSummary,
              isPurchase: true,
            });
            alert("Su compra se realizó exitósamente.");
            location.href = "/";
          } catch (error) {
            console.error(
              "No se pudo obtener el correo electrónico del usuario."
            );
          }
=======
          alert("Su compra se realizó existósamente.");
          // Redirecciona por ventana a la página principal y limpia el carrito
          window.location.href = "/";
        } else {
          alert("Hubo un error al generar su compra, por favor inténtelo nuevamente.");
>>>>>>> fdc7431c63d9719a35b7c41bb823d6308ab26a2f
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
      <select name="paymentMethod" onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta</option>
        <option value="mercadoPago">MercadoPago</option>
      </select>
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
