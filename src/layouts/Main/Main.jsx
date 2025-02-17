import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../pages/Shared/Nav/Nav";
import LogoLoading from "../../components/LoadingComponent/LogoLoading";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed (e.g., 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LogoLoading />;
  }

  return (
    <div>
      <Nav />
      <div className="lg:h-[560px] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
