import React from "react";
import data from "../data/video-details.json";

function VideoList() {
  return (
    <>
      <div>
      {data.map((data, key) => {
        return (
          <div key={key}>
            comment={data.comments}
            channel={data.channel}
          </div>
        );
        })}
    </div>
    </>
    
  );
};
  
  
  export default VideoList;
