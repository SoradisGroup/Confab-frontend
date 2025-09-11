'use client';

import { Carousel } from 'antd';
import React, { useRef, useState } from 'react'
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import { CarouselRef } from 'antd/es/carousel';

const AssociatePartnersComp = () => {

    const carouselRef = useRef<CarouselRef>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);

 const partnerSlides = [
    
      {
        id: 1,
        name: "Partner 1",
        logo: "/assets/images/partner/client1-confab360.webp",
        alt: "Partner Organization 1"
      },
      {
        id: 2,
        name: "Partner 2",
        logo: "/assets/images/partner/client2-confab360.webp",
        alt: "Partner Organization 2"
      },
      {
        id: 3,
        name: "Partner 3",
        logo: "/assets/images/partner/client3-confab360.webp",
        alt: "Partner Organization 3"
      },
      {
        id: 4,
        name: "Partner 4",
        logo: "/assets/images/partner/client4-confab360.webp",
        alt: "Partner Organization 4"
      },
      {
        id: 5,
        name: "Partner 5",
        logo: "/assets/images/partner/client5-confab360.webp",
        alt: "Partner Organization 5"
      },
      {
        id: 6,
        name: "Partner 6",
        logo: "/assets/images/partner/client6-confab360.webp",
        alt: "Partner Organization 6"
      },
      {
        id: 7,
        name: "Partner 7",
        logo: "/assets/images/partner/client7-confab360.webp",
        alt: "Partner Organization 7"
      },
      {
        id: 8,
        name: "Partner 8",
        logo: "/assets/images/partner/log-no-bgd.png",
        alt: "Partner Organization 8"
      },
      {
        id: 9,
        name: "Partner 9",
        logo: "/assets/images/partner/salamanca.png",
        alt: "Partner Organization 9"
      },
      {
        id: 10,
        name: "Partner 10",
        logo: "/assets/images/partner/Manipal.png",
        alt: "Partner Organization 10"
      },
      {
        id: 11,
        name: "Partner 11",
        logo: "/assets/images/partner/dy-patil.png",
        alt: "Partner Organization 11"
      },
       {
        id: 12,
        name: "Partner 12",
        logo: "/assets/images/partner/5-410x230.png",
        alt: "Partner Organization 12"
      },
      {
        id: 13,
        name: "Partner 13",
        logo: "/assets/images/partner/6-410x230.webp",
        alt: "Partner Organization 13"
      }
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dotPosition: "bottom" as const,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
       {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    
  };

    const handleAfterChange = (current: number) => {
    setCurrentSlide(current)
  }

  // If you want to handle responsiveness, use CSS media queries or adjust the layout manually.


  return (
    <>
    <div className="w-full bg-[#EFEFEF] py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto space-y-3">
      
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
          <Title title='ASSOCIATE PARTNERS'/>
          <Heading line1="Some of the organizations"
            line2="we've worked with"/>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {partnerSlides.map((partner, slideIndex) => (
              <div key={slideIndex} > 
                <div className="flex justify-center items-center gap-8 md:gap-16 py-8">
                  
                    <div
                      key={partner.id}
                      className="flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-[200px] h-[200px]  bg-white ">
                        <img
                          src={partner.logo}
                          alt={partner.alt}
                          loading='lazy'
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* <p className="text-sm  mt-3 text-center font-medium">
                        {partner.name}
                      </p> */}
                    </div>

                 
                </div>
              </div>
            ))}
          </Carousel>

          <div className="flex justify-center mt-12 space-x-2">
            {partnerSlides.map((_, index) => (
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
                aria-label={`Go to Partner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Custom dots indicator */}
        <style jsx global>{`
          .ant-carousel .ant-carousel-dots {
            bottom: -40px;
          }
          
          .ant-carousel .ant-carousel-dots li {
            width: 12px;
            height: 12px;
          }
          
          .ant-carousel .ant-carousel-dots li button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #d1d5db;
            border: none;
            opacity: 1;
          }
          
          .ant-carousel .ant-carousel-dots li.ant-carousel-dots-active button {
            background: #f97316;
          }
          
          .ant-carousel .ant-carousel-dots li:hover button {
            background: #f97316;
            opacity: 0.8;
          }
        `}</style>
      </div>
    </>
  )
}

export default AssociatePartnersComp