import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import Heading from '@/components/UI/Title/Heading'
import { AICTEInfo, ArtificialIntelligenceInfo, CopyrightsInfo, ForeignCollaborationServicesInfo, GeneralServicesInfo, ManagementDevelopmentInfo, NAACConsultancyInfo, NationalInternationalInfo, NBAConsultancyInfo, PatentAndDesignInfo, ProjectInfo, PublicationProcessingInfo, ResearchCapacityBuildingInfo, ResearchConsultanciesInfo, ResearchWritingInfo, StudentExchangeProgramsInfo, StudentsSkillDevelopmentInfo, TeacherTrainingServicesInfo } from '@/constants/data/services/servicesInfo'
import Link from 'next/link'
import React from 'react'
import { FaCircle, FaLink } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

const Services = () => {


  return (
    <>
    <Navbar/>
    <HeadBanner title='Services'/>



<div className='w-full flex justify-center items-center py-3'>
    <Heading line1={'Training (Academic & Research)'} />
</div>

{/* Research Writing */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{ResearchWritingInfo.title}</h1>

            <div>
                <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Introduction: </span>
                {ResearchWritingInfo.introduction}
                </p>
            </div>


<div className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>Objectives:</h1>

                             
            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    ResearchWritingInfo.ObjectiveList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>

            </div>

<div>
    <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Duration: </span>
                {ResearchWritingInfo.duration}
                </p>
            </div>

            <div>
             
              <Link href={'/shipping'} type='button' className='hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-lg'>Book Now</h1></Link>

            </div>

        </div>

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={ResearchWritingInfo.image} alt={ResearchWritingInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* Artificial Intelligence */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{ArtificialIntelligenceInfo.title}</h1>

            <div>
                <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Introduction: </span>
                {ArtificialIntelligenceInfo.introduction}
                </p>
            </div>


<div className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>Objectives:</h1>

                             
            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    ArtificialIntelligenceInfo.ObjectiveList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>

            </div>

<div>
    <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Duration: </span>
                {ArtificialIntelligenceInfo.duration}
                </p>
            </div>

            <div>
             
              <Link href={'/shipping'} type='button' className='hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-lg'>Book Now</h1></Link>

            </div>

        </div>

        <div className='p-0 md:p-5'>
            <img src={ArtificialIntelligenceInfo.image} alt={ArtificialIntelligenceInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* Students Skill Development */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{StudentsSkillDevelopmentInfo.title}</h1>

            <div>
                <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Introduction: </span>
                {StudentsSkillDevelopmentInfo.introduction}
                </p>
            </div>


<div className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>Objectives:</h1>

                             
            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    StudentsSkillDevelopmentInfo.ObjectiveList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>

            </div>

<div>
    <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Duration: </span>
                {StudentsSkillDevelopmentInfo.duration}
                </p>
            </div>

            <div>
             
              <Link href={'/shipping'} type='button' className='hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-lg'>Book Now</h1></Link>

            </div>

        </div>

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={StudentsSkillDevelopmentInfo.image} alt={StudentsSkillDevelopmentInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* Publication Process */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{PublicationProcessingInfo.title}</h1>

            <div>
                <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Introduction: </span>
                {PublicationProcessingInfo.introduction}
                </p>
            </div>


<div className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>Objectives:</h1>

                             
            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    PublicationProcessingInfo.ObjectiveList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>

            </div>

<div>
    <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Duration: </span>
                {PublicationProcessingInfo.duration}
                </p>
            </div>

            <div>
             
              <Link href={'/shipping'} type='button' className='hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-lg'>Book Now</h1></Link>

            </div>

        </div>

        <div className='p-0 md:p-5'>
            <img src={PublicationProcessingInfo.image} alt={PublicationProcessingInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* Research Capacity Building */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{ResearchCapacityBuildingInfo.title}</h1>

            <div>
                <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Introduction: </span>
                {ResearchCapacityBuildingInfo.introduction}
                </p>
            </div>


<div className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>Objectives:</h1>

                             
            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    ResearchCapacityBuildingInfo.ObjectiveList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>

            </div>

<div>
    <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Duration: </span>
                {ResearchCapacityBuildingInfo.duration}
                </p>
            </div>

            <div>
              <Link href={'/shipping'} type='button' className='hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-lg'>Book Now</h1></Link>
            </div>

        </div>

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={ResearchCapacityBuildingInfo.image} alt={ResearchCapacityBuildingInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* Research Capacity Building */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 order-1 lg:order-2'>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{AICTEInfo.title}</h1>

            {
                AICTEInfo.introduction &&
                (
                    <div>
                <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Introduction: </span>
                {AICTEInfo.introduction}
                </p>
            </div>
                )
                }


{

 AICTEInfo.ObjectiveList.length > 0 && (
    <div className='flex flex-col justify-start items-start gap-1'>
                            <h1 className='text-[22px] font-[600]'>Objectives:</h1>

                             
            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    AICTEInfo.ObjectiveList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                    ))
                }
            </div>

            </div>
 )

}

{
   AICTEInfo.duration && (
        <div>
    <p className="text-md md:text-lg">
                <span className="text-[22px] font-[600]">Duration: </span>
                {AICTEInfo.duration}
                </p>
            </div>
    )
}


<div className='flex flex-col gap-5'>
          {
            AICTEInfo.Links.map((item,i)=>(
                <Link key={i} href='https://neat.aicte-india.org/course-details/NEAT20222056_PROD_4' target='_blank' className='group px-3 py-2 border border-[#4970b3] rounded-xl flex justify-start items-center gap-3 cursor-pointer hover:bg-[#4970b3]/20 transition duration-300 ease-in-ou'>
          
           <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#4970b3] shadow-lg ring-4 ring-white flex-shrink-0`}>
                 <FaLink className="w-6 h-6 text-white" />
            </div>
          
          <h1 className='text-[15px] md:text-[18px]'>Research Writing and Case Development Training Program</h1>
          
          </Link>
            ))
          }
         </div>


        </div>

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={AICTEInfo.image} alt={AICTEInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* National */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
        <div className='flex flex-col justify-start items-start gap-5 '>
            <h1 className='text-2xl  md:text-4xl font-[600]'>{NationalInternationalInfo.title}</h1>

            <div className='flex flex-col justify-start items-start gap-1'>
                {
                    NationalInternationalInfo.NationalInternationalList.map((item,i)=>(
                         <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item?.para}</p>
                    ))
                }
            </div>

             <div>
              <Link href={'/shipping'} type='button' className='hover-button flex justify-center items-center gap-2 w-fit px-[20px] py-[10px] border-2 border-[#f27521] text-white bg-[#f27521] rounded-sm'><h1 className='text-lg'>Book Now</h1></Link>
            </div>

        </div>

        <div className='p-0 md:p-5'>
            <img src={NationalInternationalInfo.image} alt={NationalInternationalInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>


<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={ForeignCollaborationServicesInfo.image} alt={ForeignCollaborationServicesInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* StudentExchangePrograms */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='p-0 md:p-5'>
            <img src={StudentExchangeProgramsInfo.image} alt={StudentExchangeProgramsInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>


{/* TeacherTrainingServices */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={TeacherTrainingServicesInfo.image} alt={TeacherTrainingServicesInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* GeneralServicesInfo */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='p-0 md:p-5'>
            <img src={GeneralServicesInfo.image} alt={GeneralServicesInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* ManagementDevelopment */}
    {/* <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={ManagementDevelopmentInfo.image} alt={ManagementDevelopmentInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div> */}

{/* PatentAndDesign */}
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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
<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={CopyrightsInfo.image} alt={CopyrightsInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* NAACConsultancy */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='p-0 md:p-5'>
            <img src={NAACConsultancyInfo.image} alt={NAACConsultancyInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* NBAConsultancy */}
 <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={NBAConsultancyInfo.image} alt={NBAConsultancyInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div>

{/* Project */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='p-0 md:p-5'>
            <img src={ProjectInfo.image} alt={ProjectInfo.title} loading='lazy' className='w-full  border' />
        </div>
        

    </div> 

{/* ResearchConsultancies */}
   <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 lg:gap-0 bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto'>
       
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

        <div className='order-2 lg:order-1 p-0 md:p-5'>
            <img src={ResearchConsultanciesInfo.image} alt={ResearchConsultanciesInfo.title} loading='lazy' className='w-full border' />
        </div>
        

    </div> 
    </>
  )
}

export default Services