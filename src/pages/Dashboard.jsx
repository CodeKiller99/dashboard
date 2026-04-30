import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { useUsers } from "../hooks/useUsers";
import UserList from "../components/UserList";

function Dashboard() {
    const { users } = useUsers();

    return (
        <div className="flex min-h-screen bg-white">

            {/* SIDEBAR */}
            <Sidebar />

            {/* CONTENIDO */}
            <div className="flex-1 flex flex-col overflow-auto bg-gray-50 border-l">

                <Navbar />

                <div className="p-6 space-y-6">
                    <h2 className="text-2xl font-bold">Resumen</h2>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card title="Usuarios" value="120" />
                        <Card title="Ventas" value="$3,200" />
                        <Card title="Visitas" value="8,430" />
                    </div>

                    {/* CHART */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <Chart />
                    </div>

                    {/* USERS */}
                    <UserList users={users} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;