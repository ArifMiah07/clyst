import React, { useEffect, useState } from 'react';
import Post from '../../../components/Post/Post';

const Feed = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setPostData(data?.data || []); // Use the "data" key from the API response
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log('Number of posts:', postData?.length);

  return (
    <div>
      <div className="flex flex-col gap-2 h-[500px] overflow-y-scroll scroll-smooth">
        {postData?.map((d, i) => (
          <Post key={d._id} data={d} /> // Pass "data" directly
        ))}
      </div>
    </div>
  );
};

export default Feed;
