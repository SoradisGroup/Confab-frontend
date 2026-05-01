import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import ConferenceDetailsComponent from '@/components/Shared/Events/ConferenceDetailsComp'
import React from 'react'

const ITNSSEM = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='ITNSSEM Conference'/>
    <ConferenceDetailsComponent/>
    </>
  )
}

export default ITNSSEM