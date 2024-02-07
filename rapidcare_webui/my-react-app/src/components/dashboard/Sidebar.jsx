import React from "react";
import Slider from "../Slider";
import Main from "../../Routes";
import { useLocation } from "react-router-dom";
import Login from "../login";
import Http404 from "../../pages/http404";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const splitLocation = location.pathname;

  return splitLocation === "/" || splitLocation === "/login" ? (
    <Login />
  ) : (
    <>
      <main>
        <aside>
          <Slider />
        </aside>
        <div className="p-4 sm:ml-52 bg-gray-100">
          <Main />
        </div>
      </main>
    </>
  );
};

export default Sidebar;
