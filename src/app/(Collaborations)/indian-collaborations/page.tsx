'use client'

import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import Carousel from '@/components/UI/Carousel/Carousel'
import Heading from '@/components/UI/Title/Heading'
import { IndianCollaborationsList } from '@/constants/data/collaborations/indianCollaborations'
import Link from 'next/link'
import React from 'react'

const IndianCollaboration = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Indian Collaborations'/>

    <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-5'>


{
    IndianCollaborationsList.map((item,i)=>(
<div key={i} className='space-y-5 flex flex-col justify-center items-center border border-[#4970b3] px-2 py-5'>
            {
              item.logo && (
                <img src={item.logo} alt={item.title} loading='lazy' className='w-[80px]' />
              )
            }
            <Heading line1={item.title} className='text-center max-w-4xl' />

            {
                item.paraInfo && 
                <div className='space-y-5 max-w-[800px] mx-auto'>
                {
                    item.paraInfo.map((item,i)=>(
                        <p key={i} className='text-md text-center'>{item}</p>
                    ))
                }
            </div>
            }
            
        <div className='w-full max-w-[800px] mx-auto'>
            <Carousel autoplay={false}>
                    {item.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="w-full h-full">
                        <img
                          src={image}
                          alt={`${item.title} - Image ${imgIndex + 1}`}
                          loading='lazy'
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>

        </div>
                   <div >
              <Link href={item.link} className='flex w-fit px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>View More</h1></Link>

            </div>
        </div>
    ))
}
        

    </div>
    </>
  )
}

export default IndianCollaboration