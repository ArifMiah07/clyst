import React, { useEffect, useState } from "react";
import Post from "../../../components/Post/Post";


const Feed = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state

  useEffect(() =>{
      fetch('https://clyst-server.vercel.app/api/v1/data/feed')
      .then(res => res.json())
      .then(data => {
        console.log('data from home boy' ,data)
        setLoading(false)
        setPostData(data.data);
      })
    },[])

    // Re-fetch when searchTerm changes

  console.log("postData from feed", postData);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">Loading...</div>  // Show loading state while data is being fetched
      ) : (
        <div className="w-full h-full flex flex-col justify-center p-2  gap-2">
          {postData?.map((d, i) => (
            <Post key={d._id || i} data={d} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
