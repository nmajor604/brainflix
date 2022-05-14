// import data from "../data/video-details.json";
import React from "react";

function CurrentVideoInfo(props) {
      return (
          <>
            <div className="video--title">
                {props.title}
            </div>
            
            <div className='video--description'>
                {props.description}
            </div>
             
          </>
      );
    }
  

  export default CurrentVideoInfo;