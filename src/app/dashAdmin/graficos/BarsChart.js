// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";
// import { useEffect, useState } from "react";

// ChartJS.register(
//   //Componentes y configuraciones que vienen de la librería. Mejoran las funcionalidad del grafico
//   CategoryScale, //Define y configura la escala del eje x. Permite mostrar las etiquetas de las categorias
//   LinearScale, //Define y configura la escala del eje y. Permite ajustar valores y apareciencia de forma lineal
//   PointElement, //Define y configura los puntos individuales del grafico.
//   BarElement, //Define y configura las barras en un grafico
//   Title, //Define el titulo del grafico
//   Tooltip, //Permite mostrar informacion adicional cuando el usuario interactua con los elementos del grafico
//   Legend, //Permite mostrar una leyenda que describe los conjuntos de datos representados
//   Filler // Se utiliza para personalizar el area de relleno entre las barras o lineas en el grafico
// );

// const midata = {
//   labels: [],
//   datasets: [
//     {
//       label: "Stock",
//       data: [],
//       backgroundColor: "rgba(0, 220, 195, 0.5)",
//     },
//   ],
// };

// //const url = 'https://dummyjson.com/products';
// const url = "http://localhost:3000/api/products";

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

// // const fetchChartData = async () => {
// //     const response = await axios(url)
// //     console.log('bar ',response.data);
// // };
// const [fetching, setFetching] = useState(true);

// const fetchChartData = () => {
//     setFetching(true);
//     axios.get(url)
//         .then(response => {
//             const datos = response.data;
//             console.log('bar ',datos);
//             mostrar(datos)
//             setFetching(false);
//         })
//         .catch(error => console.log(error));
// };

// const mostrar = (datos) => {
//   if (Array.isArray(datos)) {
//     datos.forEach((element) => {
//       midata.labels.push(element.name);
//       midata.datasets[0].data.push(element.stock); // Se actualiza el data del dataset existente
//     });
//   }
// };

// const misoptions = {
//   responsive: true,
//   animation: false,
//   scales: {
//     y: {
//       min: 0,
//       max: 60,
//     },
//     x: {
//       ticks: { color: "rgba(0, 220, 195)" }, // Se corrigió la especificación del color
//     },
//   },
//   plugins: {
//     legend: {
//       display: true,
//     },
//   },
// };

// export default function Bars() {
//   // Se obtienen los datos cuando el componente se monta
//   if (fetching) {
//     fetchChartData();
// }

//   return <Bar data={midata} options={misoptions} />;
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Stock",
        data: [],
        backgroundColor: "rgba(0, 220, 195, 0.5)",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const datos = response.data;
        console.log("stock ", datos);
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
          data.push(element.stock);
        });
        setChartData({
          ...chartData,
          labels: labels,
          datasets: [{ ...chartData.datasets[0], data: data }],
        });
      }
    };

    fetchData();
  }, []); // useEffect se ejecuta solo una vez al montar el componente

  const misoptions = {
    responsive: true,
    animation: false,
    scales: {
      y: {
        min: 0,
        max: 200,
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
