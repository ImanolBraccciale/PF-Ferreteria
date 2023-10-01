// import { Line } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler,
// } from "chart.js";
// import axios from "axios";
// import { useEffect } from "react";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler
// );

// const midata = {
//     labels: [],
//     datasets : [
//         {
//             label: "price",
//             data: [],
//             tension: 0.5,
//             fill: true,
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: "rgba(255, 99, 132, 0.5)",
//             pointRadius: 5,
//             pointBorderColor: "rgba(255, 90, 132)",
//             pointBackgroundColor: "rgba(255,99,132)"
//         }
//     ]
// }

// //const url = 'https://dummyjson.com/products';
// const url = 'http://localhost:3000/api/products'

// //ESTE FUNCIONA CON LA API DE PRUEBA
// // const fetchChartData = () => {
// //     axios.get(url)
// //         .then(response => {
// //             const datos = response.data;
// //             console.log(datos.products);
// //             mostrar(datos.products)
// //         })
// //         .catch(error => console.log(error))
// // }

// const fetchChartData = () => {
//     axios.get(url)
//         .then(response => {
//             const datos = response.data;
//             console.log(datos);
//             mostrar(datos)
//         })
//         .catch(error => console.log(error))
// }

// const mostrar = (datos) => {
//     if(Array.isArray(datos)) {
//         datos.forEach(element => {
//             midata.labels.push(element.title);
//             midata.datasets[0].data.push(element.price)
//         })
//     }
// }

// let misoptions = {
//     scales: {
//         y : {
//             min: 0
//         },
//         x : {
//             ticks: {color: "blue"}
//         }
//     },
//     plugins: {
//         legend: {
//             display: true
//         }
//     }
// }

// export default function LinesChart() {

//     useEffect(() => {
//         fetchChartData();
//     }, [])
//     return <Line data={midata} options={misoptions}/>
// }
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LinesChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "precios",
        data: [],
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 90, 132)",
        pointBackgroundColor: "rgba(255,99,132)",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const datos = response.data;
        console.log("precio ", datos);
        mostrar(datos);
      } catch (error) {
        console.error(error);
      }
    };

    const mostrar = (datos) => {
      if (Array.isArray(datos)) {
        const labels = [];
        const data = [];
        datos.forEach((element) => {
          labels.push(element.name);
          data.push(element.costoActual);
          console.log("a ver", data);
        });
        setChartData({
          ...chartData,
          labels: labels,
          datasets: [
            {
              ...chartData.datasets[0],
              data: data,
            },
          ],
        });
      }
    };

    fetchData();
  }, []); // useEffect se ejecuta solo una vez al montar el componente

  let misoptions = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "blue" },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Line data={chartData} options={misoptions} />;
}
