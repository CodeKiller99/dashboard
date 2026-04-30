// components/UserList.jsx
function UserList({ users }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow mt-6">
            {users.map((user) => (
                <div key={user.id} className="border-b py-2">
                    {user.name}
                </div>
            ))}
        </div>
    );
}

export default UserList;