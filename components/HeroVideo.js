'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const HeroVideo = ({ videoUrl, posterUrl, isLive = false, children }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <section className="hero relative" aria-label="Flowitec hero">
      <video
        ref={videoRef}
        id="heroVid"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlay={handleCanPlay}
        onLoadedData={handleLoadedData}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      
      {/* Content */}
      <div className="hero-content relative z-10">
        {isLive && (
          <span className="badge live mb-4">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            LIVE
          </span>
        )}
        {children}
      </div>

      {/* Play/Pause Button */}
      {isLoaded && (
        <button
          id="videoToggle"
          onClick={toggleVideo}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="absolute bottom-8 right-8 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      )}
    </section>
  );
};

export default HeroVideo;