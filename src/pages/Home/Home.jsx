import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import Loading from "../Shared/Loading/Loading";
import App from "../../App";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // const [postData, setPostData] = useState([]);

  // useEffect(() =>{
  //   fetch('https://clyst-server.vercel.app/api/v1/data/feed')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log('data from home boy' ,data)
  //     setPostData(data.data);
  //   })
  // },[])

  // console.log(postData);

  useEffect(() => {
    // Simulate a delay for loading
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds for the loading spinner

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="my-2">
      <Board />
    </div>
  );
};

export default Home;
