import HomeBanner from "@/components/Layout/Banner/HomeBanner";
import ContactFooter from "@/components/Layout/Footer/ContactFooter";
import Footer from "@/components/Layout/Footer/Footer";
import AdvisoryBoardComp from "@/components/Shared/AdvisoryBoardComp";
import AssociatePartnersComp from "@/components/Shared/AssociatePartnersComp";
import CorporateMeetingComp from "@/components/Shared/CorporateMeetingComp";
import EventImageComp from "@/components/Shared/EventImageComp";
import RecentUpdatesComp from "@/components/Shared/RecentUpdatesComp";
import TestimonialsComp from "@/components/Shared/TestimonialsComp";
import TrainingAndWorkshopsComp from "@/components/Shared/TrainingAndWorkshopsComp";
import UpcomingEventsComp from "@/components/Shared/UpcomingEventsComp";
import VideoTestimonialsComp from "@/components/Shared/VideoTestimonialsComp";
import WhatMakesDifferentComp from "@/components/Shared/WhatMakesDifferentComp";
import WhoWeAreComp from "@/components/Shared/WhoWeAreComp";


export default function Home() {
  return (
    <>
    {/* <div className="bg-black h-screen w-full flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">
        Welcome to My Portfolio
      </h1>
    </div> */}
    <HomeBanner/>
    <UpcomingEventsComp/>
    <EventImageComp/>
    <RecentUpdatesComp/>
    <WhoWeAreComp/>
    <TrainingAndWorkshopsComp/>
    <CorporateMeetingComp/>
    <WhatMakesDifferentComp/>
    <AdvisoryBoardComp/>
    <TestimonialsComp/>
    {/* <VideoTestimonialsComp/> */}
    <AssociatePartnersComp/>
    <ContactFooter/>
    </>
  );
}
