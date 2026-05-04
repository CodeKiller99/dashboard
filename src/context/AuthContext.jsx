import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        await new Promise((res) => setTimeout(res, 1000));

        if (email === "admin@test.com" && password === "123456") {
            const userData = { email, role: "admin" };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));

            // 🔥 IMPORTANTE
            return { success: true, user: userData };
        }

        if (email === "user@test.com" && password === "123456") {
            const userData = { email, role: "user" };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));

            // 🔥 IMPORTANTE
            return { success: true, user: userData };
        }

        return { success: false, message: "Credenciales inválidas" };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);