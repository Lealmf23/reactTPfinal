import { Route, Routes } from 'react-router-dom'

import ProductoDetalle from '../pages/ProductoDetalle'
import Login from '../pages/Login'
import Registro from '../pages/Registro'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'

const Public = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='/login'
                element={<Login />}
            />
            <Route
                path='/Registro'
                element={<Registro />}
            />
            <Route
                path='/Dashboard'
                element={<Dashboard />}
            />
            <Route
                path='/Contacto'
                element={<Contacto />}
            />
            <Route
                path='/:id'
                element={<ProductoDetalle />}
            />
        </Routes>
    )
}

export default Public
