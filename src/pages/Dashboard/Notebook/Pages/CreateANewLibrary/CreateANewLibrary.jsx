import React from "react";

const CreateANewLibrary = () => {
  // Mock data for books
  const books = new Array(15).fill("Book Title");
  const libraries = new Array(3).fill("Library");

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 p-6">
      {/* Header */}
      <div className="text-center flex flex-col items-center mb-8">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            Create a New Library
          </h1>
          <p className="text-gray-600 text-lg">
            Organize and showcase your collection in a real bookshelf-like UI.
          </p>
        </div>
        {/* Form */}
        <div className="w-full max-w-md  bg-white rounded-lg shadow-lg p-6">
          <form className="space-y-6">
            {/* Library Name */}
            <div>
              <label
                htmlFor="library-name"
                className="block text-gray-700 font-medium mb-2">
                Library Name
              </label>
              <input
                type="text"
                id="library-name"
                placeholder="Enter library name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Brief description of the library"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
              Create Library
            </button>
          </form>
        </div>
      </div>

      {/* Your Libraries Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Your Libraries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Displaying multiple libraries */}
          {libraries.map((library, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-blue-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 bg-blue-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-blue-700">{library}</h3>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                View Library
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Library Shelf */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Your Bookshelf
        </h2>
        <div className="space-y-6">
          {/* Rows of Books */}
          {Array.from({ length: Math.ceil(books.length / 5) }).map(
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-5 gap-4 p-4 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-sm">
                {books
                  .slice(rowIndex * 5, rowIndex * 5 + 5)
                  .map((book, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center bg-gradient-to-t from-yellow-200 via-yellow-100 to-white border border-yellow-400 rounded-md shadow-lg p-4 hover:scale-105 transition-transform">
                      <div className="w-full h-24 bg-yellow-300 rounded-t-md shadow-md"></div>
                      <h3 className="mt-2 text-center text-sm font-semibold text-gray-700 truncate">
                        {book}
                      </h3>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>
      </div>

      {/* Add Books Section */}
      <div className="mt-10 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Add a New Book to Your Library
        </h2>
        <form className="space-y-4">
          {/* Book Title */}
          <div>
            <label
              htmlFor="book-title"
              className="block text-gray-700 font-medium mb-2">
              Book Title
            </label>
            <input
              type="text"
              id="book-title"
              placeholder="Enter book title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Add Book
          </button>
        </form>
      </div>

      {/* Back to Home */}
      <div className="mt-6 text-center">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:underline">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CreateANewLibrary;
