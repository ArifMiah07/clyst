import React, { useEffect, useState } from "react";
import Post from "../../../components/Post/Post";
import { useSearch } from "../../../Context/SearchContext";


const Feed = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state

  useEffect(() =>{
      fetch('https://clyst-server.vercel.app/api/v1/data/feed')
      .then(res => res.json())
      .then(data => {
        console.log('data from home boy' ,data)
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
        <div className="flex flex-col gap-2">
          {postData?.map((d, i) => (
            <Post key={d._id} data={d} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
