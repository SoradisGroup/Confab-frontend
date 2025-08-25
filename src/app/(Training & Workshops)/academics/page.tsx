'use client'

import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import AcademicFeatureComp from '@/components/Shared/TrainingAndWorkshop/AcademicFeatureComp'
import Heading from '@/components/UI/Title/Heading'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import React, { useRef, useState } from 'react'

const Academics = () => {

const carouselRef = useRef<CarouselRef>(null);

const [currentSlide, setCurrentSlide] = useState<number>(0);

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

    const handleAfterChange = (current: number) => {
    setCurrentSlide(current)
  }

  const AcademicsEventImage = [
    {
        key:1,
        name:'',
        image:'/assets/images/academic/1-6.webp'
    },
    {
        key:2,
        name:'',
        image:'/assets/images/academic/2-5.webp'
    },
    {
        key:3,
        name:'',
        image:'/assets/images/academic/1-6.webp'
    },
    
  ]

  return (
    <>
    <Navbar/>
    <HeadBanner title='Academics'/>

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>

     <Heading line1="Campus to Corproate Training (for post-graduate students) at Manipal Academy of Higher Education, Manipal" className='text-center' />

     <div className='flex flex-col justify-center items-center gap-1'>
       <h1 className='text-md md:text-lg font-[600]'>2nd to 4th September'2024 (Batch 1)</h1>
       <h1 className='text-md md:text-lg font-[600]'>5th to 7th September'2024 (Batch 2)</h1>
       <h1 className='text-md md:text-lg font-[600]'>16th to 19th September'2024 (Batch 3)</h1>
     </div>


    {/* Testimonials Carousel */}
        <div className="relative w-full">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {AcademicsEventImage.map((item,i) => (
              <div key={i} className="w-full h-full">
                <img
                        src={item.image}
                        alt={item.name}
                        loading='lazy'
                        className="w-full h-full object-cover border"
                      />
              </div>
            ))}
          </Carousel>


<div className="flex justify-center mt-12 space-x-2">
            {AcademicsEventImage.map((_, index) => (
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

    <AcademicFeatureComp/>

    </>
  )
}

export default Academics