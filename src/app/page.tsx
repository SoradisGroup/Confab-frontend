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
import WelcomeComp from "@/components/Shared/WelcomeComp";
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
      
      {/*DISCLAIMER SECTION ADDED HERE */}
  <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto flex flex-col items-center">
    <Heading 
      line1="Disclaimer" 
      className="text-lg md:text-xl font-semibold text-red-600"

/>
  <div className="mt-6 max-w-[350px] w-full">
    <img
      src="/assets/images/disclaimer.jpg"
      alt="Disclaimer"
      className="w-full h-auto rounded-lg shadow-md border"
    />
  </div>
</div>


    {/* <WelcomeComp /> */}

      <UpcomingEventsComp />

       {/* Links */}
      <div className="w-full bg-white py-16 px-5 md:px-10">
  
  {/* Heading */}
  <div className="w-full flex justify-center text-center">
    <Heading line1="Courses in collaboration with AICTE-NEAT" />
  </div>

  {/* Cards */}
  <div className="w-full max-w-[900px] mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {AICTECollabLinks.map((item, i) => (
      <Link
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          w-full
          max-w-[300px]
          aspect-square
          rounded-2xl
          border border-[#e2e8f0]
          bg-white
          flex flex-col
          items-center
          justify-center
          text-center
          px-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_12px_30px_rgba(73,112,179,0.12)]
          hover:border-[#4970b3]/40
        "
      >

        {/* Link Icon */}
        <div
          className="
            w-[60px]
            h-[60px]
            rounded-2xl
            bg-[#4970b3]
            flex
            items-center
            justify-center
            shadow-md
            transition-all
            duration-300
            group-hover:scale-105
          "
        >
          <FaLink className="w-8 h-8 text-white" />
        </div>

        {/* Course Title */}
        <h1
          className="
            mt-7
            text-[15px]
            md:text-[20px]
            font-semibold
            leading-[1.45]
            text-[#071d3b]
            text-center
            max-w-[240px]
            transition-colors
            duration-300
            group-hover:text-[#4970b3]
          "
        >
          {item.title}
        </h1>

      </Link>
    ))}
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
