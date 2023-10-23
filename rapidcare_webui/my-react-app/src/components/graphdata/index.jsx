import React from "react";

const Graphdata = () => {
  return (
    <div className="relative flex flex-col items-center flex-grow pb-5 group ">
      <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
        $37,500
      </span>
      <div className="relative flex justify-center rounded-lg w-full h-40 bg-indigo-200"></div>
      <span className="absolute bottom-0 text-xs font-bold">Jan</span>
    </div>
  );
};

export default Graphdata;
