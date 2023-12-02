import { useState } from "react";
import NextVideo from "./components/NextVideo/nextvideo.js";
import SearchBar from "./components/SearchBar/searchbar.js";
import video from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import CurrentVideo from "./components/CurrentVideo/currentvideo.js";
import CurrentDetails from "./components/CurrentDetails/currentdetails.js";

function App() {
  const [currentVideo, setCurrentVideo] = useState(video[0]);
  const [currentDetails, setCurrentDetails] = useState(videoDetails[0]);
  const [currentComments, setCurrentComments] = useState(
    videoDetails[0].comments[0]
  );

  const videoHandleClick = (clickedvideo) => {
    setCurrentVideo(clickedvideo);
  };

  const detailsHandleClick = (clickeddetails) => {
    setCurrentDetails(clickeddetails);
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
            <div className="addcomment__container"></div>
            <div className="comments__container"></div>
          </div>
          <div className="nextvideos__container">
            <NextVideo
              currentVideoId={currentVideo.id}
              currentDetailsId={currentDetails.id}
              videoHandleClick={videoHandleClick}
              detailsHandleClick={detailsHandleClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
