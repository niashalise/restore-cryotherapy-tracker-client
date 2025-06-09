import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute ({user}) {
    const isAuthenticated = user.id ? true : false;
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedRoute;