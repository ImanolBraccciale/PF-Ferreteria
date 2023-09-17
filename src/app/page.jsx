"use client"
import Link from "next/link"
import AddButtom from "./componentes/AddButtom/AddButtom"
import NavBar from "./componentes/NavBar/NavBar"
import ProductBar from "./componentes/ProductBar/ProductBar"
import ProductList from "./componentes/ProductList/ProductList"


const page = () => {
  return (
    <div>
      <NavBar />
      <ProductBar />
      <ProductList /><ProductList /><ProductList /><ProductList /><ProductList /><ProductList />
      <Link href="/formProducto">
        <AddButtom />
      </Link>
    </div>
  )
}

export default page