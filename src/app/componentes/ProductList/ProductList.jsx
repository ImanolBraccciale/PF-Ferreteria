import s from "@/app/componentes/ProductList/ProductList.module.css";
import ss from "@/app/page.module.css";
import Link from "next/link";

function ProductList({ id, name, stock, costoActual, price, enlace }) {
  return (
    <div className={s.all}>
      <div className={s.container}>
        <div className={s.b}>{name}</div>
        <div className={s.c}>{stock}</div>
        <div className={s.d}>{costoActual}</div>
        <div className={s.e}>{costoActual * 1.21}</div>
        <div className={s.d}>{price}</div>
        <div className={s.f}>
          <Link className={ss.z} href={enlace}>
            <button className={s.button}>Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
