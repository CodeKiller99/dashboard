import { useEffect, useState } from "react";
import { getUsers, getPosts } from "../services/api";

export function useDashboard() {
    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState({
        users: 0,
        posts: 0,
        visits: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                const [usersData, postsData] = await Promise.all([
                    getUsers(),
                    getPosts(),
                ]);

                setUsers(usersData);

                setStats({
                    users: usersData.length,
                    posts: postsData.length,
                    visits: Math.floor(Math.random() * 10000),
                });

                // 👇 GENERAR DATA DEL CHART
                const userPostCount = {};

                postsData.forEach((post) => {
                    userPostCount[post.userId] =
                        (userPostCount[post.userId] || 0) + 1;
                });

                const chartFormatted = usersData.map((user) => ({
                    name: user.name.split(" ")[0],
                    posts: userPostCount[user.id] || 0,
                }));

                setChartData(chartFormatted);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);


    return { users, stats, loading, error, chartData };
}