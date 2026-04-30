function Navbar() {
    return (
        <div className="bg-white px-6 py-4 shadow flex justify-between items-center">
            <h1 className="font-semibold text-lg text-gray-800">
                Dashboard
            </h1>

            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                Logout
            </button>
        </div>
    );
}

export default Navbar;