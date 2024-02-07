import React from "react";
import Sideelements from "../sideelements";
import Doctors from "../doctors";

const Slider = () => {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full w-52 px-3 py-4 overflow-y-auto bg-purple-50 dark:bg-purple-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center pl-2.5 mb-5"
          >
            <svg
              className="w-5 h-5 mr-2 text-purple-500 transition duration-75 dark:text-purple-400 group-hover:text-purple-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Dashboard
            </span>
          </a>
          <ul className="space-y-4 font-medium">
            <Doctors />
            <Sideelements />
            <Sideelements />
            <Sideelements />
            <Sideelements />
            <Sideelements />
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Slider;
