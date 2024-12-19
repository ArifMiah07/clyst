import React from "react";
import Feed from "./Feed/Feed";
import Message from "./Message/Message";
import Status from "./Status/Status";

const Board = () => {

  const isForReal = false;

  return (
    <div className={`h-[500px] border border-blue-400 lg:grid ${isForReal? "grid-cols-12" : "grid-cols-1"}`}>
      {/* Feed takes 5 columns */}
      <div className="border border-green-300 lg:col-span-5">
        <Feed />
      </div>
      {
        isForReal? <div>
        {/* Message takes 5 columns, starts at column 6 */}
        <div className="border border-green-300 lg:col-span-5 lg:col-start-6">
          <Message />
        </div>

        {/* Status takes 2 columns, starts at column 11 */}
        <div className="border border-green-300 lg:col-span-2 lg:col-start-11">
          <Status />
        </div>
      </div> : ""
      }
    </div>
  );
};

export default Board;
