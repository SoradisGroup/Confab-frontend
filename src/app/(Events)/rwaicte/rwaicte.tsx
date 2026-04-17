
'use client'
import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import MegaConferenceDetailsComp from '@/components/Shared/Events/MegaConferenceDetailsComp'
import react from 'react'
const page = () => {
    return (
<>
      <Navbar />
      <HeadBanner title="Research Writing and Case Development Program" />

    <MegaConferenceDetailsComp />

</>
    )
}
export default page