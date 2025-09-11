
'use client';

import React, { useState } from 'react';
import { Carousel, Button } from 'antd';
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import Link from 'next/link';

const AdvisoryBoardComp = () => {
  const [showAll, setShowAll] = useState(false);

  // Advisory board members data
  const advisoryMembers = [
    {
      id: 1,
      name: "Prof. Joe Houghton",
      title: "Program Director, Project Management UCD Michael Smurfit Graduate Business School Dublin",
      image: "/assets/images/home/Joe-Houghton-1.webp",
      alt: "Prof. Joe Houghton"
    },
    {
      id: 2,
      name: "Dr. Ahmad Rasmi Albatta",
      title: "Associate Professor, Postgraduate Coordinator, Postgraduate Coordinator, Graduate School of Management,",
      image: "/assets/images/home/Dr.-Ahmad-Rasmi-Albatta.webp",
      alt: "Dr. Ahmad Rasmi Albatta"
    },
    {
      id: 3,
      name: "Dr. Jack Reardon",
      title: "Founding Editor, International Journal of Pluralism and Economics Education. Senior Lecturer,",
      image: "/assets/images/home/Dr.-Jack-Reardon.webp",
      alt: "Dr. Jack Reardon"
    },
    {
      id: 4,
      name: "Prof. (Dr.) Alok Satsangi",
      title: "Director, NSHM Knowledge Campus, Durgapur, West Bengal",
      image: "/assets/images/home/aalok.webp",
      alt: "Prof. (Dr.) Alok Satsangi"
    },
    {
      id: 5,
      name: "Dr. Sarah Williams",
      title: "Dean of Research, Oxford Business School, United Kingdom",
      image: "/assets/images/home/",
      alt: "Dr. Sarah Williams"
    },
    {
      id: 6,
      name: "Prof. Michael Chen",
      title: "Head of Innovation, MIT Sloan School of Management, Boston",
      image: "/assets/images/home/",
      alt: "Prof. Michael Chen"
    },
    {
      id: 7,
      name: "Dr. Maria Rodriguez",
      title: "Senior Research Fellow, Harvard Kennedy School, Cambridge",
      image: "/assets/images/home/",
      alt: "Dr. Maria Rodriguez"
    },
    {
      id: 8,
      name: "Prof. David Thompson",
      title: "Director of Executive Education, INSEAD, France",
      image: "/assets/images/home/",
      alt: "Prof. David Thompson"
    }
  ];

  const displayedMembers = showAll ? advisoryMembers : advisoryMembers.slice(0, 4);


  return (
    <div className="advisory-board w-full bg-[#EFEFEF] py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
<Title title='ADVISORY BOARD' />
<Heading line1='Our People'/>

          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            The Executive Search industry's most seasoned consultants, bringing an agile mindset, an empathetic perspective and an entrepreneurial spirit to every client engagement.
          </p>
        </div>

        {/* Desktop Grid View */}
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {displayedMembers.map((member) => (
              <div 
                key={member.id} 
                className="group overflow-hidden flex flex-col justify-start items-center p-6 gap-3"
              >
                <div className="w-[250px] h-[250px] border overflow-hidden bg-white">
                  <img
                    src={member.image}
                    alt={member.alt}
                    loading='lazy'
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                  <h4 className="text-lg font-semibold text-[#1c2834] text-center">
                    {member.name}
                  </h4>
                  <p className="w-full text-sm text-[#1c2834] text-center">
                    {member.title}
                  </p>
                
              </div>
            ))}
          </div>

          {/* View More Button */}
          {/* {!showAll && advisoryMembers.length > 4 && ( */}
            <div className="w-full flex justify-center items-center  ">
              <Link href={'/advisory-board'} type='button' className='flex w-fit px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>View More</h1></Link>
            </div>
        {/*    )} */}

          {/* Carousel dots indicator */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(advisoryMembers.length / 4) }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === 0 ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}
        

        {/* Mobile/Tablet Carousel View */}
        {/* <div className="lg:hidden">
          <Carousel {...carouselSettings}>
            {advisoryMembers.map((member) => (
              <div key={member.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {member.name}
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {member.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div> */}

        {/* Custom CSS for carousel dots */}
        <style jsx global>{`
          .advisory-board .ant-carousel .ant-carousel-dots {
            bottom: -50px;
          }
          
          .advisory-board .ant-carousel .ant-carousel-dots li {
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }
          
          .advisory-board .ant-carousel .ant-carousel-dots li button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #d1d5db;
            border: none;
            opacity: 1;
          }
          
          .advisory-board .ant-carousel .ant-carousel-dots li.ant-carousel-dots-active button {
            background: #f97316;
          }
          
          .advisory-board .ant-carousel .ant-carousel-dots li:hover button {
            background: #f97316;
            opacity: 0.8;
          }
        `}</style>
      </div>
  );
};

export default AdvisoryBoardComp;