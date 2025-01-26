import React, { useState } from 'react';
import { Card, CardContent } from './ui/card'
import Table from './Table';
import Graphs from './Graphs';

export default function AnalyticsComponent() {
    const [viewType, setViewType] = useState('Records');

    const handleViewTypeChange = (view) => {
        setViewType(view)
    };

    const data = [
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" }, { category: "Groceries", amount: 20, date: "2025-01-26" },
        { category: "Food", amount: 50, date: "2025-01-20" },
        { category: "Travel", amount: 150, date: "2025-01-21" },
        { category: "Groceries", amount: 30, date: "2025-01-22" },
        { category: "Fun", amount: 75, date: "2025-01-23" },
        { category: "Food", amount: 40, date: "2025-01-24" },
        { category: "Travel", amount: 120, date: "2025-01-25" },
        { category: "Groceries", amount: 20, date: "2025-01-26" },
    ];

    return (
        <Card className="w-full shadow-lg">
            <CardContent className="p-6">
                <div className="mb-5 flex justify-center">
                    <div className="text-center slex grid grid-cols-2 gap-x-6">
                        <button type="button"
                            onClick={(() => handleViewTypeChange('Records'))}
                            className={`w-20 lg:w-40 p-2 text-sm lg:text-lg font-small rounded-lg transition-colors ${viewType === 'Records'
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}>Records</button>
                        <button type="button"
                            onClick={(() => handleViewTypeChange('Graphs'))}
                            className={`w-20 lg:w-40 p-2 text-sm lg:text-lg font-small rounded-lg transition-colors ${viewType === 'Graphs'
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}>Graphs</button>
                    </div>
                </div>

                {viewType === 'Records' ? (
                    <Table records={data} />
                ) : (
                    <Graphs records={data} />
                )}




            </CardContent>
        </Card>

    )
}
