import data from '../data/video-details.json';
import React from 'react';

class CurrentVideoStats extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        channel: data[0].channel,
        views: data[0].views,
        likes: data[0].likes,
        date: data[0].timestamp
      };
    }
    render() {
      return (
          <>
            <div className="currentvideo--author">
                By {this.state.channel}
            </div>
            <div className="currentvideo--date">
              date
              {this.state.date}
            </div>
            <div className="currentvideo--views">
                {this.state.views}
                views
            </div>
            <div className="currentvideo--likes">
              {this.state.likes}
              likes
            </div>
          </>
      );
    }
  }

  export default CurrentVideoStats;