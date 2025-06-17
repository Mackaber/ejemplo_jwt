import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

function AuthProvider ({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const { role } = jwtDecode(token)
            setIsAuthorized(role === 'ADMIN' )
        }
    },[isAuthenticated])

    return (
        <AuthContext.Provider value={{
            isAuthenticated, 
            setIsAuthenticated, 
            isAuthorized,
            setIsAuthorized
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}