import data from "../data/video-details.json";
import React from "react";

class CurrentVideoInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: data[0].title,
        description: data[0].description
      };
    }
    render() {
      return (
          <>
            <div className="video--title">
                {this.state.title}
                title 
            </div>
            
            <div className='video--description'>
                {this.state.description}
                description
            </div>
             
          </>
      );
    }
  }

  export default CurrentVideoInfo;