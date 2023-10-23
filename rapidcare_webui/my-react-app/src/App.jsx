import React from "react";
import PhoneLoginComponent from "./components/login/index";
import Dashboard from "./components/dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Verifyotp from "./components/login/verifyotp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhoneLoginComponent />} />
        <Route path="/login" element={<PhoneLoginComponent />} />
        <Route path="/verifyotp" element={<Verifyotp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
