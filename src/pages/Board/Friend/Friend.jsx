import React, { useEffect, useState } from "react";
import Friends from "../../../components/Friends/Friends";
import Loading from "../../Shared/Loading/Loading";


const Friend = () => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://clyst-server.vercel.app/api/v1/data/feed")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data?.data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="bg-gradient-to-b from-blue-800 via-purple-700 to-pink-600 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Total Friends: <span className="text-yellow-300">{postData?.length}</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {postData?.map((d) => (
            <Friends key={d._id} data={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friend;
