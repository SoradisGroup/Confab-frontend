'use client';

import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import { CarouselRef } from 'antd/es/carousel';

const VideoTestimonialsComp = () => {

const carouselRef = useRef<CarouselRef>(null);

const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Video Testimonials data
  const videoTestimonials = [
    {
      id: 1,
      name: "Dr. John Smith",
      position: "Professor, Business Management",
      videoUrl: "/assets/videos/testimonials/dr-john-smith.mp4",
      thumbnail: "/assets/images/testimonials/dr-john-smith-thumb.webp"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      position: "Senior Research Director",
      videoUrl: "/assets/videos/testimonials/dr-sarah-johnson.mp4",
      thumbnail: "/assets/images/testimonials/dr-sarah-johnson-thumb.webp"
    },
    {
      id: 3,
      name: "Prof. Michael Chen",
      position: "Head of Technology Department",
      videoUrl: "/assets/videos/testimonials/prof-michael-chen.mp4",
      thumbnail: "/assets/images/testimonials/prof-michael-chen-thumb.webp"
    },
    {
      id: 4,
      name: "Dr. Emily Rodriguez",
      position: "Vice Dean, Innovation Faculty",
      videoUrl: "/assets/videos/testimonials/dr-emily-rodriguez.mp4",
      thumbnail: "/assets/images/testimonials/dr-emily-rodriguez-thumb.webp"
    },
    {
      id: 5,
      name: "Dr. David Kumar",
      position: "Director of International Relations",
      videoUrl: "/assets/videos/testimonials/dr-david-kumar.mp4",
      thumbnail: "/assets/images/testimonials/dr-david-kumar-thumb.webp"
    },
    {
      id: 6,
      name: "Prof. Lisa Thompson",
      position: "Chief Academic Officer",
      videoUrl: "/assets/videos/testimonials/prof-lisa-thompson.mp4",
      thumbnail: "/assets/images/testimonials/prof-lisa-thompson-thumb.webp"
    }
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  return (
    <div className="video-testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
          <Title title='VIDEO TESTIMONIALS'/>
          <Heading line1='What our clients say'/>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="relative">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white border border-zinc-200 p-6 h-full">
                  
                  {/* Video Container */}
                  <div className="relative mb-4">
                    <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        poster={testimonial.thumbnail}
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    
                    {/* Play button overlay (optional) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#1c2834] mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#1c2834] leading-relaxed">
                      {testimonial.position}
                    </p>
                  </div>

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

        {/* Custom CSS for carousel */}
        <style jsx global>{`
          .video-testimonials-carousel .ant-carousel .ant-carousel-dots {
            bottom: -50px;
          }
          
          .video-testimonials-carousel .ant-carousel .ant-carousel-dots li {
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }
          
          .video-testimonials-carousel .ant-carousel .ant-carousel-dots li button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #d1d5db;
            border: none;
            opacity: 1;
          }
          
          .video-testimonials-carousel .ant-carousel .ant-carousel-dots li.ant-carousel-dots-active button {
            background: #f97316;
          }
          
          .video-testimonials-carousel .ant-carousel .ant-carousel-dots li:hover button {
            background: #f97316;
            opacity: 0.8;
          }

          .video-testimonials-carousel .ant-carousel .ant-carousel-content {
            height: auto;
          }

          .video-testimonials-carousel .slick-slide > div {
            height: 100%;
          }

          .video-testimonials-carousel .slick-slide > div > div {
            height: 100%;
            display: flex !important;
            flex-direction: column;
          }

          /* Video player customization */
          .video-testimonials-carousel video::-webkit-media-controls-panel {
            background-color: rgba(0, 0, 0, 0.8);
          }

          .video-testimonials-carousel video::-webkit-media-controls-play-button,
          .video-testimonials-carousel video::-webkit-media-controls-volume-slider,
          .video-testimonials-carousel video::-webkit-media-controls-timeline {
            filter: invert(1);
          }
        `}</style>
      </div>
  );
};

export default VideoTestimonialsComp;