import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import ConferenceDetailsComponent1 from '@/components/Shared/Events/ConferenceDetailsComp1'
import React from 'react'

const IMCAITCSBM = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='ICATS 2026'/>
    <ConferenceDetailsComponent1/>
    </>
  )
}

export default IMCAITCSBM