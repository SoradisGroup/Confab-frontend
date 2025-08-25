'use client'

import Navbar from '@/components/Layout/Header/Navbar'
import ModuleComp from '@/components/Shared/TrainingAndWorkshop/ModuleComp'
import OurTeam from '@/components/Shared/TrainingAndWorkshop/OurTeam'
import WhyToChoose from '@/components/Shared/TrainingAndWorkshop/WhyToChoose'
import Heading from '@/components/UI/Title/Heading'
import Title from '@/components/UI/Title/Title'
import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { LuArrowBigRight } from 'react-icons/lu'

const CorporateTraining = () => {

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


  return (
    <>
    <Navbar/>
    <div className="relative w-full h-[420px] bg-[url('/assets/images/corporateTraining/Corporate-bg.webp')] bg-cover bg-center flex justify-center items-center px-[20px] md:px-[70px]" >
    
         <div className='max-w-4xl mx-auto space-y-5 z-20'>
              <Title title='Corporate Training' className='text-center' textColor='text-white'/>
              <Heading line1='Confab 360 Degree For Your Business' textColor='text-white' className='text-center'/>
              <p className='text-md text-white text-center'>The corporate training provided by Confab 360 Degree helps the individuals and empower the team so that they can best utilize their talent for achieving organizational goals.</p>
      <div className='w-full flex justify-center items-center' >
              <Link href={'/'}   className='flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-md md:text-lg'>Read More</h1></Link>

            </div>
         </div>

         <div className='absolute inset-0 bg-black bg-opacity-40 z-10' />
     
    </div>

  <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>

     <Heading line1="Corporate and MSME's Training" />

     <p className='text-md text-center '>The expert trainers of Confab 360 Degree provide the best training to the corporate people. The training modules help the individuals to improve their job performance and increase productivity. At an organizational level, better training provides a competitive advantage to the organizations. Business needs are very dynamic in nature and individuals need to be ready for the forecasted changes in the processes and conduct of overall business. The better training keeps employees adaptive towards the organizational changes. The training provided by Confab 360 Degree helps the employees in adapting to new technologies, processes, and practices. It also keeps them ready for new regulations. The different phases of training can also help in boosting the employees morale.</p>

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>

        <div className='w-full h-full'>
            <img src="/assets/images/corporateTraining/4-11.webp" alt="" loading='lazy' className='w-full h-full object-content'/>
        </div>

        <div className='w-full h-full'>
            <img src="/assets/images/corporateTraining/6-7.webp" alt="" loading='lazy' className='w-full h-full object-content'/>
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