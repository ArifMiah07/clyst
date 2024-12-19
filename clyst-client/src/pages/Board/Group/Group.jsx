import { useEffect, useState } from "react";
import Groups from "../../../components/Groups/Groups";

const Group = () => {
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from group.json
    fetch('/group.json')
      .then(res => res.json())
      .then(data => {
        setGroupsData(data);
      })
      .catch(error => console.error("Error fetching groups data:", error));
  }, []);

  return(
    <div>
         <Groups groups={groupsData} />
    </div>
  )
};

export default Group;
