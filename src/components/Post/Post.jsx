import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiThumbsUp, FiMessageCircle, FiShare } from "react-icons/fi"; // Import icons

const Post = ({ data }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [openPostMenu, setOpenPostMenu] = useState(false);
  const [likes, setLikes] = useState(data.likes || 0);
  const [comments, setComments] = useState(data.comments || []);
  const [shares, setShares] = useState(data.shares || 0);

  const handleFullText = () => setShowFullText(true);
  const handleShortText = () => setShowFullText(false);

  const contentText = data.text; // Text from data
  const placeholderImg = "https://via.placeholder.com/54?text=No+Image"; // Fallback for profileImage or imgUrl

  const handlePostMenu = () => {
    console.log("clicked");
    setOpenPostMenu(true);
  };

  // Handle Like
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Handle Comment
  const handleComment = () => {
    const commentText = prompt("Enter your comment:");
    if (commentText) {
      setComments([...comments, commentText]);
    }
  };

  // Handle Share
  const handleShare = () => {
    setShares(shares + 1);
    alert("Post shared!");
  };

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
        <CiMenuKebab
          onClick={handlePostMenu}
          className="text-gray-500 text-xl cursor-pointer"
        />
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

      {/* Actions: Like, Comment, Share */}
      <div className="flex items-center justify-between mt-4">
        {/* Like */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLike}>
          <FiThumbsUp className="text-blue-500" />
          <span className="text-gray-700">{likes} Likes</span>
        </div>

        {/* Comment */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleComment}>
          <FiMessageCircle className="text-gray-500" />
          <span className="text-gray-700">{comments.length} Comments</span>
        </div>

        {/* Share */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleShare}>
          <FiShare className="text-gray-500" />
          <span className="text-gray-700">{shares} Shares</span>
        </div>
      </div>

      {/* Comments Section */}
      {comments.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Comments:</h4>
          <ul className="space-y-2">
            {comments.map((comment, index) => (
              <li key={index} className="text-gray-600">
                {comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Post;
