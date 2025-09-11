import React, { useEffect, useRef } from 'react';
import moovie from '../video/video.mp4';

const FineTuningVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 } // 50% відео в viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '170%',
        height: 0,
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        controls
        src={moovie}
        type="video/mp4"
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default FineTuningVideo;
