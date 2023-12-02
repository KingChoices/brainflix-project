import React from "react";

function CurrentVideo(props) {
  return (
    <div>
      <div>
        <video controls poster={props.image} width="320px" height="240"></video>
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <div>
          <p>{props.channel}</p>
          <p>{props.timestamp}</p>
        </div>
        <div>
          <p>{props.views}</p>
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentVideo;
