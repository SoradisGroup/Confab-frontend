import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import ConferenceDetailsComponent3 from '@/components/Shared/Events/ConferenceDetailsComp3'
import React from 'react'

const CECI = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='CIECI & ICFBE 2026'/>
    <ConferenceDetailsComponent3/>
    </>
  )
}

export default CECI