import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./comments.scss";

const Comments = (props) => {
  return (
    <div>
      <div className="comments__container">
        <div className="comments__container--avatar">
          <div></div>
        </div>
        <div className="comments__container--comment">
          <div>
            <div className="comments__container--comment-author">
              <p>{props.author}</p>
            </div>
            <div className="comments__container--comment-timestamp">
              <p>{props.timestamp}</p>
            </div>
          </div>
          <div className="comments__container--comment-text">
            <p>{props.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
