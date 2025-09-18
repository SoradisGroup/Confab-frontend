import HomeBanner from "@/components/Layout/Banner/HomeBanner";
import ContactFooter from "@/components/Layout/Footer/ContactFooter";
import Footer from "@/components/Layout/Footer/Footer";
import AdvisoryBoardComp from "@/components/Shared/AdvisoryBoardComp";
import AssociatePartnersComp from "@/components/Shared/AssociatePartnersComp";
import CorporateMeetingComp from "@/components/Shared/CorporateMeetingComp";
import EventImageComp from "@/components/Shared/EventImageComp";
import RecentUpdatesComp from "@/components/Shared/RecentUpdatesComp";
import TestimonialsComp from "@/components/Shared/TestimonialsComp";
import AutoPlayVideo from "@/components/Shared/Testing";
import TrainingAndWorkshopsComp from "@/components/Shared/TrainingAndWorkshopsComp";
import UpcomingEventsComp from "@/components/Shared/UpcomingEventsComp";
import VideoTestimonialsComp from "@/components/Shared/VideoTestimonialsComp";
import WhatMakesDifferentComp from "@/components/Shared/WhatMakesDifferentComp";
import WhoWeAreComp from "@/components/Shared/WhoWeAreComp";
import Heading from "@/components/UI/Title/Heading";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function Home() {

const AICTECollabLinks = [
  {
    key:1,
    title:'Research Writing and Case Development Training Program',
    link:'https://neat.aicte-india.org/course-details/NEAT20222056_PROD_4'
  },
   {
    key:2,
    title:'Artificial Intelligence- Based Faculty Training Program',
    link:'https://neat.aicte-india.org/b2b-course-details/NEAT20222056_PROD_10'
  },
   {
    key:3,
    title:'Student Assessment Training Program',
    link:'https://neat.aicte-india.org/b2b-course-details/NEAT20222056_PROD_2'
  },


]


  return (
    <>
      {/* <div className="bg-black h-screen w-full flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">
        Welcome to My Portfolio
      </h1>
    </div> */}
      <HomeBanner />
      <UpcomingEventsComp />

<div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto flex flex-col justify-center items-center gap-5">
   <Heading line1='Courses in collaboration with AICTE-NEAT'/>
<div className='flex flex-col gap-5'>
          {
            AICTECollabLinks.map((item,i)=>(
              <Link key={i} href={item.link} target='_blank' className='group px-3 py-2 border border-[#4970b3] rounded-xl flex justify-start items-center gap-3 cursor-pointer hover:bg-[#4970b3]/20 transition duration-300 ease-in-ou'>
           <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#4970b3] shadow-lg ring-4 ring-white flex-shrink-0`}>
                 <FaLink className="w-6 h-6 text-white" />
            </div>
          <h1 className='text-[15px] md:text-[18px]'>{item.title}</h1>
          </Link>
            ))
          }
         </div>
</div>

      
      <EventImageComp />
      <RecentUpdatesComp />
      <WhoWeAreComp />
      <TrainingAndWorkshopsComp />
      <CorporateMeetingComp />
      <WhatMakesDifferentComp />
      <AdvisoryBoardComp />
      <TestimonialsComp />
      <VideoTestimonialsComp/>
      <AssociatePartnersComp />
      <ContactFooter />
    </>
  );
}
