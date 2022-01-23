import React, { Component } from "react";
import { ReactVideo } from "reactjs-media";
import vid from "../../img/video.mp4" 

class MediaComponent extends Component {
  
  render() {
    return (
      <div>
        <ReactVideo
            src={vid}
            poster='/poster.png'
            primaryColor="red"
            autoPlay
        />
      </div>
    );
  }

}

export default MediaComponent;