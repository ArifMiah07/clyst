import React, { useState, useEffect } from "react";
import CreateAPost from "./CreateAPost/CreateAPost";
import Loading from "../Shared/Loading/Loading";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay to show the loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Simulate loading time
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <CreateAPost />
    </div>
  );
};

export default Dashboard;
