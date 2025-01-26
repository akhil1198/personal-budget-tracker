import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Plus, Delete, Check } from 'lucide-react';
import axios from 'axios';
import AnalyticsComponent from './components/AnalyticsComponent';
import AddComponent from './components/AddComponent';



const ExpenseTracker = () => {
	const [viewType, setViewType] = useState('Add');
	const [expenses, setExpenses] = useState([
		{ category: "Food", amount: 50, date: "2025-01-20" },
		{ category: "Travel", amount: 150, date: "2025-01-21" },
		{ category: "Groceries", amount: 30, date: "2025-01-22" },
		{ category: "School", amount: 75, date: "2025-01-23" },
		{ category: "Food", amount: 40, date: "2025-01-24" },
		{ category: "Travel", amount: 120, date: "2025-01-25" },
		{ category: "Food", amount: 50, date: "2025-01-20" },
		{ category: "Travel", amount: 70, date: "2025-01-21" },
		{ category: "Groceries", amount: 30, date: "2025-01-22" },
		{ category: "School", amount: 75, date: "2025-01-23" },
		{ category: "Food", amount: 40, date: "2025-01-24" },
		{ category: "Travel", amount: 10, date: "2025-01-25" },
		{ category: "Food", amount: 50, date: "2025-01-20" },
		{ category: "Travel", amount: 50, date: "2025-01-21" },
		{ category: "Groceries", amount: 30, date: "2025-01-22" },
		{ category: "School", amount: 75, date: "2025-01-23" },
		{ category: "Food", amount: 40, date: "2025-01-24" },
	]);
	const [categories, setCategories] = useState(["Food", "Travel", "Groceries", "School"]);

	const handleViewTypeChange = (view) => {
		setViewType(view)
	};

	const addCategory = (category) => {
		setCategories((prev) => [...prev, category]);
	};

	const addExpense = (expense) => {
		setExpenses((prev) => [...prev, expense]);
	};

	return (
		<div className="min-h-screen bg-background">

			<div className="max-w-3xl mx-auto p-4 bg-background">
				<div className="text-center m-5 slex grid grid-cols-2">
					<h1 className="text-2xl sm:text-3xl font-bold text-button text-left">E-Tracker</h1>
					<div className="text-center slex grid grid-cols-2 gap-x-4">
						<button type="button"
							onClick={(() => handleViewTypeChange('Add'))}
							className={`max-w-sm p-2 text-sm sm:text-md font-medium rounded-lg transition-colors ${viewType === 'Add'
								? 'bg-button text-white shadow-md'
								: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}>Add</button>
						<button type="button"
							onClick={(() => handleViewTypeChange('Analytics'))}
							className={`max-w-sm p-2 text-sm sm:text-md font-medium rounded-lg transition-colors ${viewType === 'Analytics'
								? 'bg-button text-white shadow-md'
								: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}>Analytics</button>
					</div>
				</div>

				{viewType === 'Add' ? (
					<AddComponent
						categories={categories}
						addCategory={addCategory}
						addExpense={addExpense}
					/>
				) : (
					<AnalyticsComponent
						categories={categories}
						expenses={expenses}
					/>
				)}

			</div>
		</div>
	);
};

export default ExpenseTracker;
