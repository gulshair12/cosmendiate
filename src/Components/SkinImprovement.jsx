import React, { useState, useEffect } from 'react';

export const SkinImprovement = () => {
    const initialTreatments = [
        "Chemical Peels",
        "Microdermabrasion",
        "Laser Treatments",
        "Light Therapies"
    ];

    const treatmentOptions = [
        "Select Treatment...",
        "Chemical Peels",
        "Microdermabrasion",
        "Laser Treatments",
        "Light Therapies",
        "Botox",
        "Dermal Fillers",
        "Skin Tightening",
        "Acne Treatment",
        "Hydrafacial",
        "LED Light Therapy",
        "Dermaplaning"
    ];

    const [treatments, setTreatments] = useState(() => {
        const savedTreatments = localStorage.getItem('skinTreatments');
        return savedTreatments ? JSON.parse(savedTreatments) : initialTreatments;
    });

    const [selectedTreatment, setSelectedTreatment] = useState('Select Treatment...');

    useEffect(() => {
        localStorage.setItem('skinTreatments', JSON.stringify(treatments));
    }, [treatments]);

    const handleAddTreatment = () => {
        if (selectedTreatment && selectedTreatment !== 'Select Treatment...') {
            if (!treatments.includes(selectedTreatment)) {
                setTreatments([...treatments, selectedTreatment]);
                setSelectedTreatment('Select Treatment...');
            }
        }
    };

    const handleRemoveTreatment = (treatmentToRemove) => {
        setTreatments(treatments.filter(treatment => treatment !== treatmentToRemove));
    };

    const handleSave = () => {
        localStorage.setItem('skinTreatments', JSON.stringify(treatments));
        alert('Treatments saved successfully!');
    };

    const handleCancel = () => {
        setTreatments(initialTreatments);
        setSelectedTreatment('Select Treatment...');
    };

    return (
        <div className="flex-grow bg-secondary rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Skin improvement ({treatments.length})</h3>
            <p className='text-sm mb-2'>Treatment</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <ul className="space-y-2">
                    {treatments.map((treatment, index) => (
                        <li
                            key={index}
                            className={`flex justify-between items-center ${index !== treatments.length - 1 ? 'border-b border-gray-200 pb-2' : ''
                                }`}
                        >
                            <span>{treatment}</span>
                            <button
                                className="text-md border-l-2 pl-4"
                                onClick={() => handleRemoveTreatment(treatment)}
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center space-x-4 mb-4">
                <select
                    className="flex-grow bg-gray-100 border border-gray-200 rounded-md p-2"
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                >
                    {treatmentOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <button
                    className="text-grey-50 px-4 py-2 border-2 rounded-md hover:bg-gray-100"
                    onClick={handleAddTreatment}
                >
                    +
                </button>
            </div>
            <div className="flex justify-center space-x-4">
                <button
                    className="w-full py-2 border border-gray-200 rounded-lg hover:bg-gray-100"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default SkinImprovement;