import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import errorImg from "../../../assets/error.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={errorImg}
          alt="Error Illustration"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon and Heading */}
        <div className="text-center flex flex-col items-center  text-red-500 mb-6">
          <FaExclamationTriangle size={64} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-4">
          The page you’re looking for doesn’t exist, or an unexpected error has
          occurred.
        </p>

        {/* Call-to-Actions */}
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-6 rounded-md shadow-md"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-md"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
