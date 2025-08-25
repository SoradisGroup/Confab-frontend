import Heading from '@/components/UI/Title/Heading'
import Title from '@/components/UI/Title/Title'
import Link from 'next/link'
import React from 'react'

const AboutUsComp = () => {
  return (
    <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">

{/* right Side */}
<div className="relative bg-white">
            <div className="relative overflow-hidden rounded-sm p-[20px] md:p-[50px]">
              <img
                src="/assets/images/home/about.webp"
                alt="Award ceremony with HOA SEN University and ICCQD 2024"
                loading='lazy'
                className="w-full h-full object-cover border"
              />

              <div className='absolute bg-white p-2 bottom-0 md:bottom-1 right-0 md:right-1'>
                <img
                src="/assets/images/home/Dr-Nishu-Ayedee-confab360.webp"
                alt="Award ceremony with HOA SEN University and ICCQD 2024"
                loading='lazy'
                className="w-[120px] md:w-[180] object-cover border"
              />
              </div>
</div>
</div>

{/* left Side */}
 <div className="space-y-6">
            {/* Header */}
            <div className='text-start space-y-2 md:space-y-4 '>
                <Title title='About Us'/>
                <Heading line1='We believe in transforming professionals with quality and impactful Training and Research'/>
            </div>

    <p className="text-md leading-relaxed mb-8">Confab 360 Degree, was founded with the intent to bring in quality training and programs for professionals, academicians and faculties. The aim was to extend the best mix of resources, knowledge and methods by experts and guides in their domain. I have been on both sides whether educational or Corporate and it still manages to amaze me. Both need innovation, new learning and methods to grow. But due to the boundaries of the job, the employees hardly manage to grow or innovate in their fields. The pressure of keeping moving and following the line of work and chasing deadlines, stress kills the learning, motivation, balance of life and builds in a lot of mental and health problems. We want to contribute to the stress free and fruitful journey of the professionals, employees and academicians and in turn be a part of the growth and success of the business as well as educational world. I would love to share all the success achieved and the trust received with the entire team, advisory board and trainers. It is their tireless efforts and ability to find new methods to deliver.</p>         

            <div >
              <Link href={'/service'} className='flex w-fit px-[40px] py-[10px] border-2 border-[#f27521] text-white bg-transparent'><h1 className='text-md text-[#f27521]'>Our Services</h1></Link>

            </div>

</div>

        </div>
        </div>
  )
}

export default AboutUsComp