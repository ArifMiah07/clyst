import React from "react";
import { Link } from "react-router-dom";
import './saved-notes.css'


const SavedNotes = () => {
  const notes = [
    { id: 1, text: "My first Note 📄" },
    { id: 2, text: "Account login details!" },
    { id: 3, text: "Short story draft 📖" },
    { id: 4, text: "Important reminder ⚠️" },
    { id: 5, text: "Shopping 🛒 list 📄" },
    { id: 6, text: "Secret 🔐 document 📄" },
  ];

  const folders = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Work" },
    { id: 3, name: "School" },
    { id: 4, name: "Miscellaneous" },
    { id: 5, name: "Important" },
    { id: 6, name: "Urgent" },
    { id: 7, name: "Shopping" },
    { id: 8, name: "Secret" },
    { id: 9, name: "Drafts" },
    { id: 10, name: "Archived" },
    { id: 11, name: "Deleted" },
    { id: 12, name: "Misc" },
    { id: 13, name: "Miscellaneous" },
    { id: 14, name: "Misc" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex justify-between items-center">
        {/* Horizontal Scrollable Folder List */}
        <div className="flex space-x-4 small-scrollbar">
          <h1 className="text-lg font-semibold">Saved Notes</h1>
          {folders.map((folder) => (
            <div key={folder.id} className="text-sm font-medium bg-green-600 px-4 py-1 rounded-lg shadow-sm">
              {folder.name}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white text-xl">
            <i className="fas fa-sort"></i>
          </button>
          <button className="text-white text-xl">
            <i className="fas fa-search"></i>
          </button>
          <button className="text-white text-xl">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="flex flex-col items-center p-4 space-y-2 flex-1 overflow-y-auto">
        {notes.map((note) => (
          <div
            key={note.id}
            className="w-full max-w-md p-3 bg-yellow-400 text-black font-medium rounded-md shadow-sm"
          >
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
