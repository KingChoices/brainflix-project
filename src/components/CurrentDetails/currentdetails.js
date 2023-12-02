import React from "react";

const CurrentDetails = (props) => {
  return (
    <div>
      <div className="details__container">
        <div className="details__container--title">
          <h3>{props.title}</h3>
        </div>
        <div className="details__container--extras">
          <div>
            <p>{props.channel}</p>
            <p>{props.timestamp}</p>
          </div>
          <div>
            <p>{props.views}</p>
            <p>{props.likes}</p>
          </div>
        </div>
        <div className="details__container--desc">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentDetails;
