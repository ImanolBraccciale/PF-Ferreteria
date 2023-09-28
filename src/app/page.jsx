"use client";
import Link from "next/link";
import AddButtom from "./componentes/AddButtom/AddButtom";
import VentaButton from "./componentes/IngresarVenta/VentaButton";
import NavBar from "./componentes/NavBar/NavBar";
import ProductBar from "./componentes/ProductBar/ProductBar";
import ProductList from "./componentes/ProductList/ProductList";
import { getAllProducts } from "./redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import s from "@/app/page.module.css";
import Footer from "./componentes/Footer/Footer";

const page = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  // const userEmail = useSelector((state) => state.user)
  // console.log('useEmail, ',userEmail);
  // const [rolUser, setRolUser] = useState('admin')
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <div>
        <NavBar />
        <ProductBar />
        {/* <h1>
        {rolUser === "admin"
          ? "Bienvenido, administrador"
          : rolUser === "employee"
          ? "Bienvenido, empleado"
          : "Bienvenido, cliente"}
      </h1> */}
<<<<<<< HEAD
        {allProducts.map(({ id, name, stock, costoActual, price }) => {
          return (
            <Link className={s.z} href={`/${id}`} key={id}>
              <ProductList
                id={id}
                name={name}
                stock={stock}
                costoActual={costoActual}
                price={price}
              />
            </Link>
          );
        })}
=======
        {
          allProducts.map(({ id, name, stock, costoActual, price }) => {
            return (
              <Link className={s.z} href={`/${id}`} key={id}>
                <ProductList
                  id={id}
                  name={name}
                  stock={stock}
                  costoActual={costoActual}
                  price={price}
                />
              </Link>

            )
          })
        }
>>>>>>> a33347855d5fdcb670fe0e192c6997673f1d74b0
        <Link href="/formProducto">
          <AddButtom />
        </Link>
      </div>
      <Link href="/formCarrito">
        <VentaButton />
      </Link>
      <div>
        <Footer />
      </div>
    </div>
<<<<<<< HEAD
  );
};
=======

  )
}
>>>>>>> a33347855d5fdcb670fe0e192c6997673f1d74b0

export default page;
