import React, { useState } from 'react'
import data from '../data/companies.json'

const CompanyCard = () => {

  // Pagination states
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Filters states
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);
  const handleLocation = (e) => setLocationFilter(e.target.value);
  const handleIndustry = (e) => setIndustryFilter(e.target.value);

  // Get unique dropdown values
  const uniqueLocations = [...new Set(data.map(item => item.location))];
  const uniqueIndustry = [...new Set(data.map(item => item.industry))];

  // Filtering the data
  const filterData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (locationFilter === "" || item.location === locationFilter) &&
    (industryFilter === "" || item.industry === industryFilter)
  );

  // Pagination logic must come after filtering
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#F3F4F6] p-[16px] rounded-2xl">

      {/* Filters */}
      <div className="flex justify-evenly mb-4">

        <input
          type="text"
          placeholder="Search Company Name"
          value={search}
          onChange={handleSearch}
          className="p-[10px] border rounded-[8px] w-[200px]"
        />

        <select
          value={locationFilter}
          onChange={handleLocation}
          className="p-[10px] border rounded-[8px] w-[200px]"
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          value={industryFilter}
          onChange={handleIndustry}
          className="p-[10px] border rounded-[8px] w-[200px]"
        >
          <option value="">All Industries</option>
          {uniqueIndustry.map((ind, index) => (
            <option key={index} value={ind}>{ind}</option>
          ))}
        </select>

      </div>

      {/* Table */}
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
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className="px-[16px] py-[16px]">{item.id}</td>
              <td className="px-[16px] py-[16px]">{item.name}</td>
              <td className="px-[16px] py-[16px]">{item.location}</td>
              <td className="px-[16px] py-[16px]">{item.industry}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-4">

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i+1)}
            className={`px-4 py-2 border rounded-lg 
              ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            {i + 1}
          </button>
        ))}

      </div>

    </div>
  );
};

export default CompanyCard;
 
