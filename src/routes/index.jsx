import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from '../helpers/PrivateRoutes'
import Login from '../pages/Login'
import Secret from '../pages/Secret'
const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<PrivateRoutes />}>
                <Route path='/secret' element={<Secret />} />
            </Route>
        </Routes>
    )
}

export default RoutesIndex