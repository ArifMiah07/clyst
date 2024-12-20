import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import Loading from "../Shared/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

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
    <div>
      <Board />
    </div>
  );
};

export default Home;
