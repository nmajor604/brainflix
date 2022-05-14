import React from 'react';

function CurrentVideoStats(props) {
      return (
          <>
            <div className="currentvideo--author">
                By {props.channel}
            </div>
            <div className="currentvideo--date">
              date
              {props.date}
            </div>
            <div className="currentvideo--views">
                {props.views}
                views
            </div>
            <div className="currentvideo--likes">
              {props.likes}
              likes
            </div>
          </>
      );
    }
  

  export default CurrentVideoStats;