import Link from 'next/link';


const IngresarVentaButton = () => {
  return (
    <Link href="/registroDeVentas">
      <a className="btn-ingresar-venta">Ingresar Venta</a>
    </Link>
  );
};

export default IngresarVentaButton;
