import { footerInfo } from '@/constants/data/footer/footerInfo'
import Link from 'next/link'
import React from 'react'
import { LuMail, LuMapPin, LuPhoneCall } from 'react-icons/lu'

const Footer = () => {

//    background-image: linear-gradient(180deg, #F0F0F9 0%, #FDF7F8 100%);
    
  return (
   
      <div className="w-full max-w-[2000px] mx-auto bg-gradient-to-b from-[#F0F0F9] to-[#FDF7F8] px-[20px] md:px-[70px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 py-[30px] md:py-[60px] ">
          {/* Company Info Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-10">
            <div>
                <img src={footerInfo.companyInfo.logo} alt="" className='w-[230px] md:w-[350px]'/>
            </div>
            
            <div className="space-y-3 text-black">
              <div className="flex items-center space-x-4">
               <LuPhoneCall/> 

               <div className='flex flex-col gap-1'>
                     {
                       footerInfo.companyInfo.phone.map((item,i)=>(
                        <span key={i} className="text-[15px] md:text-[17px] font-[600]">{item}</span>
                       ))
                     }
               </div>
              </div>
              <div className="flex items-center space-x-4">
                <LuMail/>
                <div className='flex flex-col gap-1'>
                     {
                       footerInfo.companyInfo.email.map((item,i)=>(
                        <span key={i} className="text-[15px] md:text-[17px] font-[600]">{item}</span>
                       ))
                     }
               </div>
                
              </div>
              <div className="flex items-center space-x-4">
                <LuMapPin/><span className="text-[15px] md:text-[17px] font-[600]">{footerInfo.companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{footerInfo.heading1}</h3>
            <div className="flex flex-col justify-start items-start gap-3 ">
              {
                footerInfo.quickLinks.map((info, index) => (
                  <Link key={index} href={info.href} className="text-black hover:text-orange-500 transition-colors text-sm">
                    {info.name}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Informations Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{footerInfo.heading2}</h3>
            <div className="flex flex-col justify-start items-start gap-3 ">
              {
                footerInfo.informations.map((info, index) => (
                  <Link key={index} href={info.href} className="text-black hover:text-orange-500 transition-colors text-sm ">
                    {info.name}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{footerInfo.heading3}</h3>
            <div className="flex flex-col justify-start items-start gap-3 ">
              {
                footerInfo.services.map((info, index) => (
                  <Link key={index} href={info.href} className="text-black hover:text-orange-500 transition-colors text-sm">
                    {info.name}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className=" py-4 border-t border-gray-200">
          <h3 className="text-xl font-semibold  mb-4">{footerInfo.heading4}</h3>
          <div className=" text-sm leading-relaxed space-y-4">
            <p>
              {footerInfo.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className=" text-sm">
              © {new Date().getFullYear()} Confab 360 Degree . All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className=" text-sm flex items-center">
                Created by Soradis Group.
              </p>
            </div>
          </div>
        </div>
      </div>
      
  
  )
}

export default Footer