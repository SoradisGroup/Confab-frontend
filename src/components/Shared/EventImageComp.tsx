'use client'

import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef, useState } from 'react'

const EventImageComp = () => {

    const carouselRef = useRef<CarouselRef>(null);
        
    const [currentSlide, setCurrentSlide] = useState<number>(0);

const AICTEList = [
     {
      id: 1,
      image: "/assets/images/AICTEAndMEPSC/AICTE1.jpg",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/AICTEAndMEPSC/1752608188352-768x576.jpg",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/AICTEAndMEPSC/1752608188232-e1752917177189-768x541.jpg",
      title: ""
    },
    {
      id: 4,
      image: '/assets/images/AICTEAndMEPSC/1752608190336-e1752917143802-768x701.jpg',
      title:''
    },
    {
      id: 5,
      image: '/assets/images/AICTEAndMEPSC/1752608187866-768x456.jpg',
      title:''
    },
    {
      id:6,
      image:'/assets/images/AICTEAndMEPSC/1752608188086-e1753001905685-768x830.jpg',
      title:''
    }

] 

const MEPSCList = [
      {
      id: 1,
      image: "/assets/images/AICTEAndMEPSC/wp-content/uploads/2025/07/1-1-768x576.jpeg",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/AICTEAndMEPSC/2-1-768x576.jpeg",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/AICTEAndMEPSC/4-1-768x576.jpeg",
      title: ""
    },
    {
      id: 4,
      image: "/assets/images/AICTEAndMEPSC/3-1-768x576.jpeg",
      title: ""
    },
    {
      id: 5,
      image: "/assets/images/AICTEAndMEPSC/",
      title: ""
    },
] 

const MoUsignedList = [
       {
      id: 1,
      image: "/assets/images/AICTEAndMEPSC/wp-content/uploads/2025/07/1-1-768x576.jpeg",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/AICTEAndMEPSC/2-1-768x576.jpeg",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/AICTEAndMEPSC/4-1-768x576.jpeg",
      title: ""
    },
    {
      id: 4,
      image: "/assets/images/AICTEAndMEPSC/3-1-768x576.jpeg",
      title: ""
    },
    {
      id: 5,
      image: "/assets/images/AICTEAndMEPSC/",
      title: ""
    },
] 

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
 <div className="testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto space-y-5">
    <div className='space-y-5'>
        <h1 className='text-xl md:text-2xl text-center'>
All India Council of Technical Education (AICTE) Signed MoU with Confab 360 Degree</h1>


<div className="relative">
          <Carousel ref={carouselRef} {...carouselSettings} >
            {AICTEList.map((items) => (
              <div key={items.id} className="px-4 flex justify-center items-center">
                <div className="max-w-[650px] h-full bg-white overflow-hidden">
                      <img
                        src={items.image}
                        alt={items.title}
                        loading='lazy'
                        className="w-full h-full  object-cover border"
                      />
                    </div>
              </div>
            ))}
          </Carousel>




        </div>


    </div>

    <div className='space-y-5'>
        <h1 className='text-xl md:text-2xl text-center'>
Management & Entrepreneurship and Professional Skills Council (MEPSC) Signed MoU with Confab 360 Degree</h1>


<div className="relative">
          <Carousel ref={carouselRef} {...carouselSettings} >
            {AICTEList.map((items) => (
              <div key={items.id} className="px-4 flex justify-center items-center">
                <div className="max-w-[650px] h-full bg-white overflow-hidden">
                      <img
                        src={items.image}
                        alt={items.title}
                        loading='lazy'
                        className="w-full h-full  object-cover border"
                      />
                    </div>
              </div>
            ))}
          </Carousel>




        </div>


    </div>

     

<div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 relative gap-5 md:gap-0' >

 <div className='space-y-5'>
        <h1 className='text-xl md:text-2xl text-center'>MoU signed with Vietnam National University, Hanoi</h1>


<div className="relative">
          <Carousel ref={carouselRef} {...carouselSettings} >
            {MoUsignedList.map((items) => (
              <div key={items.id} className="px-4 justify-center items-center">
                <div className="w-full h-full bg-white overflow-hidden">
                      <img
                        src={items.image}
                        alt={items.title}
                        loading='lazy'
                        className="w-full h-full  object-cover border"
                      />
                    </div>
              </div>
            ))}
          </Carousel>




        </div>


    </div>

<div className='space-y-5 flex flex-col justify-center items-center'>

   <h1 className='text-xl md:text-2xl text-center text-[#3974b6]'>Proudly ISO 9001:2015 Certified (Quality Management System)</h1>

<div className="max-w-[350px] h-full bg-white overflow-hidden">
                      <img
                        src={"/assets/images/home/QualityManagementSystemCertificate.jpg"}
                        alt={""}
                        loading='lazy'
                        className="w-full h-full  object-cover border"
                      />
                    </div>

</div>



</div>

 </div>

  )
}

export default EventImageComp