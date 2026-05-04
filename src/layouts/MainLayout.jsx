import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />

            <div className="flex-1 flex flex-col bg-gray-50">
                <Navbar />

                <div className="p-6">{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;