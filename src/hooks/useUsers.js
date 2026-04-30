// hooks/useUsers.js
import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

export const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    return { users };
};