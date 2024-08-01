import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'

function App() {
  return (
    <div className='w-full h-screen bg-black text-white font-["Satoshi", sans-serif]'>
      <Navbar/>
      <Work/>
      <Stripes/>
    </div>
  )
}

export default App