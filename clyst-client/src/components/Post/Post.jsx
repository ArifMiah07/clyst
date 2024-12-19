import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const Post = ({ data }) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleFullText = () => setShowFullText(true);
  const handleShortText = () => setShowFullText(false);

  const contentText = data.text; // Text from data
  const placeholderImg =
    "https://via.placeholder.com/54?text=No+Image"; // Fallback for profileImage or imgUrl

  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-4 bg-white w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
            <img
              src={data.profileImage || placeholderImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name and User Info */}
          <div>
            <h3 className="font-semibold text-lg">{data.name}</h3>
            <p className="text-sm text-gray-500">@{data.userName}</p>
          </div>
        </div>
        {/* Menu Icon */}
        <CiMenuKebab className="text-gray-500 text-xl cursor-pointer" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-gray-700">
          {showFullText ? contentText : `${contentText.slice(0, 150)}`}
          {contentText.length > 150 && !showFullText && (
            <span
              onClick={handleFullText}
              className="text-blue-500 cursor-pointer"
            >
              ...more
            </span>
          )}
        </p>
        {showFullText && (
          <span
            onClick={handleShortText}
            className="text-blue-500 cursor-pointer"
          >
            Show less
          </span>
        )}
      </div>

      {/* Post Image */}
      {data.imgUrl && (
        <div className="mt-4">
          <img
            src={data.imgUrl || placeholderImg}
            alt="Post Content"
            className="w-full rounded-md"
          />
        </div>
      )}

      {/* Date and Time */}
      <div className="mt-4 text-sm text-gray-500">
        Posted on: {data.date} at {data.time}
      </div>
    </div>
  );
};

export default Post;
