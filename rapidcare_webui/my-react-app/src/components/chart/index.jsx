import React from "react";

const Chart = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-start rounded p-7 shadow-xl bg-orange-50 h-full w-96 ml-5 dark:bg-white">
        <div className="w-full h-20 bg-white flex items-start  flex-col">
          <h2 className="text-2xl font-bold">Customers</h2>
          <span className="text-xs font-semibold text-gray-300">
            Customers that buy products
          </span>
        </div>
        <div className="w-fit h-fit bg-pink-300 "></div>
      </div>
    </div>
  );
};

export default Chart;
