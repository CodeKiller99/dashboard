// routes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const isAuth = localStorage.getItem("user");

    return isAuth ? children : <Navigate to="/" />;
}

export default PrivateRoute;