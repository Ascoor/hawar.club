import React, { useRef, useEffect, forwardRef } from "react";
import bannerShadow from "../assets/images/banner-shadow.png";
import VideoBanner from "../assets/videos/hawar-intro.mp4";

const VideoBackground = forwardRef(({ onVideoReady, onTimeUpdate, replay }, ref) => {
  useEffect(() => {
    const videoElement = ref.current;

    const handleCanPlayThrough = () => {
      onVideoReady(true);
      if (replay) {
        videoElement.currentTime = 0; 
        videoElement.play(); 
      }
    };

    const handleTimeUpdate = () => {
      onTimeUpdate(videoElement.currentTime);
    };

    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onVideoReady, onTimeUpdate, replay, ref]);

  return (
    <>
      {}
      <video
        ref={ref}
        autoPlay
        muted
        loop={false}
        playsInline
        className="absolute inset-0 w-full h-full object-fill"
      >
        <source src={VideoBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {}
      <div
        className="absolute inset-0 bg-repeat-y bg-left scale-x-[-1] opacity-75 xs:opacity-40 "
        style={{ backgroundImage: `url(${bannerShadow})` }}
      ></div>
    </>
  );
});

export default VideoBackground;