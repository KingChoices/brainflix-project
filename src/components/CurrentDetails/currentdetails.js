import React from "react";
import "./currentdetails.scss";
import viewsLogo from "../../assets/images/icons/views.svg";
import likesLogo from "../../assets/images/icons/likes.svg";

const CurrentDetails = (props) => {
  return (
    <>
      <div className="details__container">
        <div className="details__container--title">
          <h3>{props.title}</h3>
        </div>
        <div className="details__container--extras">
          <div className="details__container--info-one">
            <p>{props.channel}</p>
            <p>{props.timestamp}</p>
          </div>
          <div className="details__container--info-two">
            <p>
              <span>
                <img src={viewsLogo} alt="views icon" />
              </span>
              {props.views}
            </p>
            <p>
              <span>
                <img src={likesLogo} alt="likes icon" />
              </span>
              {props.likes}
            </p>
          </div>
        </div>
        <div className="details__container--desc">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default CurrentDetails;
