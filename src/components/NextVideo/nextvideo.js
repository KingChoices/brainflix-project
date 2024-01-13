import "./nextvideo.scss";
import "../../styles/global.scss";
import React from "react";
import { Link } from "react-router-dom";

const NextVideo = ({
  currentVideoId,
  videoHandleClick,
  detailsHandleClick,
  videoDetails,
  videosData,
}) => {
  if (!videosData || !videoDetails) {
    return null; // You can render an alternative UI or just return nothing
  }

  const filteredVideos = videosData.filter(
    (video) => video.id !== currentVideoId
  );

  return (
    <div>
      <h3 className="nextvideos__section--title">NEXT VIDEOS</h3>
      {filteredVideos.map(function (data) {
        return (
          <Link
            to={`/videos/${data.id}`}
            className="link"
            key={data.id}
            onClick={() => {
              videoHandleClick(data);

              const detailsArr = videoDetails.findIndex(
                (details) => details.id === data.id
              );
              if (detailsArr !== -1) {
                detailsHandleClick(videoDetails[detailsArr]);
                const commentArr = videoDetails[detailsArr].comments;
                console.log(commentArr);
              }
            }}
          >
            <div className="nextvideo__card">
              <div className="nextvideo__container">
                <div className="nextvideo__img--container">
                  <img src={data.image} alt="video thumbnail" />
                </div>
                <div className="nextvideo__info__container">
                  <div>
                    <p className="info__container--title">{data.title}</p>
                  </div>
                  <div>
                    <p className="info__container--channel">{data.channel}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NextVideo;
