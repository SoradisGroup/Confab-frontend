import React from 'react'

interface headingType {
    line1: string;
    line2?: string;
    className?: string;
    textColor?:string;
    textSize?:string;
}

const Heading = ({line1,line2,textColor='text-[#1c2834]',textSize='text-2xl md:text-4xl',className}:headingType) => {
  return (
    <h2 className={`${textSize} ${textColor} font-[600]  leading-tight ${className}`}>
            {line1}<br/>{line2 && line2}
          </h2>
  )
}

export default Heading