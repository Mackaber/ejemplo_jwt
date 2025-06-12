import { Outlet, Navigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const PrivateRoutes = () => {
    const { isAuth } = useAuthContext()
    return isAuth ? <Outlet /> /* Continua con la renderización */ : 
                    <Navigate to='/' /> /* Lo manda a Login*/
}

export default PrivateRoutes