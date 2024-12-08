"use client";
import { useState } from "react";

const Filter = () => {
  const [view, setView] = useState("grid");
  const [filterOption, setFilterOption] = useState("popularity");

  const handleViewChange = (selectedView: string) => {
    setView(selectedView);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value);
  };

  return (
    <div className="flex justify-between items-center py-4">
      {/* Results Count */}
      <div className="text-gray-600 text-sm">
        <p>Showing all 12 results</p>
      </div>

      {/* Centered View Toggle Buttons */}
      <div className="flex justify-center items-center gap-3 flex-1">
        <p className="text-gray-600 text-sm">View:</p>
        <div className="flex gap-2">
          {/* Grid View Button */}
          <button
            className={`flex items-center justify-center w-10 h-10 border rounded-md transition ${
              view === "grid" ? "bg-gray-200 border-gray-400" : "border-gray-300"
            }`}
            onClick={() => handleViewChange("grid")}
            aria-label="Switch to grid view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"
              />
            </svg>
          </button>

          {/* List View Button */}
          <button
            className={`flex items-center justify-center w-10 h-10 border rounded-md transition ${
              view === "list" ? "bg-gray-200 border-gray-400" : "border-gray-300"
            }`}
            onClick={() => handleViewChange("list")}
            aria-label="Switch to list view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Dropdown and Filter Button */}
      <div className="flex items-center gap-4">
        {/* Dropdown for filter options */}
        <select
          value={filterOption}
          onChange={handleFilterChange}
          className="border rounded-md p-2 text-sm"
        >
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="newest">Newest</option>
          {/* Add other options as needed */}
        </select>

        {/* Filter Button */}
        <button className="bg-blue-500 text-white p-2 rounded-md" aria-label="Filter options">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
