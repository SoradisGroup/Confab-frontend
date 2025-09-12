'use client'

import Heading from '@/components/UI/Title/Heading';
import Title from '@/components/UI/Title/Title';
import { journeyList } from '@/constants/data/aboutUs/aboutUsInfo';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef, useState } from 'react'

const JourneyComp = () => {

const carouselRef = useRef<CarouselRef>(null);
    
const [currentSlide, setCurrentSlide] = useState<number>(0);



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
     <div className="testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
          <Title title='Our journey'/>
          <Heading line1='Honoring our roots. Shaping our future.'/>
        </div>

 <div className="relative">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {journeyList.map((items) => (
              <div key={items.id} className="w-full px-4 space-y-3 !flex flex-col justify-center items-center">
                   <div className="w-[350px] h-[350px] bg-white overflow-hidden">
                      <img
                        src={items.image}
                        alt={items.title}
                        loading='lazy'
                        className="w-full h-full object-cover border"
                      />
                    </div>
                    <h1 className='text-3xl text-center'>{items.title}</h1>
                    <p className='text-sm text-center'>{items.para}</p>
              </div>
            ))}
          </Carousel>

<div className="flex justify-center mt-12 space-x-2">
            {journeyList.map((_, index) => (
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
                aria-label={`Go to recent Update ${index + 1}`}
              />
            ))}
          </div>

        </div>


        </div>
  )
}

export default JourneyComp