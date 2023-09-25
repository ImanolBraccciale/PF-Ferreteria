import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import axios from "axios";
import { useEffect } from "react";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
);

let midata = {
    labels: [],
    datasets: [ // cada una de las lineas del grafico
        {
            label: "Stock de productos",
            data: [],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ], 
            borderWidth: 1,
        }
    ]
}

const url = 'api/products'

const fetchChartData = () => {
    axios.get(url)
        .then(response => {
            const datos = response.data;
            console.log(datos);
            mostrar(datos)
        })
        .catch(error => console.log(error))
}

const mostrar = (datos) => {
    if (Array.isArray(datos)) {
        datos.forEach(element => {
            midata.labels.push(element.name);
            midata.datasets[0].data.push(element.stock);  // Se actualiza el data del dataset existente
        });
    }
};


let misoptions = {
    responsive: true,
    maintainAspectRatio: false,
}

export default function Pies() {
    useEffect(() => {
        fetchChartData();
        }, []);
    return <Pie data={midata} options={misoptions}/>
}



// const url = 'https://dummyjson.com/products';

// const fetchChartData = () => {
//     axios.get(url)
//         .then(response => {
//             const datos = response.data;
//             console.log(datos.products);  // Accedo a los productos
//             mostrar(datos.products);
//         })
//         .catch(error => console.log(error));
// };

// const mostrar = (datos) => {
//     if (Array.isArray(datos)) {
//         datos.forEach(element => {
//             midata.labels.push(element.title);
//             midata.datasets[0].data.push(element.stock);  // Se actualiza el data del dataset existente
//         });
//     }
// };

// const misoptions = {
//     responsive: true,
//     animation: false,
//     scales: {
//         y: {
//             min: 0,
//             max: 200,
//         },
//         x: {
//             ticks: { color: "rgba(0, 220, 195)" }  // Se corrigió la especificación del color
//         }
//     },
//     plugins: {
//         legend: {
//             display: true
//         }
//     }
// };

// export default function Bars() {
//     // Se obtienen los datos cuando el componente se monta
//     useEffect(() => {
//         fetchChartData();
//     }, []);

//     return <Bar data={midata} options={misoptions} />;
// }
