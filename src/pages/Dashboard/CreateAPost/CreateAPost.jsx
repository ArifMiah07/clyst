import React, { useState } from "react";
import blueBird from "../../../assets/blue-bird-2.png";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";

const CreateAPost = () => {
  const [isLoading, setIsLoading] = useState(false);

  
  const handleCreateAPost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const form = e.target;
    const serverData = {
      post: {  // Wrap the data in a 'post' object
        name: form.name.value,
        userName: form.userName.value,
        email: form.email.value,
        date: form.date.value,
        time: form.time.value,
        text: form.text.value,
        imgUrl: form.imgUrl.value,
        profileImage: form.profileImage.value,
      }
    };
  
    Swal.fire({
      title: "Do you want to create a new post?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Post",
      denyButtonText: `Cancel Post`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch("https://clyst-server.vercel.app/api/v1/data/feed", {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify(serverData),  // Send the wrapped data
          });
          
          const data = await res.json();
          
          if (res.ok) {
            Swal.fire("Saved!", "Your data has been posted successfully.", "success");
            form.reset(); // Clear the form after successful submission
          } else {
            Swal.fire("Error", data.error?.details || "Failed to save your data.", "error");
          }
        } catch (error) {
          Swal.fire("Error", "An error occurred while saving your data.", "error");
          console.error("Error:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    });
  };
  
  if (isLoading) return <Loading />;

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">Create a Post</h1>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleCreateAPost}>
          <div className="flex flex-col space-y-4">
            <label className="text-gray-700 font-medium">Name</label>
            <input
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              name="name"
              type="text"
            />

            <label className="text-gray-700 font-medium">User Name</label>
            <input
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              name="userName"
              type="text"
            />

            <label className="text-gray-700 font-medium">Email</label>
            <input
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              name="email"
              type="email"
            />

            <label className="text-gray-700 font-medium">Date</label>
            <input
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              name="date"
              type="date"
            />

            <label className="text-gray-700 font-medium">Time</label>
            <input
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              name="time"
              type="time"
            />

            <label className="text-gray-700 font-medium">Profile Image URL</label>
            <input
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              name="profileImage"
              type="text"
            />

            <label className="text-gray-700 font-medium">Image URL</label>
            <input
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              name="imgUrl"
              type="text"
            />

            <label className="text-gray-700 font-medium">Text</label>
            <textarea
              required
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Write your text here"
              name="text"
            />

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition"
            >
              Post
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img src={blueBird} alt="Blue Bird" className="w-48 h-48 object-cover rounded-lg shadow-xl" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAPost;
