import React from 'react'
import data from '../data/companies.json'


const CompanyCard = () => {
  return (
    <div className='bg-gray-200 border'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
           <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.industry}</td>
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
