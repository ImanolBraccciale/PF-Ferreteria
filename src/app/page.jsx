"use client"
import Link from "next/link"
import AddButtom from "./componentes/AddButtom/AddButtom"
import NavBar from "./componentes/NavBar/NavBar"
import ProductBar from "./componentes/ProductBar/ProductBar"
import ProductList from "./componentes/ProductList/ProductList"
import { getAllProducts } from "./redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const page = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.allProducts)
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  return (
    <div>
      <NavBar />
      <ProductBar />
      {
        allProducts.map(({ id, name, stock, costoActual, price }) => {
          return (
            <Link href={`/${id}`} key={id}>
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
      <Link href="/formProducto">
        <AddButtom />
      </Link>
    </div>
  )
}

export default page