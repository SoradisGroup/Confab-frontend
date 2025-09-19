'use client'

import { Carousel } from 'antd';
import React, { useRef, useState } from 'react'
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import { CarouselRef } from 'antd/es/carousel';
import Link from 'next/link';

const UpcomingEventsComp = () => {

const carouselRef = useRef<CarouselRef>(null);
    
const [currentSlide, setCurrentSlide] = useState<number>(0);

const upcomingEventsList = [
     {
      id: 1,
      image: "/assets/images/home/Conference-scaled.jpg",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/home/1-1.jpg",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/home/2-1.jpg",
      title: ""
    },
    {
      id: 4,
      image: "/assets/images/home/Title-Square.jpg",
      title: ""
    },
    {
      id: 5,
      image: "/assets/images/home/Upcoming-Programs-square.jpg",
      title: ""
    },
]

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
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
       {
        breakpoint: 865,
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
          <Title title='Upcoming Events'/>
          <Heading line1='Don’t Miss Our Upcoming Events.'/>
        </div>

 <div className="relative mb-10">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {upcomingEventsList.map((items) => (
              <div key={items.id} className="px-4 flex justify-center items-center">
                   <div className="max-w-[350px] max-h-[350px] bg-white overflow-hidden">
                      <img
                        src={items.image}
                        alt={items.title}
                        className="w-full h-full object-cover border"
                      />
                    </div>
                    {/* <p className='text-sm text-center'>{items.title} hello</p> */}
              </div>
            ))}
          </Carousel>


<div className="flex justify-center mt-12 space-x-2">
            {upcomingEventsList.map((_, index) => (
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

<div className='w-full flex justify-center items-center'>
              <Link href={'/assets/file/download.pdf'} download="download.pdf" className='px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>Download</h1></Link>

            </div>
        </div>
  )
}

export default UpcomingEventsComp