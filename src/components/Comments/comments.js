import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./comments.scss";

const Comments = (props) => {
  return (
    <>
      <div className="comments__container">
        <div className="comments__container--layout">
          <div className="comments__container--avatar">
            <div></div>
          </div>
          <div className="comments__container--comment">
            <div className="comments__container--comment--grid">
              <div className="comments__container--comment-author">
                <p>{props.name}</p>
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
    </>
  );
};

export default Comments;
