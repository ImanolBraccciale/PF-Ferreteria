"use client";
import { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import NavBar from "../componentes/NavBar/NavBar";
import BackButtom from "../componentes/BackButtom/BackButtom";

function FormCarrito() {
  return (
    <>
      <NavBar />
      <Link href="/">
        <BackButtom />
      </Link>
    </>
  );
}

export default FormCarrito;