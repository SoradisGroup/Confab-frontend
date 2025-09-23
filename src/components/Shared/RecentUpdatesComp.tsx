'use client'

import React, { useRef, useState } from 'react'
import Title from '../UI/Title/Title'
import Heading from '../UI/Title/Heading'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'

const RecentUpdatesComp = () => {

const carouselRef = useRef<CarouselRef>(null);
    
const [currentSlide, setCurrentSlide] = useState<number>(0);

const recentUpdateList = [
     {
      id: 1,
      image: "/assets/images/recent/MoU-AKPD.jpg",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/recent/MoU-STC.jpg",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/recent/MoU-MGU.jpg",
      title: ""
    },
     {
      id: 4,
      image: "/assets/images/recent/MoU-University-of-Bosawa-scaled.jpg",
      title: ""
    },
    {
      id: 5,
      image: "/assets/images/recent/After-MoU-MEPSC-scaled.jpg",
      title: ""
    },
      {
      id: 6,
      image: "/assets/images/recent/ISO-Certificate-2.jpg",
      title: ""
    },
    {
      id: 7,
      image: "/assets/images/recent/page-2.webp",
      title: ""
    },
      {
      id: 8,
      image: "/assets/images/recent/MPESC-Certificate.jpg",
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
          <Title title='Recent Updates'/>
          <Heading line1='Latest Happenings'/>
        </div>

 <div className="relative">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {recentUpdateList.map((items) => (
              <div key={items.id} className="px-4 !flex justify-center items-center">
                   <div className="max-w-[350px] max-h-[350px] bg-white overflow-hidden">
                      <img
                        src={items.image}
                        alt={items.title}
                        loading='lazy'
                        className="w-full h-full object-cover border"
                      />
                    </div>
                    {/* <p className='text-sm text-center'>{items.title} hello</p> */}
              </div>
            ))}
          </Carousel>


<div className="flex justify-center mt-12 space-x-2">
            {recentUpdateList.map((_, index) => (
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

export default RecentUpdatesComp