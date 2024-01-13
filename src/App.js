import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/searchbar.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./styles/global.scss";
import "./styles/styles.scss";
import axios from "axios";
import Home from "./pages/Home/Home.js";
import Upload from "./pages/Upload/upload.js";

function App() {
  const [responseData, setResponseData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(
    responseData.length > 0 ? responseData : "loading"
  );

  console.log(currentVideo);
  const [currentDetails, setCurrentDetails] = useState({});
  console.log(currentDetails);
  const [currentComments, setCurrentComments] = useState(
    currentDetails.comments || []
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

  useEffect(() => {
    if (currentVideo && currentVideo.id) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${currentVideo.id}?api_key=${key}`
        )
        .then((response) => {
          setCurrentDetails(response.data);
          setCurrentComments(response.data.comments || []);
          console.log(response.data);
        });
    }
  }, [currentVideo]);

  let { videoId } = useParams();
  console.log(videoId);

  useEffect(() => {
    console.log("currentDetails:", currentDetails);
    if (!videoId) {
      console.log("param is empty");
    } else {
      console.log(videoId);
    }
  }, [currentDetails, videoId]);

  console.log(currentDetails);

  return (
    <Router>
      <>
        <header className="header__section">
          <SearchBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                responseData={responseData}
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
              <Home
                responseData={responseData}
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
