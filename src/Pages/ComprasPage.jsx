import { useContext } from "react"
import { Crad } from "../Componentes/Crad"
import { CarritoContext } from "../Context/CarritoContext"
import { ProductosContext } from "../Context/ProductosContext"

export const ComprasPage = () => {

  const {productos} = useContext(ProductosContext) 

  const {agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra)=>{
    agregarCompra(compra)
  }
  const handleQuitar = (id)=>{
    eliminarCompra(id)
  }
  return (
    <>
        <h1>Compras: </h1>
        <hr />
        {
            productos.map(producto =>(
                <Crad key={producto.id}
                imagen={producto.image}
                titulo={producto.title}
                decripcion={producto.description}
                precio={producto.price}
                handleAgregar={()=>handleAgregar(producto)}
                handleQuitar={()=>handleQuitar(producto.id)}
                >

                </Crad> 
            ))
        }
    </>
  )
}
