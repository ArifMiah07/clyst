import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
const Post = () => {

    const [dbData, setDbData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const imgUrl =
    "data:image/jpeg;base64,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";
  const dumyText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et suscipit animi maxime, incidunt quod cupiditate adipisci enim molestias deleniti aut, explicabo inventore in. Rerum iste recusandae similique nemo atque nisi tempore veniam quibusdam aspernatur, est, numquam placeat, tenetur soluta earum sit! Quae a ex deleniti voluptas blanditiis eligendi voluptates ipsam et rem sed, perspiciatis laudantium temporibus natus, vel omnis culpa praesentium similique mollitia! Non dolor deserunt ipsa earum maiores vero at debitis quia, reiciendis tempora animi consequuntur nihil recusandae accusamus nam aspernatur, aperiam perspiciatis eaque rerum dolorum delectus voluptatem blanditiis voluptates rem. Dolor velit explicabo cumque enim vel exercitationem totam fugit pariatur sit doloribus veniam, laboriosam quo aut at? Voluptate ipsa vero, quaerat culpa quas natus saepe, laudantium sint harum alias eum rerum dolore aperiam. Vitae hic tempore dolorem, dolor enim eos reprehenderit nobis voluptates numquam quaerat officia praesentium consequatur quisquam magnam illo excepturi consectetur consequuntur assumenda maiores illum et, exercitationem commodi optio? Deleniti ut ipsa dignissimos velit enim repellendus totam illo, ullam suscipit necessitatibus reprehenderit beatae. Dolorum, aspernatur molestiae non magnam sed, maiores nostrum exercitationem impedit modi numquam quaerat! Quos omnis, expedita totam porro cumque eaque at ab explicabo libero quae voluptatem repellat assumenda suscipit itaque nostrum optio placeat cum accusantium. Maxime, blanditiis temporibus ad assumenda veniam quae illum dignissimos? Rem aspernatur enim id alias quidem temporibus nemo repellendus velit, beatae ducimus, nesciunt expedita, eos illum! Laboriosam, unde? Error quam doloribus quaerat aut maxime a nemo praesentium corporis facere quidem inventore, velit nostrum quasi recusandae tenetur molestiae? Vero saepe repudiandae voluptatum inventore. Sunt omnis doloremque est atque eligendi architecto doloribus, deserunt optio quod voluptatibus eveniet hic assumenda quo corrupti consequuntur ullam vero aliquid quisquam ipsam dignissimos eum officia! Iure perspiciatis, quaerat nostrum eligendi iste laudantium, quam nemo unde laboriosam ratione impedit consequatur suscipit. Voluptatem natus, asperiores sed animi vero officia laudantium nulla cum, aperiam enim, repudiandae quasi optio nesciunt ea quos iste doloremque temporibus unde error et iure delectus. Facere, nam doloribus! Provident voluptates amet quos quae corrupti soluta illo, deserunt assumenda qui nisi rem ipsa commodi consequatur odit sapiente officiis molestias corporis labore aut laboriosam eius. Doloremque sapiente iste debitis praesentium culpa facere, tenetur fugiat optio dolorem consequuntur necessitatibus at. Vel dignissimos ullam quasi doloribus culpa velit perferendis tenetur rerum, accusamus dolores error deserunt reiciendis natus quaerat similique aliquid voluptatem voluptate libero, nesciunt labore, nostrum quas optio. Tenetur ipsam officia distinctio libero in aliquid voluptates illo beatae deleniti saepe? Eligendi quae quidem voluptas consectetur atque modi qui, quaerat expedita consequatur libero ipsa provident nemo, molestias magnam soluta. Repellendus, sit ipsa odio alias obcaecati, ullam, facilis eveniet quos exercitationem blanditiis reiciendis recusandae magnam animi aut nisi ea hic! Esse earum eius sit similique architecto vel minus animi possimus repellat, consectetur, neque ipsa consequuntur dicta cumque? Enim, sit illum minus aliquid maxime eligendi unde exercitationem autem perferendis cumque harum adipisci fuga? Quis dolorem dolor iste laudantium voluptatem libero eos, officia incidunt obcaecati minus consectetur iure itaque quo, consequuntur, optio veritatis pariatur eaque exercitationem! Explicabo corporis minima quos harum aperiam?";

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
          <p>profile</p>
        </div>
        <div className=" flex flex-col gap-1 w-full h-full">
          <div className="bg-[#234fff] border border-red-200 flex flex-row flex-wrap w-full ">
            <p className="Z">p</p>
          </div>
          <div className="bg-[#234fff] border border-red-200 w-[100px] ">
            <p>time</p>
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
        <img className="w-full" src={data.imgUrl} alt="" />
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
