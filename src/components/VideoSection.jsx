"use client";

import Fade from "@/components/Fade";
import React from "react";

export default function VideoSection() {
  const PlayCircle = () => {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35 30V70L70 50L35 30Z"
          fill="#139948"
        />
      </svg>
    );
  };

  return (
    <Fade up delay={100}>
      <div className="Aboutuspage__video">
        <button
          onClick={() => {
            document.querySelector(".Aboutuspage__video__video").play();
            document.querySelector(
              ".Aboutuspage__video__button",
            ).style.display = "none";
          }}
          className="Aboutuspage__video__button"
        >
          <PlayCircle />
        </button>
        <div className="Aboutuspage__video__button__video">
          <video
            loop={true}
            src="https://wealcoder.com/dev/html/axtra/assets/video/video.mp4"
            className="Aboutuspage__video__video"
          />
        </div>
      </div>
    </Fade>
  );
}
