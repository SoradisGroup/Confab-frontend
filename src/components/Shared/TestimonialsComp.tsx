'use client';

import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import { CarouselRef } from 'antd/es/carousel';

const TestimonialsComp = () => {

const carouselRef = useRef<CarouselRef>(null);

const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Dr. Monika Arora",
      position: "Professor, Amity Business School, Amity University Haryana",
      image: "/assets/images/testimonials/Dr.-Monika-Arora.webp",
      testimonial: "Confab 360 Degree is known for producing outstanding international symposiums that encourage thought-provoking discussion and cooperative efforts. I had the honor of attending their symposiums as a professor at Amity University Haryana's Amity Business School, and every time I have been impressed by the depth of debates and the caliber of speakers. Confab 360 Degree deserves praise for their dedication to planning conferences that greatly enhance academic progress and knowledge sharing."
    },
    {
      id: 2,
      name: "Dr. Rahaman Hasan",
      position: "Senior Lecturer in Global Business Chatham, England, United Kingdom",
      image: "/assets/images/testimonials/Dr.-Rahaman-Hasan.webp",
      testimonial: "With the Global Conference on Emerging Technologies, Confab 360 Degree produced an amazing event. I found the talks on sustainable enterprise, economics, tourism, healthcare, media, and education to be incredibly insightful as a Senior Lecturer in Global Business. The conference offered a useful forum for investigating cutting-edge ideas that promote environmentally friendly corporate practices and green environmental practices. Confab 360 Degree deserves praise for their excellent planning and dedication to expanding knowledge in these important fields."
    },
    {
      id: 3,
      name: "Dr. Rasheedul Haque",
      position: "Associate Professor at MAHSA University Jenjarum, Selangor, Malaysia",
      image: "/assets/images/testimonials/Rasheedul.webp",
      testimonial: "Confab 360 Degree exceeded expectations with the International Conference on Innovative Discoveries and Emerging Advancement in Applied Science (IDEAAS) 2024. The conference provided a platform for stimulating discussions and knowledge exchange, contributing significantly to advancements in applied science. Kudos to Confab 360 Degree for their impeccable organization and commitment to fostering innovation and collaboration in the scientific community"
    },
    {
      id: 4,
      name: "Dr. Gul Erkol Bayram",
      position: "Vice Dean, Tourism Faculty Sinop University, Sinop, Turkey",
      image: "/assets/images/testimonials/Dr.-Gul-Erkol-Bayram.webp",
      testimonial: "Confab 360 Degree’s hospitality and tourism management workshops were exceptional! As Vice Dean of Tourism Faculty at Sinop University, I found the sessions highly beneficial. Kudos to Confab 360 Degree for their commitment to advancing education in our field."
    },
    {
      id:5,
      name:'Dr. Prabha Kiran',
      position:'Head of the Department of Management and Marketing Westminster International University, Tashkent',
      image:'/assets/images/testimonials/Dr.-Prabha-Kiran.webp',
      testimonial:'Confab 360 Degree’s AI and ChatGPT workshops were fantastic! As a faculty member at Westminster International University in Tashkent, I found them incredibly valuable. Thanks for organizing such insightful sessions!'
    },
    {
      id:6,
      name:'Dr. Kanika Gupta',
      position:'Co-founder & Chief Academic Officer',
      image:'/assets/images/testimonials/Kanika.webp',
      testimonial:'Confab 360 Degree’s GLOBAL CONFERENCE ON Emerging Technologies was a triumph! It seamlessly brought together leaders across industries to explore how technology can drive sustainable growth. Kudos to the organizers for an inspiring event that’s shaping the future!”'
    },
    {
      id:7,
      name:'Prof. (Dr.) Alok Satsangi',
      position:'Director, NSHM Knowledge Campus, Durgapur, West Bengal, India',
      image:'/assets/images/testimonials/Prof.-Dr.-Alok-Satsangi.webp',
      testimonial:'Confab 360 Degree orchestrated a remarkable event with the GLOBAL CONFERENCE ON Emerging Technologies. As the Director of NSHM Knowledge Campus, Durgapur, I was impressed by the seamless organization and impactful discussions on sustainable entrepreneurship, economics, tourism, healthcare, media, and education. The conference truly championed green environmental practices and business growth. Kudos to Confab 360 Degree for fostering such an enlightening platform that pushes the boundaries of innovation and sustainability'
    },
    {
      id:8,
      name:'Dr. Maninder Kaur',
      position:'Director Guru Nanak Institute of Management',
      image:'/assets/images/testimonials/Dr.-Maninder-Kaur.webp',
      testimonial:'The Global Conference on Emerging Technologies, Business, Sustainable Innovative Business Practices, and Social Well-Being was a fantastic event that Confab 360 Degree masterminded. In my capacity as Director of the Guru Nanak Institute of Management, I was struck by the thoughtful conversations and cooperative attitude that pervaded the whole event. Confab 360 Degree deserves praise for promoting such a powerful conversation and bringing about such significant change.'
    }
  ];

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

  return (
    <div className="testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
          <Title title='TESTIMONIALS'/>
          <Heading line1='People say about us'/>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white border border-[#4970b3] p-8 h-full">
                  {/* Profile Section */}
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading='lazy'
                        className="w-16 h-16 rounded-full object-cover border"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-lg font-semibold text-[#1c2834] mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#1c2834] leading-relaxed">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="text-[#1c2834] leading-relaxed text-sm">
                    <p>{testimonial.testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          


<div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
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
  );
};

export default TestimonialsComp;