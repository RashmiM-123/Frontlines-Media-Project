import React from 'react'
import data from '../data/companies.json'


const CompanyCard = () => {
  return (
    // <div className='className="bg-[#E6E7EB] p-[20px] rounded-[16px]'>
    <div className="bg-[#F3F4F6] p-8 rounded-2xl">

      <table>
        <thead>
         <tr className="uppercase text-gray-700 font-medium text-sm tracking-wider">

            <th className="text-left px-[16px] py-[16px]">Id</th>
            <th className="text-left px-[16px] py-[16px]">Name</th>
            <th className="text-left px-[16px] py-[16px]">Location</th>
            <th className="text-left px-[16px] py-[16px]">Industry</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
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







// import React from "react";

// const CompanyCard = ({ company }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//       <h2 className="text-lg font-bold">{company.name}</h2>
//       <p><span className="font-semibold">Location:</span> {company.location}</p>
//       <p><span className="font-semibold">Industry:</span> {company.industry}</p>
//     </div>
//   );
// };

// export default CompanyCard;
