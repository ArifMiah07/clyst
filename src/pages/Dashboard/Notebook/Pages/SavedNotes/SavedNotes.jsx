import React from "react";
import { Link } from "react-router-dom";

const SavedNotes = () => {
  const notes = [
    { id: 1, text: "My first Note 📄" },
    { id: 2, text: "Account login details!" },
    { id: 3, text: "Short story draft 📖" },
    { id: 4, text: "Important reminder ⚠️" },
    { id: 5, text: "Shopping 🛒 list 📄" },
    { id: 6, text: "Secret 🔐 document 📄" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Saved Notes</h1>
        <div className="flex items-center space-x-4">
          <button className="text-white text-xl">
            <i className="fas fa-sort"></i>{" "}
            {/* Replace with your sorting icon */}
          </button>
          <button className="text-white text-xl">
            <i className="fas fa-search"></i>{" "}
            {/* Replace with your search icon */}
          </button>
          <button className="text-white text-xl">
            <i className="fas fa-ellipsis-v"></i>{" "}
            {/* Replace with your menu icon */}
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="flex flex-col items-center p-4 space-y-2 flex-1 overflow-y-auto">
        {notes.map((note) => (
          <div
            key={note.id}
            className="w-full max-w-md p-3 bg-yellow-400 text-black font-medium rounded-md shadow-sm">
            <Link to={"/note"}>{note.text}</Link>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition">
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
};

export default SavedNotes;
