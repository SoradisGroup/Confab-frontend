import React from 'react'

interface headerBannerType {
    title: string;
    className?: string;
}

const HeadBanner = ({title,className}:headerBannerType) => {
  return (
    <div className={`w-full h-[150px] md:h-[200px]  bg-[#3974B6] overflow-hidden max-w-[2000px] mx-auto ${className}`} >
        <div className="w-full h-full bg-[url('/assets/images/banner/footerLayer.webp')] bg-cover bg-center  bg-no-repeat bg-fixed flex justify-center items-center">
                  <h1 className='text-3xl md:text-5xl text-white font-[600] text-center'>{title}</h1>
        </div>
    </div>
  )
}

export default HeadBanner