import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
const Post = () => {

    const [dbData, setDbData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [text, setText] = useState(false);


  const handleFullText = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the parent p element
    setText(true); // Update state to show full text
  }

  const handleShortText = () => {
    setText(false); // Update state to show short text
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/data`)
    .then(res=> res.json())
    .then(data =>{
        setDbData(data);
        setLoading(false)
    })
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  

console.log(dbData.data);
const [data] = dbData.data
const contentText =  data.text;
console.log(contentText);
  return (
    <div className="border border-pink-600 p-2">
      {/* info */}
      <div className="p-2 flex flex-row gap-4 bg-[#7E4D4D] h-[70px] ">
        <div className=" w-[54px] h-[54px] rounded-full bg-white border border-red-500">
          <img src={data.imgUrl} alt="profile image" />
        </div>
        <div className=" flex flex-col gap-1 w-full h-full">
          <div className="bg-[#234fff] border border-red-200 flex flex-row flex-wrap w-full ">
            <p className="Z">{data.name}</p>
          </div>
          <div className="bg-[#234fff] border border-red-200  ">
            <p>{data.time}.{data.date}</p>
          </div>
        </div>
        <div>
          <CiMenuKebab />
        </div>
      </div>
      {/* text */}
      <div className="bg-[#322222] h-fit">
      <p className="text-white p-1 text-[12px]" onClick={handleShortText}> {/* Click anywhere in the <p> to show short text */}
        {
          text ? contentText : contentText.slice(0, 150) // Show full text or truncated text
        }
        {
          !text && ( // Only show "more" if the text is not fully shown
            <span onClick={handleFullText}>...more</span>
          )
        }
      </p>
      </div>
      {/* file */}
      <div className="bg-[#ED0101]">
        {/* <h1 className=" ">this is file</h1> */}
        <img className="" src={data.imgUrl} alt="" />
      </div>
      {/* <div>
      {dbData.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div> */}
    </div>
  );
};

export default Post;
