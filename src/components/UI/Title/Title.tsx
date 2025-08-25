import React from 'react'

interface titleType {
    title: string;
    className?: string;
    textColor?:string;
    textSize?:string;
}


const Title = ({title,textSize='text-sm',textColor='text-[#f27521]',className}:titleType) => {
  return (
    <h3 className={`${textSize} ${textColor} font-semibold tracking-wider uppercase ${className}`}>
            {title}
          </h3>
  )
}

export default Title