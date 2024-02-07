import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Slider from "../Slider";
import Drtable from "./drtable";
import Drsearchbar from "./drsearchbar";

const Drsearch = () => {
  return (
    <>
      <Drsearchbar />
      <Drtable />
    </>
  );
};

export default Drsearch;
