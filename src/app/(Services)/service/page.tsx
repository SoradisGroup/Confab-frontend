import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import { CopyrightsInfo, ForeignCollaborationServicesInfo, GeneralServicesInfo, ManagementDevelopmentInfo, NAACConsultancyInfo, NationalInternationalInfo, NBAConsultancyInfo, PatentAndDesignInfo, ProjectInfo, ResearchConsultanciesInfo, StudentExchangeProgramsInfo, TeacherTrainingServicesInfo } from '@/constants/data/services/servicesInfo'
import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

const Services = () => {


  return (
    <>
    <Navbar/>
    <HeadBanner title='Services'/>
{/* National */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{NationalInternationalInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    NationalInternationalInfo.NationalInternationalList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>
        </div>

        <div className=''>
            <img src={NationalInternationalInfo.image} alt={NationalInternationalInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>


<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{ForeignCollaborationServicesInfo.title}</h1>

 {
                    ForeignCollaborationServicesInfo.ForeignCollaborationServicesList.map((item,i)=>(
                          <div key={i} className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>{i+1}. {item.subTitle}</h1>
                {
                    item.paraList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>
                    ))
                }

           
        </div>

        <div className='order-2 lg:order-1'>
            <img src={ForeignCollaborationServicesInfo.image} alt={ForeignCollaborationServicesInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>

{/* StudentExchangePrograms */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{StudentExchangeProgramsInfo.title}</h1>

 {
                    StudentExchangeProgramsInfo.StudentExchangeProgramsList.map((item,i)=>(
                          <div key={i} className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>{i+1}. {item.subTitle}</h1>
                {
                    item.paraList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>
                    ))
                }

           
        </div>

        <div className=''>
            <img src={StudentExchangeProgramsInfo.image} alt={StudentExchangeProgramsInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>


{/* TeacherTrainingServices */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{TeacherTrainingServicesInfo.title}</h1>

 {
                    TeacherTrainingServicesInfo.TeacherTrainingServicesList.map((item,i)=>(
                          <div key={i} className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>{i+1}. {item.subTitle}</h1>
                {
                    item.paraList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>
                    ))
                }

           
        </div>

        <div className='order-2 lg:order-1'>
            <img src={TeacherTrainingServicesInfo.image} alt={TeacherTrainingServicesInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>

{/* GeneralServicesInfo */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{GeneralServicesInfo.title}</h1>

 {
                    GeneralServicesInfo.GeneralServicesList.map((item,i)=>(
                          <div key={i} className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>{i+1}. {item.subTitle}</h1>
                {
                    item.paraList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>
                    ))
                }

           
        </div>

        <div className=''>
            <img src={GeneralServicesInfo.image} alt={GeneralServicesInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>

{/* ManagementDevelopment */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{ManagementDevelopmentInfo.title}</h1>

 {
                    ManagementDevelopmentInfo.ManagementDevelopmentList.map((item,i)=>(
                          <div key={i} className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>{item.subTitle}</h1>
                {
                    item.paraList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>
                    ))
                }

           
        </div>

        <div className='order-2 lg:order-1'>
            <img src={ManagementDevelopmentInfo.image} alt={ManagementDevelopmentInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>

{/* PatentAndDesign */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{PatentAndDesignInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    PatentAndDesignInfo.PatentAndDesignList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-2'>
            {
                PatentAndDesignInfo.images.map((item,i)=>(
                    <img key={i} src={item} alt={PatentAndDesignInfo.title} loading='lazy' className='w-[120px] border' />
                ))
            }
        </div>
        

    </div>

{/* Copyrights */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{CopyrightsInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    CopyrightsInfo.CopyrightsList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>
        </div>

        <div className='order-2 lg:order-1'>
            <img src={CopyrightsInfo.image} alt={CopyrightsInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>

{/* NAACConsultancy */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{NAACConsultancyInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    NAACConsultancyInfo.NAACConsultancyList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>
        </div>

        <div className=''>
            <img src={NAACConsultancyInfo.image} alt={NAACConsultancyInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>

{/* NBAConsultancy */}
 <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{NBAConsultancyInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    NBAConsultancyInfo.NBAConsultancyList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>
        </div>

        <div className='order-2 lg:order-1'>
            <img src={NBAConsultancyInfo.image} alt={NBAConsultancyInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div>

{/* Project */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{ProjectInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    ProjectInfo.ProjectList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>
        </div>

        <div className=''>
            <img src={ProjectInfo.image} alt={ProjectInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div> 

{/* ResearchConsultancies */}
   <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{ResearchConsultanciesInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    ResearchConsultanciesInfo.ResearchConsultanciesList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>
        </div>

        <div className='order-2 lg:order-1'>
            <img src={ResearchConsultanciesInfo.image} alt={ResearchConsultanciesInfo.title} loading='lazy' className='w-[520px]  border' />
        </div>
        

    </div> 
    </>
  )
}

export default Services