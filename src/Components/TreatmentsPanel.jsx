import React from 'react'

const TreatmentsPanel = () => {
    return (
        <>
            <div className='hidden sm:block '>

                <h2 className="text-xl font-medium text-heading mb-3 ">Treatments</h2>

                <div className="w-full p-1 ">
                    <ul className="space-y-4">
                        <li className="p-2 text-gray-600 hover:bg-gray-100 hover:cursor-pointer ">Injectables</li>
                        <li className="p-2  bg-blue-50 text-blue-600 rounded-lg">Skin improvement</li>
                        <li className="p-2 text-gray-600 hover:bg-gray-100 hover:cursor-pointer">Hair removal</li>
                        <li className="p-2 text-gray-600 hover:bg-gray-100 hover:cursor-pointer">Soft surgery</li>
                        <li className="p-2 text-gray-600 hover:bg-gray-100 hover:cursor-pointer">Plastic surgery</li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default TreatmentsPanel