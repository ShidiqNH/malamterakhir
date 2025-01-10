import React, { useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import { VideoNode } from '../types';

interface VideoPlayerProps {
  videoNode: VideoNode;
  onChoiceSelected: (nextVideoId: string) => void;
}

export default function VideoPlayer({ videoNode, onChoiceSelected }: VideoPlayerProps) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVideoEnded(false);

    if (containerRef.current) {
      // Create a new iframe element
      const iframe = document.createElement('iframe');
      iframe.src = `${videoNode.videoUrl}?autoplay=1&api=1`;
      iframe.className = 'w-full h-full';
      iframe.allow = 'autoplay; fullscreen';
      iframe.allowFullscreen = true;
      
      // Clear container and append new iframe
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(iframe);

      // Initialize Vimeo player
      playerRef.current = new Player(iframe);
      
      // Add event listener for video end
      playerRef.current.on('ended', () => {
        setIsVideoEnded(true);
      });
    }

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoNode.id]);

  return (
    <div className="fixed inset-0 bg-black">
      {/* Video Container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Choices Popup */}
      {isVideoEnded && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
          
          {/* Popup Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl max-w-lg w-full mx-4 shadow-2xl">
              {videoNode.isEnding ? (
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-6">The End</h2>
                  <button
                    onClick={() => onChoiceSelected('start')}
                    className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 text-white text-lg font-medium transform hover:scale-105"
                  >
                    Play Again
                  </button>
                </div>
              ) : (
                videoNode.choices && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Make Your Choice</h2>
                    <div className="space-y-4">
                      {videoNode.choices.map((choice) => (
                        <button
                          key={choice.nextVideoId}
                          onClick={() => onChoiceSelected(choice.nextVideoId)}
                          className="w-full px-6 py-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-white text-lg font-medium transform hover:scale-105 border border-white/10 hover:border-white/30"
                        >
                          {choice.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

