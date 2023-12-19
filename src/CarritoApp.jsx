import { Navigate, Route, Routes } from "react-router"
import { NavBar } from "./Componentes/NavBar"
import { CarritoProvider } from "./Context/CarritoProvider"
import { ProductosProvider } from "./Context/ProductosProvider"
import { CarritoPage } from "./Pages/CarritoPage"
import { ComprasPage } from "./Pages/ComprasPage"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ComprasPage></ComprasPage>}></Route>
                        <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
                        <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
