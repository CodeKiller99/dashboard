import { useState, useRef, useEffect } from "react";
import { User, LogOut, Settings } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    const { logout, user } = useAuth();
    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    // cerrar al hacer click fuera
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-white px-6 py-4 shadow flex justify-between items-center">

            {/* LEFT */}
            <h1 className="text-lg font-semibold text-gray-800">
                Dashboard
            </h1>

            {/* RIGHT */}
            <div className="relative" ref={dropdownRef}>

                {/* PROFILE BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <User size={16} />
                    </div>

                    <span className="text-sm font-medium">Danilo</span>
                </button>

                {/* DROPDOWN */}
                {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border p-2 z-50 animate-fade-in">

                        <span className="flex items-center gap-2 w-full px-3 py-2">
                            {user?.email}
                        </span>

                        <span className="flex items-center gap-2 w-full px-3 py-2 text-gray-400">
                            {user?.role}
                        </span>

                        {user?.role === "admin" && (
                            <button className="text-sm text-blue-500">
                                Panel Admin
                            </button>
                        )}

                        <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-100">
                            <Settings size={16} />
                            Configuración
                        </button>

                        <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-100">
                            <User size={16} />
                            Perfil
                        </button>

                        <hr className="my-2" />

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-red-100 text-red-600"
                        >
                            Cerrar sesión
                        </button>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;