"use client";

import { videoTestimonials } from "@/constants/data/home/homeInfo";
import React, { useRef } from "react";

const VideoList = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
  };

  const handleStop = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col space-y-6 p-6">
      {videoTestimonials.map((e, i) => (
        <div key={i} className="flex flex-col items-center space-y-2">
          <video
            ref={(el) => {
              if (el) videoRefs.current[i] = el;
            }}
            className="w-full max-w-lg rounded-lg shadow-md"
            src={e.videoUrl}
            controls
            muted
            onPlay={() => handlePlay(i)}
          />
          <button
            onClick={() => handleStop(i)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Stop Video {i + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
