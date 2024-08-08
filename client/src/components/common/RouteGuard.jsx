import { useContext } from "react"

import { Navigate, Outlet } from "react-router-dom"

import { UserContext } from "../../context/UserContext"

const RouteGuard = () => {
    const { isAuthenticated } = useContext(UserContext)

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default RouteGuard