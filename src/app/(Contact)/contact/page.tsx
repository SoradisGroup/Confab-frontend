'use client'

import HeadBanner from '@/components/Layout/Banner/HeadBanner';
import Navbar from '@/components/Layout/Header/Navbar';
import Heading from '@/components/UI/Title/Heading';
import Title from '@/components/UI/Title/Title';
import { strict } from 'assert';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPaperPlane } from 'react-icons/io5';
import { LuMail, LuMailOpen, LuMapPin, LuPencil, LuPhoneCall, LuUserRound } from 'react-icons/lu';

interface contactFormType {
    name:string;
    email:string;
    message:string;
}

const Contact = () => {

const {register,handleSubmit,reset,formState:{errors}} = useForm<contactFormType>();

const [isSubmitting, setIsSubmitting] = useState(false);

//  const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

  // const handleInputChange = (e:any) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: type === 'checkbox' ? checked : value
  //   }));
  // };


const submitHandler = async (data: contactFormType) => {

  setIsSubmitting(true);
 
  toast.promise(
    axios.post("/api/contact", data),
    {
      loading: "Sending your message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again later.",
    }
  ).then(() => {
    reset(); // clear form after submit
  }).catch((err) => {
    console.error(err);
    console.log("⚠️ Error sending email.");
  }).finally(() => {
      setIsSubmitting(false); // re-enable button
    });
};

  return (
    <>

<Navbar/>
    <HeadBanner title='Contact' className='text-[#f27521]'/>

<div className='relative '>


 <div className='w-full bg-zinc-50  overflow-hidden max-w-[2000px] mx-auto ' >
        <div className="bg-[url('/assets/images/banner/footerLayer.webp')] bg-cover bg-center py-[20px] md:py-[40px]  px-[20px] md:px-[40px] bg-no-repeat bg-fixed">
    {/* contact Form */}
<div className="bg-[#f3f7fa] rounded-sm max-w-5xl mx-auto w-full h-fit overflow-hidden border mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Form */}
          <div className="p-[20px] lg:p-[30px]">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">
              Request a consultation
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Fill out the form below, and we'll contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
              {/* Name Input */}
              <div>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LuUserRound className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50  focus:border-transparent outline-none transition-all duration-200 text-md"
                  {
                    ...register('name',{
                        required:'Name is Required'
                    })
                  }
                />
              </div>
              {
                errors.name &&
                <p className='text-sm text-red-400 px-1 pt-1'>{errors.name?.message}</p>
                }
              </div>

              {/* Email Input */}
              <div>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LuMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50  focus:border-transparent outline-none transition-all duration-200 text-md"
                  {...register('email',{
                    required:'Email is required',
                     pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                    }}
                    )}
                />

              </div>
              {
                errors.email &&
                <p className='text-sm text-red-400 px-1 pt-1'>{errors.email?.message}</p>
                }

              </div>

              {/* Message Input */}
              <div>
                <div className="relative">
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                  <LuPencil className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  placeholder="How can we help you? Feel free to get in touch!"
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50 focus:border-transparent outline-none transition-all duration-200 resize-none text-md"
                  {
                    ...register('message',{
                        required:'Message is Required'
                    })
                  }
                />
              </div>
              {
                errors.message &&
                <p className='text-sm text-red-400 px-1 pt-1'>{errors.message?.message}</p>
                }
              </div>

              {/* Privacy Policy Checkbox */}
              {/* <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  required
                />
                <label htmlFor="privacy" className="text-gray-700 text-sm">
                  I agree with the site's{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">
                    privacy policy
                  </a>
                  .
                </label>
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                className={`hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm ${isSubmitting 
      ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed" 
      : "bg-[#f27521] border-[#f27521] text-white hover:bg-[#d86317]"}`}
              >
                <IoPaperPlane className="h-5 w-5" />
                <span>{isSubmitting ? "Sending..." : "Get in Touch"}</span>
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="bg-white p-[20px] lg:p-[30px] flex flex-col justify-start">
            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">
              We're here to help
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions? Get in touch!
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <LuPhoneCall className="h-5 w-5 text-[#f27521]" />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className="text-md font-semibold text-gray-800">+91-7011560479</p>
                  <p className="text-md font-semibold text-gray-800">+91 9971907777</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <LuMailOpen className="h-5 w-5 text-[#f27521]" />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className="text-md font-semibold text-gray-800">confab360degree@gmail.com</p>
                  <p className="text-md font-semibold text-gray-800">nishu.ayedee@gmail.com</p>
                  <p className="text-md font-semibold text-gray-800">profanuj15@gmail.com</p>
                  <p className="text-md font-semibold text-gray-800">academics@confabco.in</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <LuMapPin className="h-5 w-5 text-[#f27521]" />
                </div>
                <div>
                  <p className="text-md font-semibold text-gray-800">Delhi, Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
                 <FaFacebook className="h-5 w-5 text-gray-400 hover:text-[#f27521]"/>
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
                <FaXTwitter className="h-5 w-5 text-gray-400 hover:text-[#f27521]"/>
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
                  <FaInstagram className="h-5 w-5 text-gray-400 hover:text-[#f27521]"/>
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
                  <FaLinkedin className="h-5 w-5 text-gray-400 hover:text-[#f27521]"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     </div>
</div>



 <div className='w-full bg-[#3974B6]  overflow-hidden max-w-[2000px] mx-auto ' >
        <div className="bg-[url('/assets/images/banner/footerLayer.webp')] bg-cover bg-center py-[20px] md:py-[40px]  px-[20px] md:px-[40px] bg-no-repeat bg-fixed">
        
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8 max-w-6xl mx-auto">
          <Title title='Our offices'/>
          <Heading textColor='text-white' line1='Combined with our role as trusted advisors for Indian professionals translates into our core capability - Building careers. Building Organisations.'/>
        </div>

        {/* Address */}
        <div className="bg-[#f3f7fa] rounded-sm max-w-5xl max-w-[650px] mx-auto overflow-hidden border">
        <div className="w-full">
          {/* Left Side - Form */}
          <div className="p-[20px] lg:p-[30px] flex flex-col justify-center items-center ">
            <img src="/assets/images/contact/Delhi.png" alt="" loading='lazy' className='w-[90px] h-[120px] mb-3' />
            <h2 className="text-2xl font-semibold mb-2">
              Delhi (Corporate Office)
            </h2>
            <p className="text-gray-600 text-center text-[15px]">
              VIKAS SURYA SHOPPING COMPLEX, 2 9 VIKAS SURYA, PLAZA POCKET-1, ROHINI SECTOR-24, NEW DELHI, DELHI - INDIA - 110085
            </p>



            <div className='flex flex-col justify-center items-center space-y-1'>

            <Link href={''} className='text-[15px] md:text-lg text-[#f27521] my-8 flex justify-start items-center gap-2'><LuMapPin className=' text-[#1f2937]'/>VIEW MAP</Link>
         {/* <h1 className='text-lg'>Contact</h1> */}

         <div className=' flex flex-row justify-start items-start gap-5'>
              <div className='w-full flex justify-start items-start gap-3'>
                  <LuPhoneCall className='mt-2'/>
                  <div>
                    <p className='text-[15px] md:text-lg text-[#f27521] flex justify-start items-center gap-3'>+91 7011560479</p>
                    <p className='text-[15px] md:text-lg text-[#f27521] flex justify-start items-center gap-3'>+91 9971907777</p>
                  </div>
              </div>


<div className='w-full flex justify-start items-start gap-3 '>
                  <LuMailOpen className='mt-2'/>
                  <div>
              <p className='text-[15px] md:text-lg text-[#f27521] flex justify-start items-center gap-3'>confab360degree@gmail.com</p>
              <p className='text-[15px] md:text-lg text-[#f27521] flex justify-start items-center gap-3'>nishu.ayedee@gmail.com</p>
              <p className='text-[15px] md:text-lg text-[#f27521] flex justify-start items-center gap-3'>profanuj15@gmail.com</p>
              <p className='text-[15px] md:text-lg text-[#f27521] flex justify-start items-center gap-3'>academics@confabco.in</p>
                  </div>
              </div>

         </div>

            </div>


          </div>

          {/* Right Side - Contact Info */}
          {/* <div className="bg-gray-50 p-[20px] lg:p-[30px] flex flex-col justify-start">
             <img src="/assets/images/contact/Mumbai.png" alt="" loading='lazy' className='w-[120px] h-[80px] mb-3' />
             <h2 className="text-2xl font-semibold mb-2">
              Mumbai
            </h2>
            <p className="text-gray-600 text-lg">
              1st Floor, Eros Corporate Tower Nehru Place, New Delhi 110 019.
            </p>

            <Link href={''} className='text-[#f27521] my-8 flex justify-start items-center gap-2'><LuMapPin/>VIEW MAP</Link>

            <div className='space-y-3'>

         <h1 className='text-lg'>Contact</h1>

         <div className=''>
              <p className='text-lg flex justify-start items-center gap-3'><LuPhoneCall/><span className='text-[#f27521]'>+91 98765 43210</span></p>
              <p className='text-lg flex justify-start items-center gap-3'><LuMailOpen/><span className='text-[#f27521]'>info@confab360degree.com</span></p>
         </div>

            </div>
          </div> */}
        </div>
      </div>
        
        </div>
</div>




</div>

    </>



  )
}

export default Contact