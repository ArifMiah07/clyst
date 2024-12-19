import React from "react";
import logo from "../../assets/logo.png"; // Adjust the path to your logo

const LogoLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Site Logo"
          className="w-32 h-32 animate-bounce"
        />
        <p className="text-white font-bold text-xl mt-4 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LogoLoading;
