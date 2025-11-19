import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CompanyCard from './component/CompanyCard'



function App() {
  

  return (
<div className="flex justify-center items-center ">
  <div>
    <h1 className='flex justify-center'>Companies directory</h1>

    <CompanyCard />
  </div>
</div>
  )
}

export default App

