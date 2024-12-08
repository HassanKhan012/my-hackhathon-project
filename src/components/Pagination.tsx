"use client";

import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="border border-gray-300 rounded-md p-1 flex items-center">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l-md">
          First
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4">
          1
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
          2
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4">
          3
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
