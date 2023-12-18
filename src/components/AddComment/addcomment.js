import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./addcomment.scss";
import commentLogo from "../../assets/images/icons/add_comment.svg";

const AddComment = () => {
  return (
    <div>
      <h3>3 Comments</h3>
      <div className="addcomment__container">
        <div className="addcomment__container--avatar">
          <img src={avatar} alt="comment avatar" />
        </div>
        <div className="addcomment__container--extra">
          <form>
            <div className="addcomment__container--commentlabel">
              <label for="addcomment">JOIN THE CONVERSATION</label>
            </div>
            <div className="addcomment__container--commenttext">
              <textarea name="addcomment" placeholder="Add a new comment" />
            </div>

            <div className="addcomment__container--commentinput">
              <input
                type="submit"
                id="submit"
                value="COMMENT"
                className="comment__form--submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
