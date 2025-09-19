import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import Heading from '@/components/UI/Title/Heading'
import { publicationBookList, publicationList, publicationList2 } from '@/constants/data/publication/publicationInfo'
import Link from 'next/link'
import React from 'react'
import { LuArrowBigRight } from 'react-icons/lu'

const Publication = () => {

   

  return (
    <>
    <Navbar/>
    <HeadBanner title='Publications' />

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
    <div className='space-y-5'>
        <Heading line1='International Management Review (UGC CARE I)' />
        <div className='w-full h-full '>
            <img src="/assets/images/publication/special.webp" alt="" loading='lazy' className='w-full h-full object-cover' />
        </div>
         <div >
              <Link href={'https://www.americanscholarspress.us/journals/IMR/journal_IMR.php'} target='_blank' className='flex w-fit px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>View More</h1></Link>

            </div>
    </div>
</div>

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-start items-start gap-10'>
    {
        publicationBookList.map((item,i)=>(
            <div key={i} className='space-y-5'>
        <Heading line1={item.title} />
        <div className='max-w-[400px] h-full '>
            <img src={item.images} alt="" loading='lazy' className='w-full h-full object-cover border' />
        </div>
         <div >
              <Link href={item.link} target='_blank' className='flex w-fit px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>View More</h1></Link>

            </div>
    </div>
        ))
    }

    
</div>

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col  gap-10'>
    {
        publicationList.map((item,i)=>(
            <div key={i} className='w-full space-y-5'>
        <Heading line1={item.title} />

         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 '>
             {
                item.images.map((img,i)=>(
                    <div key={i} className='w-full border'>
                        <img src={img} alt={item.title+"_"+ i} loading='lazy' className='w-full object-content'/>
                    </div>
                ))
              
             }
         </div>

         <div className='space-y-2'>
                             {
                                               item.paraInfo.map((para,i)=>(
                                                    <Link href={para.link} target='_blank' key={i} className='text-md md:text-lg flex justify-start items-start gap-2 hover:text-[#f27521] transition duration-300 ease-in-out'><LuArrowBigRight className='flex-shrink-0 text-[15px] mt-[5px]' />{para.para}</Link>
                                               ))
                                           }
                           </div>

    </div>
        ))
    }
</div>

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-5'>
    <Heading line1='Beyond Firewalls Security At Scale' />
    <p className='text-md'>Beyond Firewalls Security at Scale is an essential read in today’s rapidly evolving digital landscape, where cybersecurity threats are becoming increasingly sophisticated. This book provides a clear and structured pathway to understanding advanced cybersecurity tools and their role in defending against modern threats. It uniquely integrates the application of AI in cybersecurity, offering readers practical insights into how machine learning models enhance threat detection, user behavior analysis, and fraud prevention. What sets this book apart is its emphasis on scalability and reliability, bringing a fresh and essential perspective to advanced security tools. These often-overlooked principles are highlighted as critical to maintaining robust defenses while ensuring seamless operations during traffic surges and high-stress events. By bridging the gap between cybersecurity strategies and system engineering principles, “Beyond Firewalls” presents a new paradigm for creating adaptive and secure systems. Whether you’re a professional seeking to modernize your defenses or a tech enthusiast exploring Al’s transformative role in security, this book equips you with the tools to tackle today’s cybersecurity challenges effectively.</p>

<div className='w-full flex justify-start items-center gap-5'>
<div className='max-w-[150px] border'>
                        <img src={'/assets/images/publication/beyond.webp'} alt={''} loading='lazy' className='w-full object-content'/>
                    </div>
                    <div className='max-w-[150px] border'>
                        <img src={'/assets/images/publication/beyond1.webp'} alt={''} loading='lazy' className='w-full object-content'/>
                    </div>
                    <div className='max-w-[150px] border'>
                        <img src={'/assets/images/publication/International.webp'} alt={''} loading='lazy' className='w-full object-content'/>
                    </div>
</div>
   
</div>

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col gap-5'>
 
   <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-start items-start gap-5'>

       <div className='cols-2 space-y-5'>
           <Heading line1='The publication of a special issue in Public Administration and Policy: An Asia-Pacific Journal by Emerald Publishing! This issue, stemming from the Confab 360 Degree global conference (Dec 2022), showcases innovative research in public administration.' />
       <p className='text-md'>The journal is proudly indexed in Scopus Q2.</p>
       <p className='text-md'>Congratulations to Dr. Nisha Ayedee and the Confab 360 Degree team for their exceptional work, and to all contributing authors for advancing the field with their insightful research.</p>

      <div>
        <Link href={'https://www.emerald.com/pap/article/27/2/124/1213021/Editorial-Introduction-to-the-Special-Issue'} target='_blank' className='flex w-fit px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>View More</h1></Link>
      </div>

       </div>

       <div className='w-full border'>
        <img src="/assets/images/publication/confab-2.webp" alt="" loading='lazy' className='w-full object-content' />
       </div>


   </div>

</div>

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col  gap-10'>
    {
        publicationList2.map((item,i)=>(
            <div key={i} className='w-full space-y-5'>
        <Heading line1={item.title} />

        {
            item.images && 
            (<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 '>
             {
                item.images.map((img,i)=>(
                    <div key={i} className='w-full border'>
                        <img src={img} alt={item.title+"_"+ i} loading='lazy' className='w-full object-content'/>
                    </div>
                ))
              
             }
         </div>)
        }

        {
            item.infoList && (
                <div className='flex flex-col'>
             {
                item.infoList?.map((item,i)=>(
                     <p key={i} className='text-md md:text-lg'>{item}</p>
                ))
             }
            </div>
            )
        }

         {
            item.paraInfo && (
                <div className='space-y-2'>
                             {
                                               item.paraInfo.map((para,i)=>(
                                                    <Link href={para.link} target='_blank' key={i} className='text-md md:text-lg flex justify-start items-start gap-2 hover:text-[#f27521] transition duration-300 ease-in-out'><LuArrowBigRight className='flex-shrink-0 text-[15px] mt-[5px]' />{para.para}</Link>
                                               ))
                                           }
                           </div>
            )
         }

    </div>
        ))
    }
</div>

    </>
  )
}

export default Publication