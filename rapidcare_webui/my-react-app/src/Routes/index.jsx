import React from "react";
import Login from "../components/login/index";
import Dashboard from "../components/dashboard";
import { Routes, Route } from "react-router-dom";
import Drsearch from "../components/doctors/drSearch";
import Dashboard1 from "../components/dashboard1";
import Http404 from "../pages/http404";
import ProtectedRoutes from "../components/protectedRoutes";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/doctors" element={<Drsearch />} />
      </Route>
      <Route path="*" element={<Http404 />} />
    </Routes>
  );
}
