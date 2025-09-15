import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import MegaConferenceDetailsComp from '@/components/Shared/Events/MegaConferenceDetailsComp'
import { MegeEventList } from '@/constants/data/events/upcomingEvent'
import { Carousel } from 'antd'
import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { LuCalendar } from 'react-icons/lu'

const DubaiMegeConference = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Mega Dubai Conference - 2025'/>

    {/* <div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
        
        <div className="space-y-6">
          {MegeEventList.map((event, index) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                
           
                <div className="p-5 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="space-y-5">
                    

                    {
                        event.title && (
                            <h2 className="text-2xl lg:text-3xl font-bold leading-tight ">
                      {event.title}
                    </h2>
                        )
                    }

  {
    event.event && (
        <div className='flex flex-col gap-3'>
             {
                event.event.map((item,i)=>(
                    <div key={i} className='flex flex-col gap-3'>
                        <Link href={item.link} className='text-lg font-[700] bannerTitle'>{item.title}</Link>
                        {
                            item.date && (
                                <p className='text-md flex justify-start items-start gap-2'><LuCalendar className='flex-shrink-0 text-[18px] mt-1 text-[#f27521]'/>{item.date}</p>
                            )
                        }
                    </div>
                ))
             }
        </div>
    )
  }

                    {
                        event.info && 
                        <p className='text-md
                         mt-4'>{event.info}</p>
                    }
                    {
                    
                    event.pointList &&
                                        event.pointList.map((item,i)=>(
                                             <p key={i} className='text-md flex justify-start items-start gap-2 mt-4'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                                        ))
                                    }
                    
                  </div>
                </div>
                
               
                <div className="relative flex items-center justify-center w-full h-full p-5">
                  <div className="flex items-center justify-center">
                    <Carousel autoplay={true} className="max-w-[350px]">
                      {event.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="flex items-center justify-center">
                          <div className="flex items-center justify-center p-2">
                            <img
                              src={image}
                              alt={`${event.title} - Image ${imgIndex + 1}`}
                              loading='lazy'
                              className="w-[300px] min-h-[350px] object-cover rounded-sm shadow-md"
                            />
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div> */}

    <MegaConferenceDetailsComp/>
    </>
  )
}

export default DubaiMegeConference