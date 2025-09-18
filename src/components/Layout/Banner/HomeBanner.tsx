// import React from 'react'

// const HomeBanner = () => {
//   return (
//     <div className='h-screen w-full bg-white flex justify-start items-center'>

//         <div className='space-y-6 max-w-[700px] '>

//             <h1 className='text-[70px]'>The Best Solution for<br/>Academia & Industry <br/><h3 className='text-[#f27521]'>Brazing the Gap</h3></h1>

//             <p className='text-lg'>Confab 360 Degree™️ is a globally trusted brand committed to upskilling professionals and fostering innovation. We bridge the gap between the fragmented educational and business ecosystems, aligning professionals with the evolving needs of sustainability and growth. Our mission is to empower organizations, universities, and businesses to thrive in a rapidly changing world.
// 										</p>

//         </div>

//     </div>
//   )
// }

// export default HomeBanner

"use client";

import React from "react";
import { Carousel } from "antd";
import Navbar from "../Header/Navbar";
import { bannerImages } from "@/constants/data/home/homeInfo";
import Link from "next/link";
import { IoPaperPlane } from "react-icons/io5";

const HomeBanner = () => {
  // Sample background images - replace with your actual image URLs

  return (
    <div className="relative h-screen max-w-[2000px] mx-auto overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          autoplay
          autoplaySpeed={8000}
          speed={1000}
          fade
          dots={false}
          arrows={false}
          infinite
          className="h-full w-full"
        >
          {bannerImages.map((item, index) => (
            <div key={index} className="h-screen w-full">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            </div>
          ))}
        </Carousel>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#000000] to-[#000000]/0 z-10" />
      </div>

      {/* Content Overlay */}

      <div className="relative z-20 h-full w-full flex flex-col justify-start items-center">
        <Navbar textColor="!text-[#ffffff]/60" logo="/assets/images/logo/logo2.webp" />
        <div className="relative z-20 h-full w-full flex justify-start items-center py-10 px-[20px] md:px-[70px]">
          <div className="space-y-8 md:space-y-6 max-w-[700px]  p-3 rounded-md  ">
            <h1 className="bannerTitle text-[35px] md:text-[60px]  leading-none text-[#ffffff] font-[600]">
              The Best Solution for
              <br />
              Academia & Industry <br />
              <span className="text-[#f27521]">Brazing the Gap</span>
            </h1>

            <p className="text-base md:text-lg text-[#1c2834] leading-relaxed font-[500] text-[#ffffff]/60">
              Confab 360 Degree™️ is a globally trusted brand committed to
              upskilling professionals and fostering innovation. We bridge the
              gap between the fragmented educational and business ecosystems,
              aligning professionals with the evolving needs of sustainability
              and growth. Our mission is to empower organizations, universities,
              and businesses to thrive in a rapidly changing world.
            </p>

            {/* Optional CTA Button */}
            <div>
              {/* <Link href={'/contact'} className='bannerTitle px-[40px] py-[10px] border bg-[#f27521] text-md text-white '>Get in Touch</Link> */}
              <Link
                href={"/contact"}
                type="button"
                className="hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm"
              >
                <IoPaperPlane className="h-5 w-5" />
                <h1 className="text-lg">Get in Touch</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Carousel Dots */}
      {/* <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex space-x-2'>
          {bannerImages.map((_, index) => (
            <div 
              key={index} 
              className='w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 cursor-pointer transition-all duration-300'
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HomeBanner;
