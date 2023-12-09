import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./addcomment.scss";
import commentLogo from "../../assets/images/icons/add_comment.svg";

const AddComment = () => {
  return (
    <div>
      <h3>3 Comments</h3>
      <div className="addcomment__container">
        <div className="addcomment__container--extra">
          <div className="addcomment__container--avatar">
            <img src={avatar} alt="comment avatar" />
          </div>
          <form className="addcomment__container--commenttext">
            <div>
              <label for="addcomment">JOIN THE CONVERSATION</label>
            </div>

            <textarea name="addcomment" placeholder="Add a new comment" />
          </form>
        </div>
        <div className="addcomment__container--commentbtn">
          <span>
            <img src={commentLogo} alt="comment logo" />
          </span>
          <input
            type="submit"
            id="submit"
            value="COMMENT"
            className="comment__form--submit"
          />
        </div>
      </div>
    </div>
  );
};

export default AddComment;
