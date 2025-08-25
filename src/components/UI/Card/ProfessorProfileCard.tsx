'use client'
import Link from 'next/link'
import React from 'react'

const ProfessorProfileCard = (item:any) => {

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden  border border-[#f3f7fa]">
        <div className="flex flex-col md:flex-row min-h-screen  gap-5">
          {/* Left side - Photo */}
          <div className='w-full md:w-[250px]  space-y-4 bg-[#f3f7fa] p-3 md:p-6'>
            
           <div className='w-full aspect-square'>
 <img 
              src={item.item.image} 
              alt={item.item.name}
              loading='lazy'
              className="w-full h-full object-cover rounded-sm"
            />
           </div>
         
          {/* Header */}
            <div className=''>
              <h1 className="text-2xl font-[700] mb-2">{item.item.name}</h1>
              <div className="space-y-1">
                <p className="text-lg md:text-sm font-[700]">{item.item.role}</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="flex-1 p-3 md:p-6">
            
            {/* Bio Text */}
            <div className="text-md leading-normal space-y-3 mb-6">
              <p>{item.item.info}</p>
            </div>
            
            {/* LinkedIn Icon */}
            <div className="flex items-start">
              <Link href={item.item.LinkedInLink} className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfessorProfileCard