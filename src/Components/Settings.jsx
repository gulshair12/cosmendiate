import React from 'react'

const Settings = ({ activePanel, setActivePanel }) => {
    return (
        <>
            <div className='hidden sm:block w-full max-w-[13rem]'>
                <h2 className="text-2xl font-bold text-heading mb-3">Settings</h2>
                <div className="w-full bg-secondary rounded-xl p-1">
                    <ul className="space-y-4">
                        <li onClick={() => setActivePanel('general')} 
                            className={`text-gray-700 ps-2 hover:bg-white hover:cursor-pointer p-2 rounded-xl 
                            ${activePanel === 'general' ? 'bg-white text-blue-700' : 'text-gray-700 hover:bg-white'}`}>
                            General
                        </li>
                        <li onClick={() => setActivePanel('password')} 
                            className={`text-gray-700 ps-2 hover:bg-white hover:cursor-pointer p-2 rounded-xl
                            ${activePanel === 'password' ? 'bg-white text-blue-700' : 'text-gray-700 hover:bg-white'}`}>
                            Password
                        </li>
                        <li onClick={() => setActivePanel('price')} 
                            className={`text-gray-700 ps-2 hover:bg-white hover:cursor-pointer p-2 rounded-xl
                            ${activePanel === 'price' ? 'bg-white text-blue-700' : 'text-gray-700 hover:bg-white'}`}>
                            Price
                        </li>
                        <li onClick={() => setActivePanel('treatments')} 
                            className={`ps-2 p-2 rounded-xl hover:cursor-pointer
                            ${activePanel === 'treatments' ? 'bg-white text-blue-700' : 'text-gray-700 hover:bg-white'}`}>
                            Treatments
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Settings