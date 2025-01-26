import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Plus, Delete, Check } from 'lucide-react';
import axios from 'axios';
import AnalyticsComponent from './components/AnalyticsComponent';
import AddComponent from './components/AddComponent';



const ExpenseTracker = () => {
	const [viewType, setViewType] = useState('Add');

	const handleViewTypeChange = (view) => {
		setViewType(view)
	};

	return (
		<div className="max-w-3xl mx-auto p-4">
			<div className="text-center m-5 slex grid grid-cols-2">
				<h1 className="text-3xl font-bold text-blue-600 text-left">E-Tracker</h1>
				<div className="text-center slex grid grid-cols-2 gap-x-4">
					<button type="button"
						onClick={(() => handleViewTypeChange('Add'))}
						className={`max-w-sm p-2 text-sm sm:text-md font-medium rounded-lg transition-colors ${viewType === 'Add'
							? 'bg-blue-600 text-white shadow-md'
							: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}>Add</button>
					<button type="button"
						onClick={(() => handleViewTypeChange('Analytics'))}
						className={`max-w-sm p-2 text-sm sm:text-md font-medium rounded-lg transition-colors ${viewType === 'Analytics'
							? 'bg-blue-600 text-white shadow-md'
							: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}>Analytics</button>
				</div>
			</div>

			{viewType === 'Add' ? (
				<AddComponent />
			) : (
				<AnalyticsComponent />
			)}

		</div>
	);
};

export default ExpenseTracker;
