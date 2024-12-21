import React, { useEffect, useState } from "react";
import { useSearch } from "../../../Context/SearchContext";
import Post from "../../../components/Post/Post";

const Search = () => {
  const [postData, setPostData] = useState([]);
  const { searchTerm } = useSearch(); // Access the searchTerm from context
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    if (!searchTerm) return; // Don't fetch if no searchTerm is set

    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching data
      let url = "https://clyst-server.vercel.app/api/v1/data/feed";
      if (searchTerm) {
        url += `?searchTerm=${searchTerm}`; // Add searchTerm to URL if present
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        const reversedData = data?.data?.slice().reverse() || [];
        setPostData(reversedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">Loading...</div> // Show loading state while data is being fetched
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

export default Search;
