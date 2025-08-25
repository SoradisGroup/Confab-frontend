import ProductCard from '@/components/UI/Card/ProductCard'
import { ProductList } from '@/constants/data/product/productList'
import { Carousel } from 'antd'
import Link from 'next/link'
import React from 'react'

const ProductListComp = () => {
  return (
    <>
    <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto">
        <Carousel
        autoplay={false}
        autoplaySpeed={4000}
        slidesToScroll={1}
        slidesToShow={4}
        responsive={
            [
                {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
            ]
        }
        >
{
   ProductList.map((item,i)=>(
    <Link key={i} href={`/product/${item.slug}`}>
        <ProductCard item={item} />
    </Link>
   ))
}
        </Carousel>
    </div>
    </>
  )
}

export default ProductListComp