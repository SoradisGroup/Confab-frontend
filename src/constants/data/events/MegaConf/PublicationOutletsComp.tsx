import React from 'react'
import { MegaPublicationsList } from './MegaConferenceList'
import { Carousel } from 'antd'
import { useRef, useState } from "react";
import { CarouselRef } from "antd/es/carousel";

const PublicationOutletsComp = () => {

const carouselRef = useRef<CarouselRef>(null);
    
const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current)
  }

  return (
     <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
            <h1 className="text-xl md:text-2xl font-bold">Publication Opportunities</h1>
    
           <div>
             <Carousel
            ref={carouselRef}
            autoplay={true}
            autoplaySpeed={4000}
            slidesToScroll={1}
            dots={true}
            arrows={false}
            draggable={true}
            afterChange={handleAfterChange}
            >
    
              {
                MegaPublicationsList.map((item,i)=>(
    <div key={i} className="w-full !flex justify-center items-center py-5">
    
       <div className="w-fit border rounded-sm flex flex-col justify-center items-center p-3 space-y-3">
              <div className="max-w-[700px] mx-auto">
                <img src={item.image} alt="" loading="lazy" className="w-full h-full object-content"/>
              </div>
    
              <h1 className="text-md font-bold text-center">{item.title}</h1>
              {
                item.para && (
                  <p className="text-sm text-center font-bold">{item.para}</p>
                )
              }
       </div>
      
    
              </div>
                ))
              }
              
            </Carousel>
    
    <div className="flex justify-center mt-12 space-x-2">
                {MegaPublicationsList.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselRef.current?.goTo(index)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${index === currentSlide 
                        ? 'bg-[#f27521] scale-125' 
                        : 'border border-gray-300 bg-white hover:bg-gray-400'
                      }
                    `}
                    aria-label={`Go to recent Update ${index + 1}`}
                  />
                ))}
              </div>
           </div>
            
    
            {/* <p className="text-center "><span className="font-bold">Note:</span> We are in talks with other journals and proceedings.</p> */}
          </div>
  )
}

export default PublicationOutletsComp