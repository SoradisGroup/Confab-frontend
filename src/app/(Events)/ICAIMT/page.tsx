import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import ConferenceDetailsComponent2 from '@/components/Shared/Events/ConferenceDetailsComp2'
import React from 'react'

const ICAIMT = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='ICAIMT 2026'/>
    <ConferenceDetailsComponent2/>
    </>
  )
}

export default ICAIMT