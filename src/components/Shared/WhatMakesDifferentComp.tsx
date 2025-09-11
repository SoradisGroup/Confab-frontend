'use client';

import React from 'react';
import { Button } from 'antd';
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import Link from 'next/link';

const WhatMakesDifferentComp = () => {
  const differentiators = [
    {
      id: 1,
      number: "01.",
      title: "Networking with academics"
    },
    {
      id: 2,
      number: "02.",
      title: "Latest Technologies"
    },
    {
      id: 3,
      number: "03.",
      title: "Global Conferences, MDP, FDP, Seminars etc."
    },
    {
      id: 4,
      number: "04.",
      title: "Foreign Collaborations"
    },
    {
      id: 5,
      number: "05.",
      title: "Corporate training & Mentoring"
    },
    {
      id: 6,
      number: "06.",
      title: "Quality publications (Scopus, ABDC, WOS, UGC CARE), Copyrights, IPR"
    }
  ];

  return (
    <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/assets/images/home/why-canfab-1-2.webp"
                alt="Award ceremony with HOA SEN University and ICCQD 2024"
                loading='lazy'
                className="w-full h-full object-cover border"
              />
              
              {/* University Logos Overlay */}
              {/* <div className="absolute top-4 left-4 flex flex-col space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <img
                    src="/api/placeholder/120/40"
                    alt="HOA SEN University"
                    className="h-8 object-contain"
                  />
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <img
                    src="/api/placeholder/120/40"
                    alt="ICCQD 2024"
                    className="h-8 object-contain"
                  />
                </div>
              </div> */}

              {/* Award Badge */}
              {/* <div className="absolute bottom-4 left-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                  BEST PAPER AWARD
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className='text-start space-y-2 md:space-y-4 '>
                <Title title='WHY CONFAB 360 DEGREE?'/>
                <Heading line1='What makes us different?'/>
              
            </div>

            <p className="text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>

            {/* Differentiators List */}
            <div >
              {differentiators.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-start space-x-4 group py-2 rounded-lg transition-all duration-300"
                >
                  <span className="text-[#80819a] font-semibold text-lg flex-shrink-0 transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[#1c2834] font-medium text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* About Us Button */}
            <div >
              <Link href={'/about-us'} className='flex w-fit px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>About Us</h1></Link>

            </div>
          </div>
        </div>
      </div>
  );
};

export default WhatMakesDifferentComp;