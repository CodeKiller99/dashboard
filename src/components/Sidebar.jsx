import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Menu } from "lucide-react";

function Sidebar() {
    const [collapsed, setCollapsed] = useState(() => {
        return localStorage.getItem("sidebar") === "true";
    });

    const toggleSidebar = () => {
        const newState = !collapsed;
        setCollapsed(newState);
        localStorage.setItem("sidebar", newState);
    };

    return (
        <aside
            className={`h-screen bg-gray-900 text-white flex flex-col p-4 
transition-all duration-300 ease-in-out ${
                collapsed ? "w-20" : "w-64"
            }`}
        >
            {/* TOP */}
            <div className="flex items-center justify-between mb-10">
                {!collapsed && (
                    <h2 className="text-xl font-bold">Mi Dashboard</h2>
                )}

                <button
                    onClick={toggleSidebar}
                    className={`flex items-center ${
                        collapsed ? "justify-center" : "gap-3"
                    } px-3 py-3 rounded-lg transition`}
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-2">

                <NavItem
                    to="/dashboard"
                    icon={<LayoutDashboard size={20} />}
                    label="Inicio"
                    collapsed={collapsed}
                />

                <NavItem
                    to="/dashboard/users"
                    icon={<Users size={20} />}
                    label="Usuarios"
                    collapsed={collapsed}
                />


            </nav>
        </aside>
    );
}

function NavItem({ to, icon, label, collapsed }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg transition group ${
                    collapsed ? "justify-center" : "gap-3"
                } ${
                    isActive
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
            }
        >
            {/* ICON */}
            <div className="flex items-center justify-center min-w-[20px]">
                {icon}
            </div>

            {/* TEXTO */}
            <span
                className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
                    collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                }`}
            >
        {label}
      </span>
        </NavLink>
    );

}

export default Sidebar;