import React from 'react';
import eyeball from '../assets/icons/views.svg';
import heart from '../assets/icons/likes.svg';

function CurrentVideoStats(props) {
      return (
          <div className='videostats'>
            <div className="currentvideo--author">
                By {props.channel}
            </div>
            <div className="currentvideo--date">
              {props.date}
            </div>
            <div className="currentvideo--views">
                <img src={eyeball} alt="Views Icon" />{props.views}
            </div>
            <div className="currentvideo--likes">
                <img src={heart} alt="Heart Icon" />{props.likes}
            </div>
          </div>
      );
    }
  

  export default CurrentVideoStats;