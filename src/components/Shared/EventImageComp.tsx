'use client'

import { HomeEventList, MoUsignedList } from '@/constants/data/home/homeEvents';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef, useState } from 'react'

const EventImageComp = () => {

    const carouselRef = useRef<CarouselRef>(null);
        
    const [currentSlide, setCurrentSlide] = useState<number>(0);

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

  {
    HomeEventList.map((item:any,i:number)=>(
<div key={i} className='space-y-5 max-w-7xl mx-auto border border-[#4970b3] px-2 py-5'>
        {
          item.title && (<h1 className='text-xl md:text-2xl text-center font-[700]'>{item.title}</h1>)
        }


<div className="relative">
          <Carousel ref={carouselRef} {...carouselSettings} >
            {item?.events?.map((items:any) => (
              <div key={items.id} className="px-4 !flex justify-center items-center ">
                <div className="max-w-[650px] h-full bg-white overflow-hidden ">
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
    ))
  }
  

<div className='max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 relative gap-5 md:gap-5' >

 <div className='space-y-5  border border-[#4970b3] px-2 py-5'>
        <h1 className='text-xl md:text-2xl text-center font-[700]'>MoU signed with Vietnam National University, Hanoi</h1>


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

<div className='space-y-5 border border-[#4970b3] px-2 py-5 flex flex-col justify-center items-center'>

   <h1 className='text-xl md:text-2xl text-center text-[#3974b6] font-[700]'>Proudly ISO 9001:2015 Certified (Quality Management System)</h1>

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