// import HeadBanner from '@/components/Layout/Banner/HeadBanner'
// import Navbar from '@/components/Layout/Header/Navbar'
// import React from 'react'

// const Gallery = () => {
//   return (
//     <>
//     <Navbar/>
//     <HeadBanner title='Our Gallery'/>
//     </>
//   )
// }

// export default Gallery

'use client'
import HeadBanner from '@/components/Layout/Banner/HeadBanner';
import Navbar from '@/components/Layout/Header/Navbar';
import Carousel from '@/components/UI/Carousel/Carousel';
import { GalleryList } from '@/constants/data/gallery/galleryInfo';
import React from 'react';
import { GoDotFill } from 'react-icons/go';


const EventsGallery = () => {

  return (
    <>
    <Navbar/>
    <HeadBanner title='Our Gallery'/>
    <div className='py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto flex flex-col gap-5'>
        <div className="space-y-6">
          {GalleryList.map((event, index) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                
                {/* Event Information Column */}
                <div className="p-5 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-[#f27521] text-white text-sm font-semibold rounded-full mb-4">
                      EVENT {index + 1}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold leading-tight ">
                      {event.title}
                    </h2>
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
                
                {/* Carousel Column */}
                <div className="relative">
                  <Carousel autoplay={true}>
                    {event.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="w-full h-[400px] lg:h-full">
                        <img
                          src={image}
                          alt={`${event.title} - Image ${imgIndex + 1}`}
                          loading='lazy'
                          className="w-full  object-cover "
                        />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
                        {/* <div className="absolute bottom-4 left-4 text-white">
                          <span className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                            {imgIndex + 1} / {event.images.length}
                          </span>
                        </div> */}
                      </div>
                    ))}
                  </Carousel>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default EventsGallery;