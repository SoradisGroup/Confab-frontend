import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import { pastEventList } from '@/constants/data/events/pastEventInfo'
import Carousel from '@/components/UI/Carousel/Carousel'
import React from 'react'

const PastEvent = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Past Events' />
    <div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
<div className="grid lg:grid-cols-2 gap-8">
          
          {
            pastEventList.map((item,i)=>(
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-[#4970b3]/20 overflow-hidden">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-6 border-b border-[#4970b3]/20">
              <h2 className="text-xl font-[600]">
                {item.title}</h2>
            </div>

            {/* <div className='p-3 md:p-6'>
                <img src={item.image} alt="" loading='lazy' className='w-full object-content rounded-sm border' />
            </div> */}


{/* Carousel Column - FIXED */}
                <div className="relative flex items-center justify-center w-full h-full p-3 md:p-6">
                  <div className="flex items-center justify-center">
                    <Carousel autoplay={true}>
                      {item.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="flex items-center justify-center ">
                          <img
                            src={image}
                            alt={`${item.title} - Image ${imgIndex + 1}`}
                            loading='lazy'
                            className="w-full object-cover border rounded-sm"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>


            </div>
            ))
          }
          

            </div>

    </div>

    </>
    

  )
}

export default PastEvent