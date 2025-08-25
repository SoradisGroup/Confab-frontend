import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import ProfessorProfileCard from '@/components/UI/Card/ProfessorProfileCard'
import { advisoryBoardList } from '@/constants/data/advisoryBoard/advisoryBoardInfo'
import React from 'react'

const AdvisoryBoard = () => {
  return (

    <>
    <Navbar/>
    <HeadBanner title='Advisory Board'/>
    <div className=' bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-6'>
            {
                advisoryBoardList.map((item,i)=>(
                    <ProfessorProfileCard key={i} item={item}/>
                ))
            }
    </div>
    </>
    
  )
}

export default AdvisoryBoard