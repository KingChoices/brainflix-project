import React from "react";
import commentsData from "../../data/video-details.json";

const Comments = ({ currentVideoId, handleVideoClick }) => {
  return (
    <div>
      <div className="comments__container">
        <div className="comments__container--avatar"></div>
        <div className="comments__container--comment"></div>
      </div>
    </div>
  );
};

export default Comments;
