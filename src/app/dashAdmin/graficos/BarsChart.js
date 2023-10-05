import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
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

export default function Bars() {
  const allProducts = useSelector((state) => state.products);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Precio por Producto",
        data: [],
        backgroundColor: "rgba(0, 220, 195, 0.5)",
      },
    ],
  });

  useEffect(() => {
    const mostrar = (datos) => {
      if (Array.isArray(datos)) {
        const labels = [];
        const data = [];
        datos.filter((product) => product.isActive).forEach((element) => {
          labels.push(element.name);
          data.push(element.costoActual);
        });
        setChartData({
          ...chartData,
          labels: labels,
          datasets: [{ ...chartData.datasets[0], data: data }],
        });
      }
    };

    mostrar(allProducts);
  }, [allProducts]);

  const misoptions = {
    responsive: true,
    animation: false,
    scales: {
      y: {
        min: 0,
        max: 1000,
      },
      x: {
        ticks: { color: "rgba(0, 220, 195)" },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Bar data={chartData} options={misoptions} />;
}
