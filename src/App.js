import { useState } from "react";
import NextVideo from "./components/NextVideo/nextvideo.js";
import SearchBar from "./components/SearchBar/searchbar.js";
import video from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import CurrentVideo from "./components/CurrentVideo/currentvideo.js";
import CurrentDetails from "./components/CurrentDetails/currentdetails.js";
import Comments from "./components/Comments/comments.js";
import "./styles/global.scss";
import "./styles/styles.scss";
import AddComment from "./components/AddComment/addcomment.js";

function App() {
  const [currentVideo, setCurrentVideo] = useState(video[0]);
  const [currentDetails, setCurrentDetails] = useState(videoDetails[0]);
  const [currentComments, setCurrentComments] = useState(
    currentDetails.comments
  );
  //console.log(videoDetails);

  const videoHandleClick = (clickedvideo) => {
    setCurrentVideo(clickedvideo);
  };

  const detailsHandleClick = (clickeddetails) => {
    setCurrentDetails(clickeddetails);
  };

  const commentsHandleClick = (clickedcomments) => {
    setCurrentComments(clickedcomments);
  };

  return (
    <>
      <header className="App-header">
        <SearchBar />
      </header>
      <section>
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
            <div className="addcomment__container">
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
              currentDetailsId={currentDetails.id}
              currentCommentsId={currentComments.id}
              videoHandleClick={videoHandleClick}
              detailsHandleClick={detailsHandleClick}
              commentsHandleClick={commentsHandleClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
