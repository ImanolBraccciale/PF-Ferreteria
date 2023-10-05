"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import style from "./page.module.css";
import { useState } from "react";
import NavBar from "../componentes/NavBar/NavBar";
import BackButtom from "../componentes/BackButtom/BackButtom";
import ProductListCart from "../componentes/ProductListCart/ProductListCart";
import ProductBarCart from "../componentes/ProductBarCart/ProductBarCart";

import { postSale } from "../redux/actions/actions";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import s from "./page.module.css";

initMercadoPago("TEST-2704ea0d-a660-4fe8-be61-e2c32675c7ed");

function FormCarrito() {
  const dispatch = useDispatch();
  const allCartItems = useSelector((state) => state.allCartItems);
  console.log("allCartItems", allCartItems);
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const productSummary = [];
  const [preferenceId, setPreferenceId] = useState(null);

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
      if (paymentMethod === "mercadoPago") {
        console.log("Pagar con mercado pago");
        const subtotalsSum = productSummary.reduce(
          (total, item) => total + item.Subtotal,
          0
        );
        try {
          console.log("create");
          const response = await axios.post("/api/mercadoPago", {
            product: {
              description: "Venta general",
              price: subtotalsSum,
              quantity: 1,
              currency_id: "ARS",
            },
          });

          const { id } = response.data;
          console.log("sample");
          if (id) {
            setPreferenceId(id);
          }
        } catch (error) {
          console.error("Error al crear la preferencia:", error);
        }
      } else {
        const dataToSend = {
          productSummary,
          paymentMethod,
        };
        dispatch(postSale(dataToSend)).then((data) => {
          if (typeof data.payload === "object") {
            alert("Su compra se realizó existósamente.");
            // Redirecciona por ventana a la página principal y limpia el carrito
            window.location.href = "/";
          } else {
            alert(
              "Hubo un error al generar su compra, por favor inténtelo nuevamente."
            );
          }
        });
      }
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
      <select
        name="paymentMethod"
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta</option>
        <option value="mercadoPago">MercadoPago</option>
      </select>
      {preferenceId && (
        <div>
          <Wallet initialization={{ preferenceId }} className={s.wallet} />
        </div>
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
