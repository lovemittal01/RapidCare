import React from "react";
import Graphdata from "../graphdata";

const Graph = () => {
  return (
    <div>
      <div className="flex items-center justify-center rounded-3xl mr-96 bg-blue-50 h-fit w-full dark:bg-blue-800">
        <div className="flex flex-col items-center justify-center rounded-3xl w-full text-gray-700 bg-gray-100">
          <div className="flex flex-col items-center w-full max-w-screen-md bg-white rounded-lg shadow-xl sm:p-8">
            <div className="flex items-center flex-col">
              <h2 className="text-2xl font-bold">Overview</h2>
              <span className="text-xs font-semibold text-gray-300">
                Monthly Earning
              </span>
            </div>
            <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
              <Graphdata />
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $45,000
                </span>
                <div className="relative flex rounded-lg justify-center w-full h-36 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Feb</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $47,500
                </span>
                <div className="relative flex justify-center rounded-lg w-full h-20 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Mar</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $50,000
                </span>
                <div className="relative flex justify-center w-full rounded-lg h-52 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Apr</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $47,500
                </span>
                <div className="relative flex justify-center w-full h-32 rounded-lg bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">May</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $55,000
                </span>
                <div className="relative flex justify-center rounded-lg w-full h-48 bg-indigo-800"></div>
                <span className="absolute bottom-0 text-xs font-bold">Jun</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $60,000
                </span>
                <div className="relative flex justify-center rounded-lg w-full h-64 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Jul</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $57,500
                </span>
                <div className="relative flex justify-center w-full rounded-lg h-36 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Aug</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $67,500
                </span>
                <div className="relative flex justify-center w-full rounded-lg h-20 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Sep</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $65,000
                </span>
                <div className="relative flex justify-center w-full rounded-lg h-60 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Oct</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $70,000
                </span>
                <div className="relative flex justify-center w-full rounded-lg h-40 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Nov</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $75,000
                </span>
                <div className="relative flex justify-center rounded-lg w-full h-72 bg-indigo-200"></div>
                <span className="absolute bottom-0 text-xs font-bold">Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
