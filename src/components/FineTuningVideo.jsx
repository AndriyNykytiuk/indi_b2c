import React, { useEffect, useRef } from 'react';
import moovie from '../video/video.mp4';

const FineTuningVideo = () => {
  const videoRef = useRef(null);



  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '200%',
        height: 0,
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        src={moovie}
        type="video/mp4"
        controls
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
