import { FormatEuroCurrency } from '@/utils/Formater';
import React from 'react'

interface ProductType {
    item:{
    name: string;
    slug:string;
    price: number;
    desc: string;
    category: string;
    productID: string;
    images: string[];
    },
    className?:string
}

const ProductCard = ({item,className}:ProductType) => {
  return (
    <div className={`max-w-[280px] flex flex-col justify-start items-start gap-3 ${className}`}>
          
          <div className='w-full h-full border'>
            <img src={item.images[0]} alt="" className='w-full h-full object-cover'/>
          </div>

          <h1 className='text-[#1c2834] text-start text-md md:text-lg font-[600]'>{item.name}</h1>

          <p className='text-[#1c2834] text-lg'>{FormatEuroCurrency(item.price)}</p>
          
    </div>
  )
}

export default ProductCard