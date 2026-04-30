// pages/Login.jsx
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("user", "true");
        navigate("/dashboard");
    };

    return (
        <button onClick={handleLogin}>
            Iniciar sesión
        </button>
    );
}

export default Login;