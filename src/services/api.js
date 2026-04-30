const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) throw new Error("Error al obtener usuarios");
    return res.json();
};

export const getPosts = async () => {
    const res = await fetch(`${BASE_URL}/posts`);
    if (!res.ok) throw new Error("Error al obtener posts");
    return res.json();
};