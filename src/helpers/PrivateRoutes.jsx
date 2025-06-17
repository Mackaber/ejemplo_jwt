import { Outlet, Navigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const PrivateRoutes = () => {
    const { isAuthorized } = useAuthContext()
    return isAuthorized ? <Outlet /> /* Continua con la renderización */ : 
                    <Navigate to='/' /> /* Lo manda a Login*/
}

export default PrivateRoutes