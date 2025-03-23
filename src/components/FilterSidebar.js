import React from "react";

const FilterSidebar  = () => {
  return (
    <div className="w-full lg:w-1/4 p-4">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        {["Category", "Type", "Size", "Color", "Price range"].map((filter, index) => (
          <div key={index} className="bg-gray-100 rounded p-2">
            <select className="w-full bg-transparent focus:outline-none">
              <option>{filter}</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilterSidebar;