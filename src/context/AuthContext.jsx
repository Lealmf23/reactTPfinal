/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(localStorage.getItem('login') ? true : false)
    const handleLogin = () => {
        setLogin(true)
        localStorage.setItem('login', true)
    }
    const handleLogout = () => {
        setLogin(false)
        localStorage.removeItem('login')
    }
    return <AuthContext.Provider value={{ login, handleLogin, handleLogout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
