import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
     <div className="flex flex-col items-center justify-center h-screen text-center space-y-8">
      <h1 className="text-[300px] leading-[1] font-bold text-[#D3DCE0]">404</h1>
      <p className="text-[25px] text-center">Oops! This page could not be found.</p>
        <Link href={'/'} className='hover-button flex justify-center items-center gap-2 w-fit px-[40px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-lg'>Home</h1></Link>
    </div>
  )
}

export default NotFound