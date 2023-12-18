import { useEffect, useState } from "react";
import NextVideo from "./components/NextVideo/nextvideo.js";
import SearchBar from "./components/SearchBar/searchbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import videoDetails from "./data/video-details.json";
import "./styles/global.scss";
import "./styles/styles.scss";
import axios from "axios";
import Home from "./pages/Home/Home.js";
import VideoPlayerPage from "./pages/VideoPlayer/Videoplayer.js";
import Upload from "./pages/Upload/Upload.js";

function App() {
  const [responseData, setResponseData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(
    responseData.length > 0 ? responseData : "loading"
  );
  const [currentDetails, setCurrentDetails] = useState(videoDetails[0]);
  const [currentComments, setCurrentComments] = useState(
    currentDetails.comments
  );

  const videoHandleClick = (clickedvideo) => {
    setCurrentVideo(clickedvideo);
    console.log(clickedvideo);
  };

  const detailsHandleClick = (clickeddetails) => {
    setCurrentDetails(clickeddetails);
    setCurrentComments(clickeddetails.comments);
    console.log(clickeddetails);
  };

  const key = "c581c5a1-6ba0-4ce7-afa9-45af222c2107";

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${key}`)
      .then((response) => {
        setResponseData(response.data);
        setCurrentVideo(response.data[0]);
        console.log(response.data);
      });
  }, []);
  console.log(responseData.length > 0 ? responseData : "Loading...");
  return (
    <Router>
      <>
        <header className="App-header">
          <SearchBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentVideo={currentVideo}
                currentDetails={currentDetails}
                currentComments={currentComments}
                videoHandleClick={videoHandleClick}
                detailsHandleClick={detailsHandleClick}
              />
            }
          />
          <Route path="/upload" element={<Upload />} />
          <Route
            path="/videos/:videoId"
            element={
              <VideoPlayerPage
                currentVideo={currentVideo}
                currentDetails={currentDetails}
                currentComments={currentComments}
                videoHandleClick={videoHandleClick}
                detailsHandleClick={detailsHandleClick}
              />
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
