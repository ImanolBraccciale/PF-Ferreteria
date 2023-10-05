"use client";
import { useEffect } from "react";
import NavBar from "../componentes/NavBar/NavBar";
import SuppliersBar from "../componentes/SuppliersBar/SuppliersBar";
import SuppliersList from "../componentes/SuppliersList/SuppliersList";
import Link from "next/link";
import AddButtom from "../componentes/AddButtom/AddButtom";
import { useDispatch, useSelector } from "react-redux";
import { deleteLogicSupplier, getSuppliers } from "../redux/actions/actions";
import style from "./page.module.css";

function Suppliers() {
  const dispatch = useDispatch();
  const allSuppliers = useSelector((state) => state.allSuppliers);

  useEffect(() => {
    dispatch(getSuppliers());
  }, [dispatch, allSuppliers]);

  const handleDelete = (id) => {
    dispatch(deleteLogicSupplier(id));
  };
  const user = localStorage.getItem("user")
  if (!user) {
    window.location.replace("/login");
  }
  return (
    <div>
      <NavBar />
      <SuppliersBar />
      {allSuppliers.filter(supplier => supplier.isActive).map(
        ({ id_suppliers, name, cellphone, name_company, direction, email }) => {
          return (
            <div key={id_suppliers}>
              <SuppliersList
                name={name}
                name_company={name_company}
                direction={direction}
                cellphone={cellphone}
                email={email}
              />
              <button onClick={() => handleDelete(id_suppliers)} className={style.buttonEliminar}>Eliminar</button>
            </div>
          );
        }
      )}

      <Link href="/formProv">
        <AddButtom />
      </Link>
    </div>
  );
}

export default Suppliers;
