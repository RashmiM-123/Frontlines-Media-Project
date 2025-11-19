import React, { useState } from 'react'
import data from '../data/companies.json'


const CompanyCard = () => {
  const[search,setSearch]=useState("")
    const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const handleSearch=(e)=>{
      setSearch(e.target.value)
  }
   const handleLocation=(e)=>{
     setLocationFilter(e.target.value)
   }
      const handleIndustry=(e)=>{
       setIndustryFilter(e.target.value)
   }

    const uniqueLocations = [...new Set(data.map(item => item.location))];
    const uniqueIndustry=[...new Set(data.map(item=>item.industry))]
    

const filterData = data.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase()) &&
  (locationFilter === "" || item.location === locationFilter) &&
  (industryFilter === "" || item.industry === industryFilter)
);



  return (
    
    <div className="bg-[#F3F4F6] p-[16px] rounded-2xl">
        <div className="flex justify-evenly">
          {/* search input */}
          <input type='text' placeholder='search Company Name' value={search} onChange={handleSearch}  className="p-[10px] border rounded-[8px] w-[200px]"/>
          {/* location filter */}
         
               <select value={locationFilter} onChange={handleLocation}
               className="p-[10px] border rounded-[8px] w-[200px]">

          <option value="">All Locations</option>
          {uniqueLocations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>
          {/* industry filter */}
          <select  value={industryFilter} onChange={handleIndustry}
          className="p-[10px] border rounded-[8px] w-[200px]">

            <option>All Industries</option>
            {uniqueIndustry.map((ind,index)=>(
              <option key={index} value={ind}>{ind}</option>
            ))}
          </select>

         </div>

      <table>
        <thead>
         <tr className="uppercase text-gray-700 font-medium text-sm tracking-wider">

            <th className="text-left px-[16px] py-[16px]">Id</th>
            <th className="text-left px-[16px] py-[16px]">Company Name</th>
            <th className="text-left px-[16px] py-[16px]">Location</th>
            <th className="text-left px-[16px] py-[16px]">Industry</th>
          </tr>
        </thead>
        <tbody>
        {filterData.map((item,index)=>(
           <tr key={index}>
            <td className="px-[16px] py-[16px]">{item.id}</td>
            <td className="px-[16px] py-[16px]">{item.name}</td>
            <td className="px-[16px] py-[16px]">{item.location}</td>
            <td className="px-[16px] py-[16px]">{item.industry}</td>
           </tr>
        )
        )}
        </tbody>
      </table>
    </div>
  )
}

export default CompanyCard









