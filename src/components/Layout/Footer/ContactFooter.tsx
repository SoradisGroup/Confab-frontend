import Link from 'next/link'
import React from 'react'

const ContactFooter = () => {
  return ( 
    <div className='w-full  bg-[#3974B6] overflow-hidden max-w-[2000px] mx-auto ' >
        <div className="bg-[url('/assets/images/banner/footerLayer.webp')] bg-cover bg-center py-[40px] md:py-[60px]  px-[20px] md:px-[40px] bg-no-repeat bg-fixed">
              
      <div className='max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6'>

 <div className='space-y-6 text-white text-start w-full'>
                <h1 className='text-2xl md:text-5xl '>Ready to align your organization for a more successful future?</h1>
                <p className='text-lg text-[#ccd1d9]'>Get in touch with our team of strategic planning consultants today!</p>
          </div>

          <div className='flex justify-start md:justify-end w-[300px]'>
            <Link href={'/contact'} type='button' className='px-[40px] py-[10px] border-2 border-white text-white bg-transparent'><h1 className='text-lg'>Get in Touch</h1></Link>
          </div>

         </div>

        </div>   
    </div>
  )
}

export default ContactFooter