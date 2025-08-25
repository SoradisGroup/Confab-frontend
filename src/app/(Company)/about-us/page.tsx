import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import ContactFooter from '@/components/Layout/Footer/ContactFooter'
import Navbar from '@/components/Layout/Header/Navbar'
import AboutUsComp from '@/components/Shared/About us/AboutUsComp'
import JourneyComp from '@/components/Shared/About us/JourneyComp'
import MakingImpactComp from '@/components/Shared/About us/MakingImpactComp'
import ProductListComp from '@/components/Shared/About us/ProductListComp'
import WhoWeAre from '@/components/Shared/About us/WhoWeAre'
import React from 'react'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Who We Are'/>
    <AboutUsComp/>
    <WhoWeAre/>
    <JourneyComp/>
    <MakingImpactComp/>
    {/* <ProductListComp/> */}
    <ContactFooter/>
    </>
  )
}

export default AboutUs