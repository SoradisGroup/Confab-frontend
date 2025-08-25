import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import ConferenceDetailsComponent from '@/components/Shared/Events/ConferenceDetailsComp'
import React from 'react'

const ICAILIHMI = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='ICAILIHMI Conference'/>
    <ConferenceDetailsComponent/>
    </>
  )
}

export default ICAILIHMI