import MainLayout from "../layouts/MainLayout";

function Admin() {
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Panel Admin</h1>
            <p className="text-gray-500">
                Solo accesible para administradores
            </p>
        </MainLayout>
    );
}

export default Admin;