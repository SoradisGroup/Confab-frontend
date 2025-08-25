import React from 'react'
import Title from '../UI/Title/Title'
import Heading from '../UI/Title/Heading'
import Link from 'next/link'

const WhoWeAreComp = () => {
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
                <Title title='Who We Are'/>
                <Heading line1='Confab 360 Degree, was founded with the intent to bring in programs for professionals.'/>
            </div>

    <p className="text-lg leading-relaxed mb-8">
               Confab 360 Degree™️ is a globally trusted brand that believes in upskilling and innovating the lives of professionals by synchronizing them in a fragmented educational and business ecosystem with the growing essential necessities for making their organizations, universities and businesses sustainable and growth driven. The main focus is on “Meaningful Researches and Impactful and outcome based training’s”, also considered sustainability and technology driven innovations where the services and programs are provided to promote new technologies and services, communication, publishing and writing techniques, research projects for future development etc.
              </p>         

            <div >
              <Link href={'/about-us'} className='w-fit flex px-[40px] py-[10px] border-2 border-[#f27521] text-white bg-transparent'><h1 className='text-md text-[#f27521]'>More About Us</h1></Link>

            </div>

</div>

        </div>
        </div>
  )
}

export default WhoWeAreComp