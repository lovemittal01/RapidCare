import React from "react";
import Cards from "../cards/Cards";
import Searchbar from "../searchbar/Searchbar";
import Slider from "../Slider";
import Chart from "../chart";
import Graph from "../graph";

const Sidebar = () => {
  return (
    <>
      <div>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-purple-500 rounded-lg sm:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <Slider />

        <div className="p-4 sm:ml-52 bg-gray-100">
          <div className="p-4 bg-gray-100">
            <div>
              <Searchbar />
            </div>
            <div className="grid grid-cols-4 gap-8 mb-4 mt-10">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="flex h-fit  bg-gray-100">
              <Graph />
              <Chart />
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-amber-50 dark:bg-amber-400">
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
