import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { useDashboard } from "../hooks/useDashboard";
import UserList from "../components/UserList";
import SkeletonCard from "../components/SkeletonCard.jsx";
import SkeletonChart from "../components/SkeletonChart.jsx";
import SkeletonList from "../components/SkeletonList.jsx";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect } from "react";


function Dashboard() {
    const { users, stats, loading, error, chartData } = useDashboard();

    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 400);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // 🔥 FIX: reset cuando buscas
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentPage(1);
    }, [debouncedSearch]);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredUsers.length / usersPerPage)
    );

    if (loading) {
        return (
            <div className="flex min-h-screen bg-white">
                <Sidebar />

                <div className="flex-1 flex flex-col bg-gray-50 p-6 space-y-6">
                    <Navbar />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>

                    <SkeletonChart />
                    <SkeletonList />
                </div>
            </div>
        );
    }

    if (error) return <p className="p-6 text-red-500">{error}</p>;

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-auto bg-gray-50 border-l">
                <Navbar />

                <div className="p-6 space-y-6">
                    <h2 className="text-2xl font-bold">Resumen</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card title="Usuarios" value={stats.users} />
                        <Card title="Posts" value={stats.posts} />
                        <Card title="Visitas" value={stats.visits} />
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <Chart data={chartData} />
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow">
                        <input
                            type="text"
                            placeholder="Buscar usuarios..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <UserList users={currentUsers} />

                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Anterior
                        </button>

                        <span className="text-sm text-gray-600">
                            Página {currentPage} de {totalPages}
                        </span>

                        <button
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;