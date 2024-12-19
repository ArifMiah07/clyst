import React, { useEffect, useState } from "react";
import Groups from "../../../components/Groups/Groups";
import Loading from "../../Shared/Loading/Loading";


const Group = () => {
  const [groupsData, setGroupsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/group.json")
      .then((res) => res.json())
      .then((data) => {
        setGroupsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching groups data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Groups groups={groupsData} />
    </div>
  );
};

export default Group;
