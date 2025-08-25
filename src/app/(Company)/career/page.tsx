'use client'

import HeadBanner from '@/components/Layout/Banner/HeadBanner';
import Navbar from '@/components/Layout/Header/Navbar';
import React from 'react'
import { useForm } from 'react-hook-form';
import { IoPaperPlane } from 'react-icons/io5';

interface contactFormType {
    firstName:string;
    lastName:string;
    phone:string;
    email:string;
    subject:string;
    message:string;
}

const Career = () => {

const {register,handleSubmit,reset,formState:{errors}} = useForm<contactFormType>();

  const submitHandler = (data:any) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };
    
  return (
    <>
    <Navbar/>
    <HeadBanner title='Careers'/>

<div className='bg-[#f3f7fa]'> 
<div className=" rounded-sm max-w-5xl mx-auto overflow-hidden">
           
              <div className="p-[20px] lg:p-[30px]">
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">
                  Submit your resume
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
    
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                  {/* Name Input */}
                  <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-2'>
                     <div className='w-full'>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50  focus:border-transparent outline-none transition-all duration-200 text-md"
                      {
                        ...register('firstName',{
                            required:'Firstname is Required'
                        })
                      }
                    />
                  {
                    errors.firstName &&
                    <p className='text-sm text-red-400 px-1 pt-1'>{errors.firstName?.message}</p>
                    }
                  </div>
                  <div className='w-full'>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50  focus:border-transparent outline-none transition-all duration-200 text-md"
                      {
                        ...register('lastName',{
                            required:'Lastname is Required'
                        })
                      }
                    />
                  {
                    errors.lastName &&
                    <p className='text-sm text-red-400 px-1 pt-1'>{errors.lastName?.message}</p>
                    }
                  </div>
                  </div>
    
     <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-2'>
                  {/* Email Input */}
                  <div className='w-full'>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50  focus:border-transparent outline-none transition-all duration-200 text-md"
                      {...register('email',{
                        required:'Email is required',
                         pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                        }}
                        )}
                    />
    
                 
                  {
                    errors.email &&
                    <p className='text-sm text-red-400 px-1 pt-1'>{errors.email?.message}</p>
                    }
    
                  </div>
 <div className='w-full'>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50  focus:border-transparent outline-none transition-all duration-200 text-md"
                      {
                        ...register('subject',{
                            required:'Subject is Required'
                        })
                      }
                    />
                  {
                    errors.subject &&
                    <p className='text-sm text-red-400 px-1 pt-1'>{errors.subject?.message}</p>
                    }
                  </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50  focus:border-transparent outline-none transition-all duration-200 text-md"
                      {
                        ...register('phone',{
                    required:'Mobile Number is required',
                    minLength: {
                    value: 10,
                    message: "Mobile number must be at least 10 digits",
                    },
                    maxLength: {
                        value: 15,
                        message: "Mobile number must not exceed 15 digits",
                    },
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Mobile number must contain only numbers",
                    }
                })
                      }
                    />
                  {
                    errors.phone &&
                    <p className='text-sm text-red-400 px-1 pt-1'>{errors.phone?.message}</p>
                    }
                  </div>
    
                  {/* Message Input */}
                  <div>
                    
                    
                    <textarea
                      placeholder="How can we help you? Feel free to get in touch!"
                      rows={4}
                      className="w-full px-4 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f27521]/50 focus:border-transparent outline-none transition-all duration-200 resize-none text-md"
                      {
                        ...register('message',{
                            required:'Message is Required'
                        })
                      }
                    />
                  {
                    errors.message &&
                    <p className='text-sm text-red-400 px-1 pt-1'>{errors.message?.message}</p>
                    }
                  </div>
    
    
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className='flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-md'
                  >
                    <IoPaperPlane className="h-5 w-5" />
                    <span>Get in Touch</span>
                  </button>
                </form>
              </div>
          </div>
</div>
    
    </>
  )
}

export default Career