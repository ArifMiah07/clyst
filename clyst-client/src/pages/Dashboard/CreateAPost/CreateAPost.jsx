import React, { useEffect, useState } from "react";
import blueBird from "../../../assets/blue-bird-2.png";
import Swal from "sweetalert2";

const CreateAPost = () => {
  const handleCreateAPost = async (e) => {
    e.preventDefault();

    const form = e.target;
    const text = form.text.value;
    const imgUrl = form.imgUrl.value;
    const profileImage = form.profileImage.value;
    const name = form.name.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const date = form.date.value;
    const time = form.time.value;

    const serverData = {
      name,
      userName,
      email,
      date,
      time,
      text,
      imgUrl,
      profileImage
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
          const res = await fetch("http://localhost:5000/api/data", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(serverData),
          });
          if (res.ok) {
            Swal.fire("Saved!", "Your data has been posted successfully.", "success");
          } else {
            Swal.fire("Error", "Failed to save your data.", "error");
          }
        } catch (error) {
          Swal.fire("Error", "An error occurred while saving your data.", "error");
          console.error("Error:", error);
        }
      } else if (result.isDenied) {
        Swal.fire("Canceled", "", "info");
      }
    });
  };

  return (
    <div className="">
      <h1 className="text-center uppercase ">create a post here</h1>

      <form
        className="w-full bg-[#00ff50] p-5 grid grid-cols-2 gap-2"
        onSubmit={handleCreateAPost}
      >
        <div className="flex flex-col">
          <label>Name</label>
          <input
            required
            className="border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg p-2 mb-3 mt-2"
            name="name"
            type="text"
          />
          <label>User Name</label>
          <input
            required
            className="border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg p-2 mb-3 mt-2"
            name="userName"
            type="text"
          />
          <label>Email</label>
          <input
            required
            className="border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg p-2 mb-3 mt-2"
            name="email"
            type="email"
          />
          <label>Date</label>
          <input
            required
            className="border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg p-2 mb-3 mt-2"
            name="date"
            type="date"
          />
          <label>Time</label>
          <input
            required
            className="border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg p-2 mb-3 mt-2"
            name="time"
            type="time"
          />
          <label>Profile Image Url</label>
          <input
            required
            className="border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg p-2 mb-3 mt-2"
            name="profileImage"
            type="text"
          />
          <label>Image URL</label>
          <input
            required
            className="border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg p-2 mb-3 mt-2"
            name="imgUrl"
            type="text"
          />
          <label htmlFor="">Text</label>
          <textarea
            required
            className="p-4 border border-green-100 hover:border-blue-600 hover:scale-x-105 outline-none hover:bg-[#9d00ff1a] rounded-lg mb-3 mt-2"
            placeholder="write your text"
            name="text"
            type="text"
          />
          <button type="submit" className="btn bg-[#ffff0080] hover:bg-[#ffff12]">
            Post
          </button>
        </div>
        <div className="flex flex-col">
          <img src={blueBird} alt="" />
        </div>
      </form>
    </div>
  );
};

export default CreateAPost;
