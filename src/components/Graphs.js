import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Graphs = ({ records }) => {
    const [graphType, setGraphType] = useState('Bar'); // Default to bar graph

    const categoryData = Object.values(
        records.reduce((acc, record) => {
            acc[record.category] = acc[record.category] || { category: record.category, total: 0 };
            acc[record.category].total += record.amount;
            return acc;
        }, {})
    );

    // Get current month expenses for the line chart
    const currentMonth = new Date().getMonth(); // Current month (0-11)
    const currentMonthData = records
        .filter((record) => new Date(record.date).getMonth() === currentMonth)
        .map((record) => ({
            date: record.date,
            amount: record.amount,
        }));

    // Colors for Pie Chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    return (
        <div className="p-4 space-y-6">
            {/* Dropdown to select graph type */}
            <div className="flex justify-center mb-4">
                <select
                    value={graphType}
                    onChange={(e) => setGraphType(e.target.value)}
                    className="border p-2 rounded-lg text-sm sm:text-md"
                >
                    <option value="Bar">Bar Chart</option>
                    <option value="Pie">Pie Chart</option>
                    <option value="Line">Line Chart</option>
                </select>
            </div>

            {graphType === 'Bar' && (
                <div className="overflow-x-auto">
                    <ResponsiveContainer
                        width={categoryData.length > 5 ? categoryData.length * 150 : '100%'}
                        height={400}
                    >
                        <BarChart data={categoryData}>
                            <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}

            {graphType === 'Pie' && (
                <div className="overflow-hidden">
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                dataKey="total"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius={150}
                                fill="#8884d8"
                                label={(entry) => entry.category}
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}

            {graphType === 'Line' && (
                <div className="overflow-hidden">
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={currentMonthData}>
                            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default Graphs;
