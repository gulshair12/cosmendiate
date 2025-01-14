import React from "react";

const Navbar = () => {
    return (
        <div className="bg-primary shadow-sm px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4"> 
                <div className="text-2xl font-bold text-black">Cosmediate</div>
 
                <div className="hidden sm:flex flex-1 mx-6 justify-center">
                    <div className="relative w-full max-w-sm ">
                        <div className="absolute inset-y-0 left-3 flex items-center">
                            <img src="search_icon.svg" alt="search" height={18} width={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-8 w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />

                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    
                   <img src="bell_icon.svg" alt="bell_icon" />

                   
                    <div className="flex items-center space-x-2">
                        <img
                            src="profile_icon.svg"
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="hidden sm:block text-sm">
                            <div className="font-semibold">Tim Bouwman</div>
                            <div className="text-gray-500 text-xs">Aestec Amsterdam</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
