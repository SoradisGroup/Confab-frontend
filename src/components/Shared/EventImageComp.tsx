'use client'

import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef, useState } from 'react'

const EventImageComp = () => {

    const carouselRef = useRef<CarouselRef>(null);
        
    const [currentSlide, setCurrentSlide] = useState<number>(0);

const WHITECANVAS = [
     {
      id: 1,
      image: "/assets/images/AICTEAndMEPSC/WHITE-CANVAS-1.jpg",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/AICTEAndMEPSC/WHITE-CANVAS-2.jpg",
      title: ""
    },
  ]

const ONOE = [
   {
      id: 1,
      image: "/assets/images/gallery/ONOE1.webp",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/gallery/ONOE2.webp",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/gallery/ONOE3.webp",
      title: ""
    },
    {
      id: 4,
      image: "/assets/images/gallery/ONOE4.webp",
      title: ""
    },
    {
      id: 5,
      image: "/assets/images/gallery/ONOE6.webp",
      title: ""
    },
    {
      id: 6,
      image: "/assets/images/gallery/ONOE6.webp",
      title: ""
    },
]

const NortEastSubmit = [
  { id: 1, image: "/assets/images/gallery/NSE1.webp", title: "" },
  { id: 2, image: "/assets/images/gallery/NSE2.webp", title: "" },
  { id: 3, image: "/assets/images/gallery/NSE3.webp", title: "" },
  { id: 4, image: "/assets/images/gallery/NSE4.webp", title: "" },
  { id: 5, image: "/assets/images/gallery/NSE5.webp", title: "" },
  { id: 6, image: "/assets/images/gallery/NSE6.webp", title: "" },
  { id: 7, image: "/assets/images/gallery/NSE7.webp", title: "" },
  { id: 8, image: "/assets/images/gallery/NSE8.webp", title: "" },
  { id: 9, image: "/assets/images/gallery/NSE9.webp", title: "" },
  { id: 10, image: "/assets/images/gallery/NSE10.webp", title: "" },
  { id: 11, image: "/assets/images/gallery/NSE11.webp", title: "" },
  { id: 12, image: "/assets/images/gallery/NSE12.webp", title: "" },
  { id: 13, image: "/assets/images/gallery/NSE13.webp", title: "" },
  { id: 14, image: "/assets/images/gallery/NSE14.webp", title: "" },
  { id: 15, image: "/assets/images/gallery/NSE15.webp", title: "" },
  { id: 16, image: "/assets/images/gallery/NSE16.webp", title: "" },
  { id: 17, image: "/assets/images/gallery/NSE17.webp", title: "" },
  { id: 18, image: "/assets/images/gallery/NSE18.webp", title: "" },
  { id: 19, image: "/assets/images/gallery/NSE19.webp", title: "" },
  { id: 20, image: "/assets/images/gallery/NSE20.webp", title: "" },
];


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
      image: "/assets/images/AICTEAndMEPSC/1-1-768x576.jpeg",
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
] 

const MoUsignedList = [
       {
      id: 1,
      image: "/assets/images/MoUsigned/1.webp",
      title: ""
    },
    {
      id: 2,
      image: "/assets/images/MoUsigned/16.webp",
      title: ""
    },
    {
      id: 3,
      image: "/assets/images/MoUsigned/10.webp",
      title: ""
    },
    {
      id: 4,
      image: "/assets/images/MoUsigned/2.webp",
      title: ""
    },
    {
      id: 5,
      image: "/assets/images/MoUsigned/4.webp",
      title: ""
    },
     {
      id: 6,
      image: "/assets/images/MoUsigned/3.webp",
      title: ""
    },
    {
      id: 7,
      image: "/assets/images/MoUsigned/5.webp",
      title: ""
    },
    {
      id: 8,
      image: "/assets/images/MoUsigned/6.webp",
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
 <div className="testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto space-y-5">

<div className='max-w-7xl mx-auto space-y-5 border border-[#4970b3] px-2 py-5'>
        <h1 className='text-xl md:text-2xl text-center'>WHITE CANVAS INDIA Young CEO Program (@WCI YCP)</h1>


<div className="relative">
          <Carousel ref={carouselRef} {...carouselSettings} >
            {WHITECANVAS.map((items) => (
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
        <h1 className='text-xl md:text-2xl text-center'>Northeast Leadership Summit 2025</h1>


<div className="relative">
          <Carousel ref={carouselRef} {...carouselSettings} >
            {NortEastSubmit.map((items) => (
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
            {MEPSCList.map((items) => (
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
        <h1 className='text-xl md:text-2xl text-center'>One Nation One Election</h1>


<div className="relative">
          <Carousel ref={carouselRef} {...carouselSettings} >
            {ONOE.map((items) => (
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