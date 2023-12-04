import React from "react";
import "./currentvideo.scss";

function CurrentVideo(props) {
  return (
    <div>
      <div className="currentvideo__container">
        <video controls poster={props.image} width="100vw" height="240"></video>
      </div>
    </div>
  );
}

export default CurrentVideo;
