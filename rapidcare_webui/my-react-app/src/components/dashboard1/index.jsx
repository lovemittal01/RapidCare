import React from "react";
import Cards from "../cards/Cards";
import Searchbar from "../searchbar/Searchbar";
import Chart from "../chart";
import Graph from "../graph";

const Dashboard1 = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div>
        <Searchbar />
      </div>
      <div className="bg-gray-100 grid grid-cols-4 gap-8 mb-8 mt-10">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="flex h-fit justify-between bg-gray-100">
        <Graph />
        <Chart />
      </div>
      <div className="flex items-center justify-center h-48 mt-12 mb-4 rounded bg-amber-50 dark:bg-amber-200">
        <p className="text-2xl text-purple-400 dark:text-purple-500">
          <svg
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Dashboard1;
