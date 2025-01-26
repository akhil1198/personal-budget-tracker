import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Delete, Check } from 'lucide-react';
import { PlusCircle } from 'lucide-react';


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
    <div>
        <button
            type="button"
            onClick={() => onClick(type)}
            className={`w-full p-4 text-sm sm:text-lg font-medium rounded-lg transition-colors ${selected
                ? 'bg-button text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
        >
            {type}
        </button>

    </div>
);

export default function AddComponent({ categories, addCategory, addExpense }) {
    const today = new Date().toISOString().split('T')[0];
    const [discardRecords, setDiscardRecords] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [showPopup, setShowPopup] = useState(false);
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

    const handleAddCategory = () => {
        if (!newCategory.trim()) {
            alert('Please enter a valid category.');
            return;
        }
        addCategory(newCategory.trim());
        setNewCategory('');
        setShowPopup(false);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const record = {
            ...newRecord,
            id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
            amount: parseFloat(newRecord.amount)
        };

        if (!newRecord.amount || !newRecord.category || !newRecord.date) {
            alert('Please fill out all fields.');
            return;
        }
        setIsLoading(true);

        addExpense(record);
        setNewRecord({ amount: '', category: '', date: today });


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
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg sm:text-md font-medium text-gray-700 mb-2">Category</label>
                        <div className="flex overflow-x-auto space-x-3 scrollbar-hide">
                            {categories && categories.map((category) => (
                                <CategoryButton
                                    key={category}
                                    type={category}
                                    selected={newRecord.category === category}
                                    onClick={handleCategoryTypeChange}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={() => setShowPopup(true)}
                                className="text-black-500 hover:text-black-600"
                            >
                                <PlusCircle className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <label className="block text-lg sm:text-md font-medium text-gray-700 mb-2">
                            Amount
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg shadow-sm px-3 py-2">
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
                            className={`flex items-center gap-2 px-6 py-3 bg-button text-white rounded-lg shadow-md transition-colors ${isLoading && 'opacity-50 cursor-not-allowed'
                                }`}
                        >
                            <Check size={20} />
                            {isLoading ? 'Saving...' : 'Add Expense'}
                        </button>
                    </div>
                </form>
            </CardContent>

            {showPopup && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-lg font-medium mb-4">Add New Category</h3>
                        <input
                            type="text"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            placeholder="Category name"
                            className="w-full p-3 border rounded-lg mb-4"
                        />
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddCategory}
                                className="bg-button text-white px-4 py-2 rounded-lg transition"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Card>
    )
}
