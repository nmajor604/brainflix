import React from "react";
import './CurrentVideoInfo.scss';

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