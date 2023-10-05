import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

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

export default function Pies() {
  const allProducts = useSelector((state) => state.products);
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

  useEffect(() => {
    const mostrar = (productos) => {
      if (Array.isArray(productos)) {
        const labels = [];
        const data = [];
        productos.filter((product) => product.isActive).forEach((element) => {
          labels.push(element.name);
          data.push(element.stock);
        });
        setChartData({
          ...chartData,
          labels: labels,
          datasets: [{ ...chartData.datasets[0], data: data }],
        });
      }
    };

    mostrar(allProducts);
  }, [allProducts, chartData]);

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
//aaaaaaaaaaaa
  return <Bar data={chartData} options={misoptions} />;
}
