"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import style from "./page.module.css";

import NavBar from "../componentes/NavBar/NavBar";
import BackButtom from "../componentes/BackButtom/BackButtom";
import ProductListCart from "../componentes/ProductListCart/ProductListCart";
import ProductBarCart from "../componentes/ProductBarCart/ProductBarCart";

function FormCarrito() {
  const allCartItems = useSelector((state) => state.allCartItems);
  console.log("allCartItems", allCartItems);

  const productSummary = [];

  allCartItems.forEach((item) => {
    const productName = item.Name;
    const quantity = item.Qty;
    const price = parseFloat(item.Price); // Convierte el precio a un número

    // Buscar si el producto ya existe en el arreglo productSummary
    const existingProduct = productSummary.find((summaryItem) => summaryItem.Name === productName);

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

  console.log("productSummary", productSummary);

  // 1. Vamos a obtener todo el carrito
  // 2. Vamos a generar el listado reutilizando la vista de productos
  // 3. No sé todavía

  return (
    <>
      <NavBar />
      <ProductBarCart />
      {productSummary.map(({ Image, Name, Description, Price, Qty, Subtotal }) => {
        return (
          <ProductListCart
            key={1}
            // id={id}
            name={Name}
            description={Description}
            price={Price}
            qty={Qty}
            subTotal = {Subtotal}
          />
        );
      })}
      <Link href="/">
        <BackButtom />
      </Link>
    </>
  );
}

export default FormCarrito;
