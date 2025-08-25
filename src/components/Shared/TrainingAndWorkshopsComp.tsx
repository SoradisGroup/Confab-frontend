import React from 'react'
import Title from '../UI/Title/Title'
import Heading from '../UI/Title/Heading'
import { LuArrowUpRight } from 'react-icons/lu'
import Link from 'next/link'

const TrainingAndWorkshopsComp = () => {

const TrainingAndWorkshopList = [
    {
         id: 1,
         title: "Corporate Training",
         image: "/assets/images/TrainingAndWorkshop/training.webp",
         link:'/corporate-training'
    },
    {
         id: 2,
         title: "Academics",
         image: "/assets/images/TrainingAndWorkshop/academics.webp",
         link:'/academics'
    },
    {
         id: 3,
         title: "MSME",
         image: "/assets/images/TrainingAndWorkshop/msme.webp",
         link:'https://www.mepsc.in/training-of-master-trainers/'
    }
]

  return (
    <div className="testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto">
      
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
          <Title title='Training and Workshops'/>
          <Heading line1='Meaningful Research and Impactful Training'/>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                TrainingAndWorkshopList.map((items,i)=>(
                   <Link href={items.link} key={items.id} className="group w-full h-[300px] bg-white overflow-hidden relative">
                      <img
                        src={items.image}
                        alt={items.title}
                        loading='lazy'
                        className="w-full h-full object-cover border group-hover:scale-110 transition duration-300 ease-in-out"
                      />

<div className='absolute bottom-3 left-3'>
         <p className='text-xl md:text-3xl text-white font-[700]'>{items.title}</p>
</div>

<div className='absolute top-1 right-1'>
          <LuArrowUpRight className='text-[40px] text-white '  />
</div>

                    </Link>

                ))
            }

        </div>
        
    </div>
  )
}

export default TrainingAndWorkshopsComp