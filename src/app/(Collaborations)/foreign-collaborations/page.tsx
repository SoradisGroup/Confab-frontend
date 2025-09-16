import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import Heading from '@/components/UI/Title/Heading'
import { foreignCollaborationsList, foreignCollaborationsList2 } from '@/constants/data/collaborations/foreignCollaborations'
import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'

const ForeignCollaboration = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Foreign Collaborations'/>

    <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-5'>
{
    foreignCollaborationsList.map((item,i)=>(
          <div key={i} className='space-y-5 flex flex-col justify-center items-center border border-[#4970b3] p-3'>
            {
              item.logo && (
                <img src={item.logo} alt={item.title} loading='lazy' className='w-[300px]' />
              )
            }
            <Heading line1={item.title} className='text-center max-w-4xl' />
            <div>
                <img src={item.images} alt={item.title} loading='lazy' />
            </div>
          </div>
    ))
}
    </div>

    <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-5'>
         {
            foreignCollaborationsList2.map((item,i)=>(
                 <div key={i} className='space-y-5 flex flex-col justify-start items-start border border-[#4970b3] p-2 md:p-5'>

<img src={item.logo} alt={item.title} loading='lazy' className='w-[300px]' />
<Heading line1={item.title} className='text-center ' />

{
                item.infoList && 
                <div className='space-y-5 '>
                {
                    item.infoList.map((item,i)=>(
                        <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                       
                    ))
                }
            </div>
            }

            {
                item.desc && <p key={i} className='text-md text-start italic'>{item.desc}</p>
            }

            {
              item.images && 
              (
                 <div className='max-w-[500px]'>
                <img src={item.images} alt={item.title} loading='lazy' className='w-full object-content' />
                  </div>
              )
            }

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

export default ForeignCollaboration