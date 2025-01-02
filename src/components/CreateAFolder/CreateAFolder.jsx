import React from "react";
import { Link } from "react-router-dom";

const CreateAFolder = ({path, fld_name}) => {

    console.log(path, fld_name);
  return (
    <div>
  <Link
    to={path}
    className="group relative block px-2 py-1 bg-green-500 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white rounded-lg"></div>
    <div className="relative flex items-center gap-6">
      <div className="p-4 bg-white rounded-full shadow-xl transform group-hover:rotate-12 transition-transform duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-3 h-3 text-green-700">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <h1 className="text-xl font-semibold text-gray-800 group-hover:text-green-900 transition-colors">
        {fld_name}
      </h1>
    </div>
  </Link>
</div>

  );
};

export default CreateAFolder;
