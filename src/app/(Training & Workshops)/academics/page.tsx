'use client'

import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import AcademicFeatureComp from '@/components/Shared/TrainingAndWorkshop/AcademicFeatureComp'
import EventCarouselComp from '@/components/Shared/TrainingAndWorkshop/EventCarouselComp'
import Heading from '@/components/UI/Title/Heading'
import { academicTrainingList } from '@/constants/data/academics/academicTrainingList'
import { CarouselRef } from 'antd/es/carousel'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { FaLink } from 'react-icons/fa'

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


    return (
      <>
      <Navbar/>
      <HeadBanner title='Training (Academics & Research)'/>


      {
        academicTrainingList.map((item,i)=>(
                  <div key={i} className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>

      <Heading line1={item.title} className='text-center' />

      {
        item.eventList && (
          <div className='flex flex-col justify-center items-center gap-1'>
        {
          item?.eventList?.map((event,i)=>(
            <h1 key={i} className='text-md md:text-lg font-[600]'>{event.name}</h1>
          ))
        }
      </div>
        )
      }


      {/* Testimonials Carousel */}
      {item.eventImages && <EventCarouselComp images={item.eventImages} />}

      </div>
        ))
      }


      <div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
         <Heading line1={"Courses in collaboration with AICTE-NEAT"} className='text-center' />

         <div className='flex flex-col gap-5'>
          <Link href='https://neat.aicte-india.org/course-details/NEAT20222056_PROD_4' target='_blank' className='group px-3 py-2 border border-[#4970b3] rounded-xl flex justify-start items-center gap-3 cursor-pointer hover:bg-[#4970b3]/20'>
          
           <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#4970b3] shadow-lg ring-4 ring-white flex-shrink-0`}>
                 <FaLink className="w-6 h-6 text-white" />
            </div>
          
          <h1 className='text-[15px] md:text-[18px]'>Research Writing and Case Development Training Program</h1>
          
          </Link>

           <Link href='https://neat.aicte-india.org/b2b-course-details/NEAT20222056_PROD_10' target='_blank' className='px-3 py-2 border border-[#4970b3] rounded-xl flex justify-start items-center gap-3 cursor-pointer hover:bg-[#4970b3]/20'>
          
           <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#4970b3] shadow-lg ring-4 ring-white flex-shrink-0`}>
                 <FaLink className="w-6 h-6 text-white" />
            </div>
          
          <h1 className='text-[15px] md:text-[18px]'>Artificial Intelligence- Based Faculty Training Program</h1>
          
          </Link>
          <Link href='https://neat.aicte-india.org/b2b-course-details/NEAT20222056_PROD_2' target='_blank' className='px-3 py-2 border border-[#4970b3] rounded-xl flex justify-start items-center gap-3 cursor-pointer hover:bg-[#4970b3]/20'>
          
           <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#4970b3] shadow-lg ring-4 ring-white flex-shrink-0`}>
                 <FaLink className="w-6 h-6 text-white" />
            </div>
          
          <h1 className='text-[15px] md:text-[18px]'>Student Assessment Training Program</h1>
          
          </Link>
         </div>

      </div>



      <AcademicFeatureComp/>

      </>
    )
  }

// const Academics = () => {
//   const [currentSlides, setCurrentSlides] = useState<number[]>([]); 
//   const carouselRefs = useRef<CarouselRef[]>([]);

//   const carouselSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   const handleAfterChange = (itemIndex: number, current: number) => {
//     setCurrentSlides(prev => {
//       const copy = [...prev];
//       copy[itemIndex] = current;
//       return copy;
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <HeadBanner title="Training (Academics & Research)" />

//       {academicTrainingList.map((item, i) => (
//         <div
//           key={i}
//           className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5"
//         >
//           <Heading line1={item.title} className="text-center" />

//           {item.eventList && (
//             <div className="flex flex-col justify-center items-center gap-1">
//               {item?.eventList?.map((event, idx) => (
//                 <h1 key={idx} className="text-md md:text-lg font-[600]">
//                   {event.name}
//                 </h1>
//               ))}
//             </div>
//           )}

//           {item.eventImages && (
//             <div className="relative w-full">
//               <Carousel ref={(el) => { carouselRefs.current[i] = el!; }}
//                 afterChange={(current) => handleAfterChange(i, current)}
//                 {...carouselSettings}
//               >
//                 {item?.eventImages?.map((img, idx) => (
//                   <div key={idx} className="w-full h-full px-0 md:px-2">
//                     <img
//                       src={img.image}
//                       alt={img.name}
//                       loading="lazy"
//                       className="w-full h-full object-cover border"
//                     />
//                   </div>
//                 ))}
//               </Carousel>

//               {/* Custom Dots */}
//               <div className="flex justify-center mt-12 space-x-2">
//                 {item?.eventImages?.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => carouselRefs.current[i]?.goTo(index)}
//                     className={`
//                       w-2 h-2 rounded-full transition-all duration-300
//                       ${
//                         index === (currentSlides[i] ?? 0)
//                           ? "bg-[#f27521] scale-125"
//                           : "border border-gray-300 bg-white hover:bg-gray-400"
//                       }
//                     `}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       ))}

//       <AcademicFeatureComp />
//     </>
//   );
// };





export default Academics