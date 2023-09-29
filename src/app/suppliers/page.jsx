"use client";
import { useEffect } from "react";
import NavBar from "../componentes/NavBar/NavBar";
import SuppliersBar from "../componentes/SuppliersBar/SuppliersBar";
import SuppliersList from "../componentes/SuppliersList/SuppliersList";
import Link from "next/link";
import AddButtom from "../componentes/AddButtom/AddButtom";
import { useDispatch, useSelector } from "react-redux";
import { getSuppliers } from "../redux/actions/actions";

function suppliers() {
  const dispatch = useDispatch();
  const allSuppliers = useSelector((state) => state.allSuppliers);
  useEffect(() => {
    dispatch(getSuppliers());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <SuppliersBar />
      {allSuppliers.map(
        ({ name, cellphone, name_company, direction, email }) => {
          return (
            <SuppliersList
              name={name}
              name_company={name_company}
              direction={direction}
              cellphone={cellphone}
              email={email}
            />
          );
        }
      )}

      <Link href="/formProv">
        <AddButtom />
      </Link>
    </div>
  );
}

export default suppliers;
