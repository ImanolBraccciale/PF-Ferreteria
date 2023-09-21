import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ventasData from '../../data/ventas.json';

export default function Venta() {
  const router = useRouter();
  const { id } = router.query;
  const venta = ventasData.find((v) => v.id === parseInt(id));

  if (!venta) {
    return <Layout>Venta no encontrada</Layout>;
  }

  return (
    <Layout>
      <h1>Detalles de la Venta</h1>
      <p>Producto: {venta.producto}</p>
      <p>Cantidad: {venta.cantidad}</p>
      <p>Total: {venta.total}</p>
    </Layout>
  );
}
