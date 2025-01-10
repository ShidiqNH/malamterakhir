import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videoData } from '../types';

export default function Watch() {
  const [currentVideoId, setCurrentVideoId] = useState('start');

  const handleChoiceSelected = (nextVideoId: string) => {
    setCurrentVideoId(nextVideoId);
  };

  return (
    <div className="h-screen w-screen bg-black">
      <VideoPlayer
        videoNode={videoData[currentVideoId]}
        onChoiceSelected={handleChoiceSelected}
      />
    </div>
  );
}