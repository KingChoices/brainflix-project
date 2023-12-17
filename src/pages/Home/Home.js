import React from "react";
import CurrentVideo from "../../components/CurrentVideo/currentvideo.js";
import CurrentDetails from "../../components/CurrentDetails/currentdetails.js";
import Comments from "../../components/Comments/comments.js";
import NextVideo from "../../components/NextVideo/nextvideo.js";
import AddComment from "../../components/AddComment/addcomment.js";

const Home = ({
  currentVideo,
  currentDetails,
  currentComments,
  videoHandleClick,
  detailsHandleClick,
}) => {
  return (
    <>
      <div className="currentvideo__container">
        <CurrentVideo
          image={currentVideo.image}
          title={currentVideo.title}
          channel={currentVideo.channel}
        />
      </div>
      <div className="layout__container">
        <div className="videodetails__container">
          <div className="currentvideo__container--details">
            <CurrentDetails
              title={currentDetails.title}
              channel={currentDetails.channel}
              timestamp={currentDetails.timestamp}
              views={currentDetails.views}
              likes={currentDetails.likes}
              description={currentDetails.description}
            />
          </div>
          <div className="addcomments__container">
            <AddComment />
          </div>
          <div className="comments__container">
            {currentComments.map((comment) => (
              <Comments
                key={comment.id}
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
              />
            ))}
          </div>
        </div>
        <div className="nextvideos__container">
          <NextVideo
            currentVideoId={currentVideo.id}
            videoHandleClick={videoHandleClick}
            detailsHandleClick={detailsHandleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
