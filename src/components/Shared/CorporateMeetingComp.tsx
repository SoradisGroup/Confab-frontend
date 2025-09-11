'use client'

import React, { useRef, useState } from 'react'
import Title from '../UI/Title/Title'
import Heading from '../UI/Title/Heading'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'

const CorporateMeetingComp = () => {

const carouselRef = useRef<CarouselRef>(null);
    
const [currentSlide, setCurrentSlide] = useState<number>(0);


const CorporateMeetingList = [
     {
      id: 1,
      image: "/assets/images/home/internationalSymposium2-confab360.webp",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/home/internationalSymposium3-confab360.webp",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/home/internationalSymposium4-confab360.webp",
      title: ""
    },
    {
      id: 4,
      image: "/assets/images/home/internationalSymposium5-confab360.webp",
      title: ""
    },
     {
      id: 5,
      image: "/assets/images/home/internationalSymposium6-confab360.webp",
      title: ""
    },
     {
      id: 6,
      image: "/assets/images/home/internationalSymposium7-confab360.webp",
      title: ""
    },
     {
      id: 7,
      image: "/assets/images/home/internationalSymposium1-confab360.webp",
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
        breakpoint: 1217,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 860,
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
          <Title title='Corporate Meeting'/>
          <Heading line1='International Symposium on Indo-Vietnam Foreign Trade and Business with Vietnam delegation'/>
        </div>


        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {CorporateMeetingList.map((items) => (
              <div key={items.id} className="px-4 flex justify-center items-center">
                   <div className="w-[350px] h-[250px] rounded-xl bg-white overflow-hidden">
                      <img
                        src={items.image}
                        alt={items.title}
                        loading='lazy'
                        className="w-full h-full  object-cover border"
                      />
                    </div>
                    {/* <p className='text-sm text-center'>{items.title} hello</p> */}
              </div>
            ))}
          </Carousel>


<div className="flex justify-center mt-12 space-x-2">
            {CorporateMeetingList.map((_, index) => (
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
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>

        </div>

  )
}

export default CorporateMeetingComp