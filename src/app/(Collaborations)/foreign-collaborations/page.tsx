import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import Heading from '@/components/UI/Title/Heading'
import { foreignCollaborationsList, foreignCollaborationsList2, foreignCollaborationsMulti } from '@/constants/data/collaborations/foreignCollaborations'
import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import Carousel from '@/components/UI/Carousel/Carousel'

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
      <div className='space-y-5 flex flex-col justify-center items-center border border-[#4970b3] px-2 py-5'>
 <Heading line1={'MoU with the VNU University of Economics and Business, Vietnam'} className='text-center max-w-4xl' />
<video       
                        className="w-full max-w-[500px] h-full object-cover bg-red-50 border border=zinc-400"
                        preload="metadata"
                        poster={''}
                        controls
                        style={{ outline: 'none' }}
                        src={'/assets/videos/foreign-collaborations/1732599714344.mp4'}
                      >
                      </video>


      </div>
    </div>

    <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-5'>
    
    
    {
        foreignCollaborationsMulti.map((item,i)=>(
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

    <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-5'>
         {
            foreignCollaborationsList2.map((item,i)=>(
                 <div key={i} className='space-y-5 flex flex-col justify-start items-start border border-[#4970b3] p-2 md:p-5'>

<img src={item.logo} alt={item.title} loading='lazy' className='w-[150px] md:w-[200px]' />
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