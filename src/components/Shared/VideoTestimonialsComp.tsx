// 'use client';

// import React, { useRef, useState } from 'react';
// import { Carousel } from 'antd';
// import Title from '../UI/Title/Title';
// import Heading from '../UI/Title/Heading';
// import { CarouselRef } from 'antd/es/carousel';
// import { videoTestimonials } from '@/constants/data/home/homeInfo';

// const VideoTestimonialsComp = () => {

// const carouselRef = useRef<CarouselRef>(null);

// const [currentSlide, setCurrentSlide] = useState<number>(0);

//   // Video Testimonials data


//   const carouselSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 6000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   const handleAfterChange = (current: number) => {
//     setCurrentSlide(current)
//   }

//   return (
//     <div className="video-testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      
//         {/* Header */}
//         <div className="text-center space-y-2 md:space-y-4 mb-8">
//           <Title title='VIDEO TESTIMONIALS'/>
//           <Heading line1='What our clients say'/>
//         </div>

//         {/* Video Testimonials Carousel */}
//         <div className="relative">
//           <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
//             {videoTestimonials.map((testimonial) => (
//               <div key={testimonial.id} className="px-4">
//                 <div className="bg-white border border-zinc-200 p-6 h-full">
                  
//                   {/* Video Container */}
//                   <div className="relative mb-4">
//                     <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
//                       <video
//                         className="w-full h-full object-cover"
//                         controls
//                         preload="metadata"
//                         poster={testimonial.thumbnail}
//                       >
//                         <source src={testimonial.videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
                    
//                     {/* Play button overlay (optional) */}
//                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                       <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
//                         <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Profile Section */}
//                   <div className="text-center">
//                     <h4 className="text-lg font-semibold text-[#1c2834] mb-1">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-sm text-[#1c2834] leading-relaxed">
//                       {testimonial.position}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </Carousel>

//           {/* Custom Dots Navigation */}
//           <div className="flex justify-center mt-12 space-x-2">
//             {videoTestimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => carouselRef.current?.goTo(index)}
//                 className={`
//                   w-2 h-2 rounded-full transition-all duration-300
//                   ${index === currentSlide 
//                     ? 'bg-[#f27521] scale-125' 
//                     : 'border border-gray-300 bg-white hover:bg-gray-400'
//                   }
//                 `}
//                 aria-label={`Go to video testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//         </div>

//       </div>
//   );
// };

// export default VideoTestimonialsComp;

'use client';

import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import { CarouselRef } from 'antd/es/carousel';
import { videoTestimonials } from '@/constants/data/home/homeInfo';
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdFullscreen, MdPause, MdPlayArrow } from 'react-icons/md';

const VideoTestimonialsComp = () => {

const carouselRef = useRef<CarouselRef>(null);
const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

const [currentSlide, setCurrentSlide] = useState<number>(0);
const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  // Video Testimonials data


  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current)
  }

  const handleVideoPlay = (index: number) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
    setPlayingVideo(index);
  };

  const handleVideoPause = (index: number) => {
    setPlayingVideo(null);
  };

  const toggleVideoPlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleFullscreen = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      
        {/* Header */}
        {/* <div className="text-center space-y-2 md:space-y-4 mb-8">
          <Title title='VIDEO TESTIMONIALS'/>
          <Heading line1='What our clients say'/>
        </div> */}

        {/* Video Testimonials Carousel */}
        <div className="relative">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {videoTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white border border-[#4970b3]  p-3 h-full rounded-md">
                  
                  {/* Video Container */}
                  <div className="relative ">
                    <div className="aspect-[9/16] bg-gray-100  overflow-hidden relative">
                      <video
                        ref={(el: any) => videoRefs.current[index] = el}
                        className="w-full h-full object-cover"
                        preload="metadata"
                        poster={testimonial.thumbnail}
                        onPlay={() => handleVideoPlay(index)}
                        onPause={() => handleVideoPause(index)}
                        style={{ outline: 'none' }}
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Light black overlay when paused */}
                      {playingVideo !== index && (
                        <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                      )}
                      
                      {/* Custom Controls */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                        {/* Play/Pause Button - Bottom Left */}
                        <button
                          onClick={() => toggleVideoPlayPause(index)}
                          className="bg-[#4970b3] bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-all duration-200 flex items-center justify-center"
                          aria-label={playingVideo === index ? 'Pause video' : 'Play video'}
                        >
                          {playingVideo === index ? (
                            // Pause Icon
                            <MdPause className='text-[25px]' />
                          ) : (
                            // Play Icon
                            <MdPlayArrow className='text-[25px]' />
                            
                          )}
                        </button>
                        
                        {/* Fullscreen Button - Bottom Right (only when playing) */}
                        {playingVideo === index && (
                          <button
                            onClick={() => handleFullscreen(index)}
                            className="bg-[#4970b3] bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-all duration-200 flex items-center justify-center ml-auto"
                            aria-label="Enter fullscreen"
                          >
                            {/* Fullscreen Icon */}
                            <MdFullscreen className='text-[25px]' />
                          </button>
                        )}
                      </div>
                    </div>
                    
                   
                  </div>

                  {/* Profile Section */}
                  {
                    testimonial.name && 
                    (<div className="text-center">
                    <h4 className="text-lg font-semibold text-[#1c2834] mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#1c2834] leading-relaxed">
                      {testimonial.position}
                    </p>
                  </div>)
                  }

                </div>
              </div>
            ))}
          </Carousel>

          {/* Custom Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-2">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselRef.current?.goTo(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentSlide 
                    ? 'bg-[#f27521] scale-125' 
                    : 'border border-gray-300 bg-white hover:bg-gray-400'
                  }
                `}
                aria-label={`Go to video testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
  );
};

export default VideoTestimonialsComp;