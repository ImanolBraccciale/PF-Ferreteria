"use client";
import { useState } from "react";
import s from "@/app/componentes/NavBar/NavBar.module.css";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import {
  filterByProd,
  getAllProducts,
  getTags,
  orderBy,
} from "@/app/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function NavBar() {
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.etiquetas);

  const [modoOscuro, setModoOscuro] = useState(false);
  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  useEffect(() => {
    dispatch(getTags())
  }, [dispatch])

  function handleSort(e) {
    e.preventDefault();
    if (e.target.value === "") {
      dispatch(getAllProducts());
    } else {
      dispatch(orderBy(e.target.value));
    }
  }

  function handleFilter(e) {
    e.preventDefault();
    if (e.target.value === "") {
      dispatch(getAllProducts());
    } else {
      dispatch(filterByProd(e.target.value));
    }
  }

  const containerClassName = modoOscuro
    ? `${s.container} ${s.modoOscuro}`
    : s.container;

  return (
    <div className={containerClassName}>
      <Link href="/">
        <div className={s.logo}></div>
      </Link>
      <div>
        <div className={s.search}>
          <SearchBar />
        </div>
        <div className={s.botones}>
          <div className={s.option}>
            <select onChange={(e) => handleSort(e)}>
              <option value="all">Ordenar</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value= "MenorPrecio">"Precio Ascendente"</option>
              <option value= "MayorPrecio">"Precio descendente"</option>
            </select>
          </div>
          <div className={s.option2}>
            <select onChange={(e) => handleFilter(e)}>
              <option value='all'>Filtrar</option>
              {tag &&
                tag.map((p) => {
                  return (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className={s.rutas}>
            <Link href="/history">Historial</Link>
          </div>
          <div className={s.rutas}>
            <Link href="/suppliers">Proveedores</Link>
          </div>
        </div>
      </div>
      <div className={s.sesion}>
        <div>
          <Link href="/login">cerrar sesion</Link>
        </div>
        <div>
          <button onClick={toggleModoOscuro}>
            {modoOscuro ? "Modo Claro" : "Modo Oscuro"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
