"use client";
"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../componentes/NavBar/NavBar";
import { getAllSales } from "../redux/actions/actions";
import StarRating from "../componentes/Rating/Rating";
import style from "./page.module.css";

function History() {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  useEffect(() => {
    dispatch(getAllSales());
  }, [dispatch]);
  const user = localStorage.getItem("user")
  if (!user) {
    window.location.replace("/login");
  }
  return (
    <div className={s.container}>
      <NavBar />
      <div>
        <h1 className={style.title}>Historial de Ventas</h1>
        <div className={style.all}>
          <div className={style.containerTabla}>
            <div className={style.tabla1}>ID</div>
            <div className={style.tabla2}>Fecha de Venta</div>
            <div className={style.tabla3}>Monto Total</div>
            <div className={style.tabla4}>Método de Pago</div>
            <div className={style.tabla}></div>
          </div>
        </div>
        {sales.map((sale) => (
          <div key={sale.id} className={style.all}>
            <div className={style.container}>
              <div className={style.b}>{sale.id}</div>
              <div className={style.b}>{sale.saleDate}</div>
              <div className={style.b}> {sale.totalAmount}</div>
              <div className={style.b}>{sale.method}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.rewiev}>
        <p>Califica tu Experiencia</p>
        <StarRating />
      </div>
    </div>
  );
}

export default History;

// const [preferenceId, setPreferenceId] = useState(null);

// "use client";

// import React, { useState } from "react";
// import NavBar from "../componentes/NavBar/NavBar";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
// import axios from "axios";
// import s from "./page.module.css";

// initMercadoPago("TEST-2704ea0d-a660-4fe8-be61-e2c32675c7ed");

// const createPreference = async (product) => {
//   try {
//     console.log("create");
//     const response = await axios.post("/api/mercadoPago", {
//       product: {
//         description: product.name,
//         price: product.price,
//         quantity: 1,
//         currency_id: "ARS",
//       },
//     });

//     const { id } = response.data;
//     return id;
//   } catch (error) {
//     console.error("Error al crear la preferencia:", error);
//   }
// };

// const handleBuy = async () => {
//   const id = await createPreference(samplePaymentInfo);
//   console.log("sample");
//   if (id) {
//     setPreferenceId(id);
//   }
// };

// return (
//   <div className={s.container}>
//     <NavBar />
//     <div className={s.content}>
//       <button className={s.button} onClick={handleBuy}>
//         Realizar Pago
//       </button>
//       {preferenceId && (
//         <div>
//           <Wallet initialization={{ preferenceId }} className={s.wallet} />
//         </div>
//       )}
//     </div>
//   </div>
// );
