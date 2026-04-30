// components/Chart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { name: "Ene", users: 30 },
    { name: "Feb", users: 50 },
    { name: "Mar", users: 80 },
];

function Chart() {
    return (
        <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" />
        </LineChart>
    );
}

export default Chart;