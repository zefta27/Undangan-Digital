import React, { useState, useEffect, lazy, Suspense } from 'react';
import { mp3 } from '../assets/';
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from 'react-icons/hi';


const ScreenPlayButton = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState(new Audio(mp3));

  useEffect(() => {
    audio.loop = true;
    audio.muted = isMuted;
    audio.play();
  }, [audio, isMuted]);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-0 left-0 p-4 rounded-full text-center max-xs:h-auto z-50">
    <button
      className="p-2 rounded-full bg-orange-500 text-peach mr-2 focus:outline-none text-white"
      onClick={handleMuteToggle}
    >
      {isMuted ? <HiOutlineVolumeOff size={24} /> : <HiOutlineVolumeUp size={24} />}
    </button>
  </div>
  );
};

export default ScreenPlayButton;
