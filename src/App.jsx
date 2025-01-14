import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Settings from './Components/Settings'
import Sidebar from './Components/Sidebar'
import TreatmentsPanel from './Components/TreatmentsPanel'
import { SkinImprovement } from './Components/SkinImprovement'

function App() {
  const [activePanel, setActivePanel] = useState('')

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex p-4 rounded-tl-xl w-full space-x-4">
          <Settings activePanel={activePanel} setActivePanel={setActivePanel} />
          <div className='mt-14 w-full max-w-[15rem]'>
            {activePanel === 'treatments' ? (
              <TreatmentsPanel />
            ) : (
              <div className="text-gray-500 text-lg">No data to display</div>
            )}
          </div>
          <div className='mt-24 w-full'>
            {activePanel === 'treatments' ? (
              <SkinImprovement />
            ) : (
              <div className="text-gray-500 text-lg">No data to display</div>
            )}
          </div>
          
        </main>
      </div>
    </>
  )
}

export default App
