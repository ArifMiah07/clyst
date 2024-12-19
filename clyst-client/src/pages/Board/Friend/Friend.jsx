import { useEffect, useState } from "react";
import Friends from "../../../components/Friends/Friends";

const Friend = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setPostData(data?.data || []);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log('Number of posts:', postData?.length);
  const length = postData?.length;

  return (
    <div className="bg-gradient-to-b from-blue-800 via-purple-700 to-pink-600 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Total Friends: <span className="text-yellow-300">{length}</span>
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
