import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-primary min-h-svh w-20 sm:w-28 flex flex-col justify-between shadow-md">

      <div className="flex flex-col items-center p-2 space-y-6 mt-2">
       
        <div className="flex flex-col items-center sm:items-start">
          <button className="text-gray-500  hover:text-blue-600 flex flex-col items-center">
           <img src="dashboard_icon.svg" alt="dashboard_icon" height={24} width={24} />
           <span className="hidden sm:block text-sm mt-1">Dashboard</span>
          </button>
        </div>

       
        <div className="flex flex-col items-center sm:items-start relative">
          <button className="text-gray-500  hover:text-blue-600  flex flex-col items-center">
            <img src="envelope_icon.svg" alt="envelope_icon" width={24} height={24} />
            <span className="hidden sm:block text-sm mt-1">Inbox</span>
          </button>
          
        </div>

       
        <div className="flex flex-col items-center sm:items-start">
          <button className="text-gray-500 hover:text-blue-600 flex flex-col items-center">
            <img src="calendar_icon.svg" alt="calendar_icon" width={24} height={24} />
            <span className="hidden sm:block text-sm mt-1">Schedule</span>
          </button>
        </div>

       
        <div className="flex flex-col items-center sm:items-start relative">
          <button className="text-gray-500 hover:text-blue-600 flex flex-col items-center">
            <img src="comment_icon.svg" alt="comment_icon" width={24} height={24}  />
            <span className="hidden sm:block text-sm mt-1">Reviews</span>
          </button>
         
        </div>

        <div className="flex flex-col items-center sm:items-start relative bg-white">
          <button className="text-blue-500 hover:text-blue-600 flex flex-col items-center">
            <img src="settings_icon.svg" alt="settings_icon" width={24} height={24}  />
            <span className="hidden sm:block text-sm mt-1">Settings</span>
          </button>
         
        </div>
      </div>

     
      <div className="flex flex-col items-center ">
       
        <div className="flex flex-col items-center sm:items-start">
          <button className="text-gray-500 hover:text-blue-600 flex flex-col items-center">
           <img src="signout_icon.svg" alt="signout_icon.svg" width={24} height={24} />
            <span className="hidden sm:block text-sm mt-1">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
