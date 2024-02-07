import React from "react";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Doctors = () => {
  // const navigate = useNavigate();

  // const handleDoctors = () => {
  //   navigate("/doctors");

  // };

  return (
    <>
      <div>
        <li>
          <button
            type="button"
            className="flex items-center w-full p-2 text-base text-purple-900 transition duration-75 rounded-lg group hover:bg-purple-100 dark:text-white dark:hover:bg-purple-700"
          >
            <svg
              className="flex-shrink-0 w-4 h-4 text-purple-500 transition duration-75 group-hover:text-purple-900 dark:text-purple-400 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            <Link
              to="/doctors"
              className="flex-1 ml-3 text-xs text-left whitespace-nowrap"
              // onClick={handleDoctors}
            >
              Doctors
            </Link>
          </button>
        </li>
      </div>
    </>
  );
};

export default Doctors;
