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
      setLoading(true); // Set loading state to true before fetching
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
    <div className="w-full">
      {loading ? (
        <div className="w-full h-[400px] flex flex-col items-center justify-center loading-spinner">
          <span className="text-2xl">Loading...</span> {/* Show loading state while data is being fetched */}
        </div>
      ) : postData.length === 0 ? (
        <div className="w-full h-[400px] flex flex-col items-center justify-center">
          <span className="text-2xl">No results found for "{searchTerm}"</span> {/* Show message when no results are found */}
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2">
          {postData?.map((d, i) => (
            <Post key={d._id} data={d} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
