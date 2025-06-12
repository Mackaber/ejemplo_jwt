import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = () => {
    const isAuth  = true
    return isAuth ? <Outlet /> /* Continua con la renderización */ : 
                    <Navigate to='/' /> /* Lo manda a Login*/
}

export default PrivateRoutes