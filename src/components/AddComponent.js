import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Delete, Check } from 'lucide-react';


const NumberPad = ({ value, onChange }) => {

    const handleClick = (num) => {
        let newValue = value.toString();

        // Preventing adding multiple decimals here
        if (num === '.' && newValue.includes('.')) {
            return;
        }

        newValue += num.toString();
        onChange(newValue);
    };

    const handleDelete = () => {
        let newValue = value.toString().slice(0, -1);
        onChange(newValue || '');
    };

    return (
        <div className="grid grid-cols-3 gap-2 mt-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.'].map((num) => (
                <button
                    key={num}
                    type="button"
                    onClick={() => handleClick(num)}
                    className="p-4 text-xl font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    {num}
                </button>
            ))}

            <button
                type="button"
                onClick={() => handleClick(0)}
                className="p-4 text-xl font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
                0
            </button>
            <button
                type="button"
                onClick={handleDelete}
                className="p-4 text-xl font-semibold bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
                <Delete className="w-6 h-6 mx-auto" />
            </button>
        </div>
    );
};

const CategoryButton = ({ type, selected, onClick }) => (
    <button
        type="button"
        onClick={() => onClick(type)}
        className={`w-full p-4 text-sm sm:text-lg font-medium rounded-lg transition-colors ${selected
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
    >
        {type}
    </button>
);

export default function AddComponent() {
    const today = new Date().toISOString().split('T')[0];
    const [discardRecords, setDiscardRecords] = useState([]);

    const [newRecord, setNewRecord] = useState({
        date: today,
        category: '',
        amount: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecord(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAmountChange = (value) => {
        console.log(value)
        if (/^(\d+(\.\d{0,2})?)?$/.test(value)) {
            setNewRecord(prev => ({
                ...prev,
                amount: value
            }));
        }

    };

    const handleCategoryTypeChange = (category) => {
        setNewRecord(prev => ({
            ...prev,
            category
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newRecord.date || !newRecord.amount || !newRecord.category) return;

        const record = {
            ...newRecord,
            // need to change this
            id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
            amount: parseFloat(newRecord.amount)
        };

        setIsLoading(true);

        console.log(record)
        setIsLoading(false);

    };

    return (
        <Card className="w-full shadow-lg">
            <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg sm:text-md font-medium text-gray-700 mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={newRecord.date}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg sm:text-md font-medium text-gray-700 mb-2">Category</label>
                        <div className="flex overflow-x-auto space-x-3 scrollbar-hide">
                            {['Travel', 'Food', 'Groceries', 'Fun', 'Work', 'Home'].map((category) => (
                                <CategoryButton
                                    key={category}
                                    type={category}
                                    selected={newRecord.category === category}
                                    onClick={handleCategoryTypeChange}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <label className="block text-lg sm:text-md font-medium text-gray-700 mb-2">
                            Amount
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 px-3 py-2">
                            <span className="text-gray-400 md:text-2xl">$</span>

                            <input
                                type="text"
                                name="amount"
                                value={newRecord.amount}
                                onChange={(e) => handleAmountChange(e.target.value)}
                                className="ml-2 md:text-4xl font-bold text-gray-800 flex-grow text-left border-none focus:outline-none"
                                required
                            />
                        </div>

                        <NumberPad value={newRecord.amount} onChange={handleAmountChange} />
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                                }`}
                        >
                            <Check size={20} />
                            {isLoading ? 'Saving...' : 'Add Expense'}
                        </button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
