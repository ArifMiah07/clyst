import React from "react";
import { Link } from "react-router-dom";

const CreateAFolder = ({path, fld_name}) => {

    console.log(path, fld_name);
  return (
    <div>
      <Link
        to={path}
        className="group relative block p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white rounded-lg"></div>
        <div className="relative flex items-center gap-4">
          <div className="p-2 bg-white rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3 text-blue-600">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h1 className="text-lg font-semibold text-white group-hover:text-gray-200">
            {fld_name}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default CreateAFolder;
