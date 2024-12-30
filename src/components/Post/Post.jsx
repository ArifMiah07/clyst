import React, { useState, useRef, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiThumbsUp, FiMessageCircle, FiShare } from "react-icons/fi";

const Post = ({ data }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [openPostMenu, setOpenPostMenu] = useState(false);
  const [likes, setLikes] = useState(data.likes || 0);
  const [comments, setComments] = useState(data.comments || []);
  const [shares, setShares] = useState(data.shares || 0);
  const [views, setViews] = useState(data.view || 0);

  const menuRef = useRef(null);

  // Toggle Post Menu
  const handlePostMenu = () => {
    setOpenPostMenu((prevState) => !prevState);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenPostMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFullText = () => setShowFullText(true);
  const handleShortText = () => setShowFullText(false);

  const handleLike = () => setLikes(likes + 1);

  const handleComment = () => {
    const commentText = prompt("Enter your comment:");
    if (commentText) {
      setComments([...comments, commentText]);
    }
  };

  const handleShare = () => {
    setShares(shares + 1);
    alert("Post shared!");
  };

   // Increment View Count
   useEffect(() => {
    const viewedPosts = JSON.parse(localStorage.getItem("viewedPosts")) || {};

    if (!viewedPosts[data.id]) {
      viewedPosts[data.id] = true;
      localStorage.setItem("viewedPosts", JSON.stringify(viewedPosts));
      setViews((prevViews) => prevViews + 1);

      // Optional: Send to backend
      // fetch(`/api/posts/${data.id}/incrementViews`, { method: "POST" });
    }
  }, [data.id]);


  const contentText = data.text;
  const placeholderImg = "https://via.placeholder.com/54?text=No+Image";

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
        <div ref={menuRef} className="relative">
          <CiMenuKebab
            onClick={handlePostMenu}
            className="text-gray-500 text-xl cursor-pointer"
          />
          {openPostMenu && (
            <div className="absolute right-0 top-0 mt-10 bg-white shadow-md rounded-md p-2">
            <ul className="space-y-2">
              <li className="cursor-pointer hover:bg-gray-100 p-1 rounded-md">
                <div className="tooltip" data-tip="Edit">
                  Edit
                </div>
              </li>
              <li className="cursor-pointer hover:bg-gray-100 p-1 rounded-md">
                <div className="tooltip" data-tip="Delete">
                  Delete
                </div>
              </li>
              <li className="cursor-pointer hover:bg-gray-100 p-1 rounded-md">
                <div className="tooltip" data-tip="Save for later">
                  Store
                </div>
              </li>
            </ul>
          </div>
          )}
        </div>
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

      {/* Views, Date, and Time */}
      <div className="flex flex-row justify-between mt-4 text-sm text-gray-500">
        <p>
          Posted on: {data.date} at {data.time}
        </p>
        <p>Views: {views}</p>
      </div>
      {/* Actions: Like, Comment, Share */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLike}>
          <FiThumbsUp className="text-blue-500" />
          <span className="text-gray-700">{likes} Likes</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleComment}>
          <FiMessageCircle className="text-gray-500" />
          <span className="text-gray-700">{comments.length} Comments</span>
        </div>
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
