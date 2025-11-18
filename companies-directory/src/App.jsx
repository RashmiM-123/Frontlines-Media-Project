import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CompanyCard from './component/CompanyCard'
import FilterBar from './component/ FilterBar'


function App() {
  

  return (
<div className="flex justify-center items-center ">
  <div>
    <h1 className='flex justify-center'>Companies directory</h1>
    <FilterBar />
    <CompanyCard />
  </div>
</div>
  )
}

export default App

