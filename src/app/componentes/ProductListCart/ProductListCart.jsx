import s from "@/app/componentes/ProductList/ProductList.module.css";
import ss from "@/app/page.module.css";
import Link from "next/link";

function ProductListCart({ name, image, description, price, qty, subTotal }) {
  return (
    <div className={s.all}>
      <div className={s.container}>
        <div className={s.b}>{image}</div>
        <div className={s.b}>{name}</div>
        <div className={s.c}>{description}</div>
        <div className={s.d}>{price}</div>
        <div className={s.d}>{qty}</div>
        <div className={s.d}>{subTotal}</div>
        <div className={s.f}>
          {/* <Link className={ss.z}>
            <button className={s.button}>Detalle</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default ProductListCart;
