"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../componentes/NavBar/NavBar";
import BackButtom from "../componentes/BackButtom/BackButtom";
import ProductListCart from "../componentes/ProductListCart/ProductListCart";
import ProductBarCart from "../componentes/ProductBarCart/ProductBarCart";
import { postSale } from "../redux/actions/actions";
import { getUserByEmail } from "../redux/actions/actions";

function FormCarrito() {
  const dispatch = useDispatch();
  const allCartItems = useSelector((state) => state.allCartItems);

  const userData = useSelector((state) => state.userData);
  console.log("user----************", userData);
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
      alert(
        "Debe agregar al menos un producto al carrito para poder generar la compra"
      );
    } else {
      dispatch(postSale(productSummary)).then((data) => {
        if (typeof data.payload === "object") {
          try {
            axios.post("/api/nodemailer", {
              subject: "Confirmación de compra",
              toEmail: userData,
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
              // id={id}
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
