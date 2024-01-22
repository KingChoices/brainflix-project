import React, { useEffect, useState } from "react";
import axios from "axios";
import bikelogo from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import "../../styles/global.scss";

const Upload = () => {
  const [video, setVideo] = useState();

  var formId = document.getElementById("uploadform");
  var titleId = document.getElementById("videotitle");
  var descId = document.getElementById("videodesc");
  var submitId = document.getElementById("videosubmit");

  //ormId.addEventListener("submit", formSub);

  function formSub(e) {
    e.preventDefault();
    const title = titleId.value;
    const desc = descId.value;

    const newVideo = {
      title: title,
      desc: desc,
    };

    setVideo(newVideo);
    console.log(newVideo);

    axios.post("http://localhost:4000/videos", newVideo);

    titleId.value = "";
    descId.value = "";
  }

  console.log(video);

  return (
    <>
      <div className="upload__container">
        <h3 className="upload__section--title">Upload Video</h3>
        <div className="upload__container--upload">
          <p>VIDEO THUMBNAIL</p>
          <div className="upload__container--img">
            <img src={bikelogo} alt="bike" />
          </div>
        </div>
        <div className="upload__container--details">
          <div>
            <div className="upload__container--title--label">
              <label for="videotitle">TITLE YOUR VIDEO</label>
            </div>
            <div className="upload__container--title--text">
              <textarea
                name="videotitle"
                id="videotitle"
                placeholder="Add a title to your video"
              />
            </div>
          </div>
          <div>
            <div className="upload__container--desc--label">
              <label for="videodesc">ADD A VIDEO DESCRIPTION</label>
            </div>
            <div className="upload__container--desc--text">
              <textarea
                name="videodesc"
                id="videodesc"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <div className="button__container">
          <div className="button__container--publish">
            <button id="videosubmit" onClick={formSub}>
              PUBLISH
            </button>
          </div>
          <div className="button__container--cancel">
            <button>CANCEL</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
