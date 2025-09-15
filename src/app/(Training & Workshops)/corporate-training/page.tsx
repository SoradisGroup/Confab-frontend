'use client'

import Navbar from '@/components/Layout/Header/Navbar'
import ModuleComp from '@/components/Shared/TrainingAndWorkshop/ModuleComp'
import OurTeam from '@/components/Shared/TrainingAndWorkshop/OurTeam'
import WhyToChoose from '@/components/Shared/TrainingAndWorkshop/WhyToChoose'
import Heading from '@/components/UI/Title/Heading'
import Title from '@/components/UI/Title/Title'
import Carousel, { CarouselRef } from 'antd/es/carousel'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { LuArrowBigRight } from 'react-icons/lu'

const CorporateTraining = () => {

    const carouselRef = useRef<CarouselRef>(null);

const [currentSlide, setCurrentSlide] = useState<number>(0);

const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

    const handleAfterChange = (current: number) => {
    setCurrentSlide(current)
  }

    const clientInfoList = [
        {
            key:1,
            title:'Corporate clients',
            companyList:[
                'Aeron Systems Private Ltd; Maharashtra, India',
                'Everting Learning private Limited',
                'Be Millionaire, Navi Mumbai, India',
                'Victor Clothing Pvt Ltd, Delhi, India',
                'Prizlyn Technologies Pvt Ltd, Delhi, India'
            ]
        },{
            key:2,
            title:'International clients',
            companyList:[
                'European School of Data Science and Technology, Switzerland',
                'Rushford Business School, Switzerland',
                'European Global Varsity, Europe'
            ]
        },{
            key:3,
            title:'Academia clients',
            companyList:[
                'Guru Nanak Institute of Management, Delhi, India',
                'Narayana Business School, Gujarat, India',
                'Priyadarshini College of Engineering, Nagpur, India',
                'Raj Kumar Goel Institute of Technology, Ghaziabad, India',
                'NSHM Knowledge Campus, Durgapur, West Bengal, India'
            ]
        }
    ]

    const clientAppreciationList = [
        {
            key:1,
            title:'123 Clothing, New Delhi',
            image:'/assets/images/corporateTraining/Confab-360-Degree-Appreciation-Certificate-1.webp'
        },
         {
            key:2,
            title:'LEO jejaring Ilmu, Indonesia',
            image:'/assets/images/corporateTraining/Final-Indonesia-Acknowledgement-1.webp'
        }
    ]

    const MSMESTrainingImages = [
        {
            key:1,
            image:'/assets/images/corporateTraining/1-14.webp',
            name:""
        },
        {
            key:2,
            image:'/assets/images/corporateTraining/2-13.webp',
             name:""
        },
        {
            key:3,
            image:'/assets/images/corporateTraining/3-12.webp',
             name:""
        },
        {
            key:4,
            image:'/assets/images/corporateTraining/5-7.webp',
             name:""
        },
        {
            key:2,
            image:'/assets/images/corporateTraining/4-11.webp',
             name:""
        },
        {
            key:3,
            image:'/assets/images/corporateTraining/6-7.webp',
             name:""
        },
        {
            key:4,
            image:'/assets/images/corporateTraining/7-6.webp',
             name:""
        },
        {
            key:5,
            image:'/assets/images/corporateTraining/8-5.webp',
             name:""
        },
        {
            key:6,
            image:'/assets/images/corporateTraining/10-2.webp',
             name:""
        },
        {
            key:7,
            image:'/assets/images/corporateTraining/11-1.webp',
             name:""
        },
        {
          key:8,
          image:'/assets/images/corporateTraining/12-1.webp',
           name:""
        }
    ]


  return (
    <>
    <Navbar/>
    <div className="relative w-full h-[420px] bg-[url('/assets/images/corporateTraining/Corporate-bg.webp')] bg-cover bg-center flex justify-center items-center px-[20px] md:px-[70px]" >
    
         <div className='max-w-4xl mx-auto space-y-5 z-20'>
              <Title title='Corporate Training' className='text-center' textColor='text-white'/>
              <Heading line1='Confab 360 Degree For Your Business' textColor='text-white' className='text-center'/>
              <p className='text-md text-white text-center'>The corporate training provided by Confab 360 Degree helps the individuals and empower the team so that they can best utilize their talent for achieving organizational goals.</p>
      <div className='w-full flex justify-center items-center' >
              <Link href={'/'}   className='hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-md md:text-lg'>Read More</h1></Link>

            </div>
         </div>

         <div className='absolute inset-0 bg-black bg-opacity-40 z-10' />
     
    </div>

  <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>

     <Heading line1="Corporate and MSME's Training" />

     <p className='text-md text-center '>The expert trainers of Confab 360 Degree provide the best training to the corporate people. The training modules help the individuals to improve their job performance and increase productivity. At an organizational level, better training provides a competitive advantage to the organizations. Business needs are very dynamic in nature and individuals need to be ready for the forecasted changes in the processes and conduct of overall business. The better training keeps employees adaptive towards the organizational changes. The training provided by Confab 360 Degree helps the employees in adapting to new technologies, processes, and practices. It also keeps them ready for new regulations. The different phases of training can also help in boosting the employees morale.</p>

       {/* Testimonials Carousel */}
        <div className="relative w-full">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {MSMESTrainingImages.map((item,i) => (
              <div key={i} className="w-full h-full px-0 md:px-2">
                <img
                        src={item.image}
                        alt={item.name}
                        loading='lazy'
                        className="w-full h-full object-cover border"
                      />
              </div>
            ))}
          </Carousel>


<div className="flex justify-center mt-12 space-x-2">
            {MSMESTrainingImages.map((_, index) => (
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
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>   


    </div>

    <WhyToChoose/>
    <OurTeam/>

<div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
{

    clientInfoList.map((item,i)=>(
 <div key={i} className='flex flex-col border p-3 gap-5'>
                  <h1 className='text-xl font-[600]'>{item.title}</h1>
                  

                  <div className='space-y-2'>
                    {
                                      item.companyList.map((item,i)=>(
                                           <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><LuArrowBigRight className='flex-shrink-0 text-[15px] mt-[5px]' />{item}</p>
                                      ))
                                  }
                  </div>
            </div>
    ))
}

           

         </div>
</div>


<div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>

     <Heading line1='Appreciation from Client'/>

    <div className='w-full grid grid-cols-1 md:grid-cols-2 justify gap-5 '>

   {
    clientAppreciationList.map((item,i)=>(
         <div key={i} className='w-full  flex flex-col  p-3 gap-5 justify-center items-center'>
                  <h1 className='text-xl font-[600]'>{item.title}</h1>
                  

                  <div className='w-max-[212px] h-[300px]'>
                    <img src={item.image} alt="" loading='lazy' className='w-full h-full border'/>
                  </div>
            </div>
    ))
   }


    </div>


</div>

<ModuleComp/>

<div className='w-full bg-[#f3f7fa] py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
 <Heading line1="Module" />

     <p className='text-md text-center '>Besides the above training modules, we also cater to the training needs of the organizations in customized form. We can discuss your training requirement and provide you suitable training program.</p>

</div>

    </>
  )
}

export default CorporateTraining