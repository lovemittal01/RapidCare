import React from "react";
import PieChartIcon from "@mui/icons-material/PieChart";

const Cards = () => {
  return (
    <>
      <div className="flex items-center justify-center h-32 mt-4 rounded-2xl shadow-xl bg-white dark:bg-white">
        <div className="flex items-center justify-center w-20 h-20 rounded-full opacity-70 bg-purple-400">
          <div>
            <PieChartIcon />
          </div>
        </div>
        <div className="w-28 h-20 ml-1  flex items-start justify-center pl-2 flex-col ">
          <div className="text-gray-400 text-xs font-bold">Earning</div>
          <div className="text-black text-3xl font-bold">$198k</div>
          <div className="text-green-400 text-xs font-bold">
            37.8% this month
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
