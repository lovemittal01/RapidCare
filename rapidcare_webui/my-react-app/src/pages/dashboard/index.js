import React from "react";
import PhoneLoginComponent from "./components/login/index";
import Dashboard from "./components/dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Verifyotp from "./components/login/verifyotp";
import Drsearch from "./components/doctors/drSearch";
import Dashboard1 from "./components/dashboard1";

export default function dashboard() {
  return (
    <main>
      <aside>
        <Slider />
      </aside>
      <div className="p-4 sm:ml-52 bg-gray-100">
        <Main />
      </div>
    </main>
  );
}
