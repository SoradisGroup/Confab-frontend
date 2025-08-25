import Heading from '@/components/UI/Title/Heading'
import Title from '@/components/UI/Title/Title'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const OurTeam = () => {
  return (
    <div className="advisory-board w-full bg-[#EFEFEF] py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0'>

            <div className='w-full flex flex-col justify-center items-center gap-3'>
                <Title title='Professionals only'/>
                <Heading line1='Our Team'/>
            </div>

            <div className='w-full flex flex-col justify-center md:justify-start items-center md:items-start gap-3'>
                <img src="/assets/images/corporateTraining/Dr.srilata-1.webp" alt="" className='max-w-[300px]' />
                <h1 className='text-xl font-[700] text-center'>Dr. Srilalitha, P.h.D (International Business)</h1>
                <div className='flex justify-center items-center gap-3'>
                     <Link href={'/'} className='rounded-full bg-sky-700 p-1'><FaFacebook className='text-[20px] text-white'/></Link>
                     <Link href={'/'} className='rounded-full bg-black p-1'><FaXTwitter className='text-[20px] text-white'/></Link>
                     <Link href={'/'} className='rounded-full bg-sky-600 p-1'><FaLinkedin className='text-[20px] text-white'/></Link> 
                </div>
            </div>

        </div>
    </div>
  )
}

export default OurTeam