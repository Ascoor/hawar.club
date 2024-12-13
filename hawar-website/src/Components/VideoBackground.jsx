/* eslint-disable react/prop-types */
import { useEffect, forwardRef } from 'react';
import VideoBanner from '../assets/videos/hawar-intro.mp4';

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

    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [onVideoReady, onTimeUpdate, replay, ref]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-fill"
      >
        <source src={VideoBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
});

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;
