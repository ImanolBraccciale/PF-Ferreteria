import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
//aaaa
export default function Bars() {
  // Obtener el estado global de ventas desde Redux
  const sales = useSelector((state) => state.sale);

  // Estado local para almacenar los datos del gráfico
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Ventas",
        data: [],
        backgroundColor: "rgba(220, 95, 0, 0.7)",
      },
    ],
  });

  // useEffect para actualizar el gráfico cuando cambien los datos de ventas
  useEffect(() => {
    // Procesar los datos de ventas y actualizar el estado local del gráfico
    const labels = sales.map((element) => element.saleDate);
    const data = sales.map((element) => element.totalAmount);

    setChartData({
      ...chartData,
      labels: labels,
      datasets: [{ ...chartData.datasets[0], data: data }],
    });
  }, [sales]); // useEffect se ejecutará cuando cambien los datos de ventas

  // Opciones de configuración del gráfico
  const misoptions = {
    responsive: true,
    animation: false,
    scales: {
      y: {
        min: 0,
        max: 500,
      },
      x: {
        ticks: { color: "rgba(220, 95, 0)" },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  // Renderizar el gráfico de barras
  return <Bar data={chartData} options={misoptions} />;
}
