import React, { useEffect, useState } from "react";

const CreateAPost = () => {

  const handleCreateAPost = async (e) => {
    e.preventDefault();

    const form = e.target;
    const text = form.text.value;
    const imgUrl = form.imgUrl.value;
    console.log(text, imgUrl);

    const serverData = {
      text,
      imgUrl,
    };

    try {
      const res = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(serverData),
      });
      if (res.ok) {
        console.log("Data successfully sent to the server!");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  

  return (
    <div>
      <h1>this is create a post</h1>

      <form className="bg-blue-50" onSubmit={handleCreateAPost}>
        <textarea
          className="p-4"
          placeholder="write your text"
          rows={12}
          cols={70}
          name="text"
          type="text"
        />
        <input name="imgUrl" type="text" />
        <button type="submit" className="btn">
          {" "}
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateAPost;
