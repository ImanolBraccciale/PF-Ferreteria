"use client"

import NavBar from "./componentes/NavBar/NavBar"
import CartForm  from "./sellProcess/page"


const page = () => {
  return (
    <div>
      <div>
        <NavBar />
        <CartForm />
        {/* <Rating/> */}
        {/* <h1>
        {rolUser === "admin"
          ? "Bienvenido, administrador"
          : rolUser === "employee"
          ? "Bienvenido, empleado"
          : "Bienvenido, cliente"}
          </h1> */}
        
      </div>
    </div>
  );
};

export default page;






