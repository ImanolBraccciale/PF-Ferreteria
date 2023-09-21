"use client"

//TESTUSER1335749811
//KYuaUHNube
import React, { useState } from 'react';
import NavBar from '../componentes/NavBar/NavBar';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';

initMercadoPago('TEST-2704ea0d-a660-4fe8-be61-e2c32675c7ed');

const samplePaymentInfo = {
  name: 'Producto de prueba',
  price: 10.0, // Reemplaza con el precio deseado
};

function History() {
  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async (product) => {
    try {
      console.log("create");
      const response = await axios.post("/api/mercadoPago", {
        product: {
          description: product.name,
          price: product.price,
          quantity: 1,
          currency_id: "ARS",
        },

      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error('Error al crear la preferencia:', error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference(samplePaymentInfo);
    console.log("sample");
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <button onClick={handleBuy}>Realizar Pago</button>
        {preferenceId && <div><Wallet initialization={{ preferenceId }} /></div>}
      </div>
    </div>
  );
}

export default History;
