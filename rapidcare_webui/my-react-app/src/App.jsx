import React from "react";
import Main from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/dashboard/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
};

export default App;
