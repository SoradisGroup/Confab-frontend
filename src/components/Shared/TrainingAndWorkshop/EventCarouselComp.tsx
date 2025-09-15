"use client"

import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import React, { useRef, useState } from 'react'

const EventCarouselComp = ({ images }: { images: { image: string, name: string }[] }) => {

const carouselRef = useRef<CarouselRef>(null);
const [currentSlide, setCurrentSlide] = useState(0);

const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
     <div className="relative w-full">
      <Carousel
        ref={carouselRef}
        afterChange={(current) => setCurrentSlide(current)}
        {...carouselSettings}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full h-full px-0 md:px-2">
            <img src={img.image} alt={img.name} loading="lazy" className="w-full h-full object-cover border" />
          </div>
        ))}
      </Carousel>

      {/* Custom Dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => carouselRef.current?.goTo(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${
                index === currentSlide
                  ? "bg-[#f27521] scale-125"
                  : "border border-gray-300 bg-white hover:bg-gray-400"
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default EventCarouselComp