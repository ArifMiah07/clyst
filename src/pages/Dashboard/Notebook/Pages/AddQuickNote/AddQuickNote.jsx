import React from "react";
import { Link } from "react-router-dom";
import CreateAFolder from "../../../../../components/CreateAFolder/CreateAFolder";

const AddQuickNote = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex justify-between items-center">
        <div className="w-full flex flex-col items-center space-x-4">
          <div className="flex justify-between space-x-4 mb-4">
            <h1 className="text-lg font-semibold">Private Notebook</h1>
          </div>
          <div className="flex justify-between space-x-4 ">
            <CreateAFolder
              path={"/create-a-new-library"}
              fld_name={"Create a New Library"}></CreateAFolder>
            <CreateAFolder
              path={"/create-a-new-book"}
              fld_name={"Create a new Book"}></CreateAFolder>
            <CreateAFolder
              path={"/create-a-new-notebook"}
              fld_name={"Create a New Notebook"}></CreateAFolder>
            <CreateAFolder
              path={"/create-a-new-memo"}
              fld_name={"Create a New Memo"}></CreateAFolder>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white text-xl">
            <i className="fas fa-search"></i>
          </button>
          <button className="text-white text-xl">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        {/* Folder Icon with Lock */}
        <div className="relative mb-4">
          <div className="w-20 h-20 bg-yellow-500 rounded-t-md"></div>
          <div className="absolute w-10 h-10 bg-black rounded-md left-5 top-3 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Add Quick Note
        </h2>

        {/* Input Fields */}
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Note"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition">
            Save
          </button>
        </form>

        {/* View All Notes Button */}
        <Link to={"/view-saved-notes"}>
          <button className="mt-4 w-full max-w-md px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition">
            View all notes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddQuickNote;
