import React from "react";

const FilterBar = ({ search, setSearch, locationFilter, setLocationFilter, industryFilter, setIndustryFilter, locations, industries }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by company name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded p-2 flex-1"
      />
      <select
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
      </select>
      <select
        value={industryFilter}
        onChange={(e) => setIndustryFilter(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Industries</option>
        {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
      </select>
    </div>
  );
};

export default FilterBar;
