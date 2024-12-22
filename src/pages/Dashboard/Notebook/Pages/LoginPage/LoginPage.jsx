import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {


    const handleEnter = ()=>{

        console.log('clicked')
    }


  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-80 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          {/* Folder with Lock Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-yellow-500 rounded-t-md"></div>
            <div className="absolute w-8 h-8 bg-black rounded-md left-4 top-2 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Private Notebook
        </h1>
        <form>
          <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter password"
          />
         
            <Link to={'/add-quick-note'}>
             <button
            onSubmit={handleEnter()}
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
          >
            Login
          </button>
            </Link>
        </form>
        <div className="mt-4 flex justify-center">
          <button className="text-blue-500 text-sm hover:underline">
            <span className="text-xl">?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;