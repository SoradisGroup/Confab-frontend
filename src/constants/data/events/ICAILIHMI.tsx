import { GoDotFill } from "react-icons/go";
import { ConferenceSessionsList, ConvenerList, GuestList, ImportantDateList, InternationalAdvisoryList, ProgramCommitteeList, publicationsList } from "./ICAILIHMIList";
import { LuCalendar, LuCalendarDays, LuMail, LuMapPin, LuPhoneCall, LuTimer, LuUserRound } from "react-icons/lu";
import { Carousel } from "antd";
import Link from "next/link";
import { AiOutlineBank } from "react-icons/ai";
import { BsBank } from "react-icons/bs";



export const tabItems = [
    {
      key: '1',
      label: 'Title',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">

          <div className="w-full flex justify-center items-center gap-3">
            <div className="">
                <img src="/assets/images/ICAILIHMI/scopusLogo-600.png" alt="" loading="lazy" className="w-full max-w-[280px] object-content" />
              </div>
             <div className="">
               <img src="/assets/images/ICAILIHMI/1200x800-webp-e1751262053330.webp" alt="" loading="lazy" className="w-full max-w-[240px] object-content" />
             </div>
          </div>
          
          <div className="flex flex-col justify-center items-center space-y-8">
              <h2 className="text-2xl font-bold text-center">
                "International Conference on Artificial Intelligence Led Innovations in Human-Machine Interaction – 2025"
              </h2>
              <p className="text-lg text-center ">
                AI for All: Accessibility, Applications, and Advancements
              </p>
         
             <div className="max-w-[700px] h-full ">
              <img src="/assets/images/ICAILIHMI//e7a5e052f6084450982399d8f0f79d11-1-scaled.webp" alt="" loading="lazy" className="w-full h-full object-content" />
             </div>
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Conference Theme and Scope',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">

          <div className="w-full flex justify-center items-center gap-3">
            <div className="">
                <img src="/assets/images/ICAILIHMI/scopusLogo-600.png" alt="" loading="lazy" className="w-full max-w-[280px] object-content" />
              </div>
             <div className="">
               <img src="/assets/images/ICAILIHMI/1200x800-webp-e1751262053330.webp" alt="" loading="lazy" className="w-full max-w-[240px] object-content" />
             </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-8">
            <p className="text-md">The <span className="font-bold">International Conference on Artificial Intelligence Led Innovations in Human-Machine Interaction – 2025 (ICAILIHMI-2025)</span> aims to serve as a dynamic platform for scholars, researchers, technologists, and industry leaders to explore groundbreaking developments in AI and its transformative role in human-machine interactions.</p>
         
         <p className="text-md">
          Under the theme <span className="font-bold">“AI for All: Accessibility, Applications, and Advancements,”</span> the conference will spotlight inclusive AI innovations, real-world applications across sectors, and the future of human-centric machine learning technologies.<br/>
Discussions will span from intelligent user interfaces and ethical AI systems to adaptive technologies that bridge digital divides and empower diverse communities.
         </p>

         <div className="max-w-[700px] h-full ">
              <img src="/assets/images/ICAILIHMI/IMG-20250209-WA0016.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div>
         
          </div>
          </div>
      ),
    },
    {
      key: '3',
      label: 'Conference Tracks and Sessions',
      children: (

<div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">

          <div className="w-full flex justify-center items-center gap-3">
            <div className="">
                <img src="/assets/images/ICAILIHMI/scopusLogo-600.png" alt="" loading="lazy" className="w-full max-w-[280px] object-content" />
              </div>
             <div className="">
               <img src="/assets/images/ICAILIHMI/1200x800-webp-e1751262053330.webp" alt="" loading="lazy" className="w-full max-w-[240px] object-content" />
             </div>
          </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

  {
    ConferenceSessionsList.map((item,i)=>(
<div key={i} className="bg-[#f3f7fa] p-4 rounded-lg">
                <h1 className="text-md  font-medium mb-2 flex justify-start items-start gap-2 "><span>{i+1}.</span>{item.title}</h1>
                
                <div className='flex flex-col justify-start items-start gap-1'>
                                {
                                    item.sessionsList.map((item,i)=>(
                                         <p key={i} className='text-md  flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                                    ))
                                }
                  </div>
              </div>
    ))
  }
              
              </div>


          </div>

      ),
    },
    {
      key: '4',
      label: 'Location',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-6">

          <h1 className="text-xl md:text-2xl font-bold">VENUE</h1>

          <p className="text-md font-bold">NSHM Knowledge Campus, Durgapur, West Bengal</p>

          <p className="text-md"><span className="font-bold">Dates:</span> 22nd – 24th September, 2025 | Hybrid Mode</p>

 <div className="max-w-[700px] h-full mx-auto ">
              <img src="/assets/images/ICAILIHMI/College-Picture.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div>

          </div>
      ),
    },
    {
      key: '5',
      label: 'Important Date',
      children: (
      <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-6">
         <h1 className="text-xl md:text-2xl font-bold">Important Dates</h1>

         <div className="flex flex-col gap-4">
{
  ImportantDateList.map((item,i)=>(
<div key={i} className="flex justify-center items-center gap-4">

            <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#4970b3] shadow-lg ring-4 ring-white flex-shrink-0`}>
                {item.Icon && <item.Icon className="w-6 h-6 text-white" />}
            </div>

            <div className="w-full max-w-[500px] min-h-[100px] flex flex-col justify-center gap-2 rounded-2xl shadow-sm p-4 bg-[#f3f7fa]">
                  <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>

                  <div className="flex justify-start items-center gap-3 flex-wrap">
                    <p className="text-sm flex justify-center items-center gap-1 text-gray-600">
                      <LuCalendar className="text-[16px]"/> {item.date}
                    </p>
                   {
                    item.status && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
                            {item.status}
                      </span>
                    )
                   }
                  </div>
            </div>

           </div>
  ))
}
</div>

            <div className="text-center bg-gray-50 p-4 rounded-lg space-y-5">
              <p className="text-lg font-bold mb-4">
                Submit your abstract via email:
              </p>
              <Link href={'mailto:confab360degree@gmail.com'} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                confab360degree@gmail.com
              </Link>
            </div>


      </div>
      ),
    },
    {
      key: '6',
      label: 'Guest & Speakers',
      children: (

<div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
{
  GuestList.map((item,i)=>(
    <div key={i} className="space-y-8">
  <h3 className="text-xl font-bold">{item.title}</h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
               {
                item.GuestList.map((item,i)=>(
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 border border-zinc-200 rounded-lg text-center">
                <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden border ">
                  <img src={item.image} alt="" className="w-full h-full" />
                </div>
                <h5 className="text-lg font-semibold ">{item.name}</h5>
                <p className="text-md text-gray-600 mb-2">{item.role}I</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
                ))
               }
            </div>
          </div>
</div>
  ))
}
</div>


       
      ),
    },
    {
      key: '7',
      label: 'Convener',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
 <div className="w-full flex justify-center items-center gap-3">
            <div className="">
                <img src="/assets/images/ICAILIHMI/scopusLogo-600.png" alt="" loading="lazy" className="w-full max-w-[280px] object-content" />
              </div>
             <div className="">
               <img src="/assets/images/ICAILIHMI/1200x800-webp-e1751262053330.webp" alt="" loading="lazy" className="w-full max-w-[240px] object-content" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start gap-5">
            {
              ConvenerList.map((item,i)=>(
                <div key={i} className="max-w-[280px] bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-zinc-200 rounded-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden border">
                  {/* <UserCheck className="w-12 h-12 text-black" /> */}
                  <img src={item.image} alt="" loading="lazy" className="w-full h-full" />                </div>
                <div>
                  <h4 className="text-lg font-bold text-center">{item.name}</h4>
                  <p className="text-md text-center">{item.detail}</p>
                  
                  
                </div>
              </div>
            </div>
              ))
            }
            
          </div>
        </div>
      
      ),
    },
    {
      key: '8',
      label: 'Editorial Board',
      children: (
       <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold">International Advisory Board</h1>

<div className="flex flex-col gap-3">

  {
    InternationalAdvisoryList.map((item,i)=>(
      <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><span>{i+1}. </span>{item}</p>
    ))
    
  }

</div>
        <div>

        </div>
       </div>
      ),
    },
    {
      key: '9',
      label: 'Program Committee',
      children: (
         <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start gap-5">
            {
              ProgramCommitteeList.map((item,i)=>(
                <div key={i} className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-zinc-200 rounded-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden border">
                  {/* <UserCheck className="w-12 h-12 text-black" /> */}
                  <img src={item.image} alt="" loading="lazy" className="w-full h-full" />                </div>
                <div>
                  <h4 className="text-lg font-bold text-center">{item.name}</h4>
                  <p className="text-md text-center">{item.detail}</p>
                  
                  
                </div>
              </div>
            </div>
              ))
            }
            
          </div>
        </div>
      ),
    },
    {
      key: '10',
      label: 'Publication Outlets',
      children: (
      <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold">Publication Opportunities</h1>

        <Carousel
        autoplay={true}
        autoplaySpeed={4000}
        slidesToScroll={1}
        dots={true}
        arrows={false}
        draggable={true}
        >

          {
            publicationsList.map((item,i)=>(
<div key={i} className="w-full !flex justify-center items-center py-5">

   <div className="w-[280px] h-[300px] border rounded-sm flex flex-col justify-center items-center p-3 space-y-3">
          <div className="w-[200px]">
            <img src={item.image} alt="" loading="lazy" className="w-full h-full object-content"/>
          </div>

          <h1 className="text-md font-bold text-center">{item.title}</h1>
          {
            item.para && (
              <p className="text-sm text-center font-bold">{item.para}</p>
            )
          }
   </div>
  

          </div>
            ))
          }
          
        </Carousel>
        

        <p className="text-center "><span className="font-bold">Note:</span> We are in talks with other journals and proceedings.</p>
      </div>
      ),
    },
    {
      key: '11',
      label: 'Registration Fees',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
      {/* Important Dates Section */}
      <div className="">
        <div className="flex items-center gap-2 mb-4">
          <LuCalendar className="text-[#f27521] flex-shrink-0" size={20} />
          <h1 className="text-xl md:text-2xl font-bold">Important Dates</h1>
        </div>
        
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
             <span className="text-black font-bold">•</span>
            <p className="text-md"><b>Submission of Abstract :</b> <span>25<sup>th</sup> July 2025</span></p>
            
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-black font-bold">•</span>
            <p className="text-md"><b>Decision on Abstract :</b> <span>30<sup>th</sup> July 2025</span></p>
            
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-black font-bold">•</span>
            <p className="text-md"><b>Final Paper Submission :</b> <span>20<sup>th</sup> August 2025</span></p>
            
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-black font-bold">•</span>
            <span className="text-md"><b>Decision on Full Paper :</b> <span>28<sup>th</sup> August 2025</span></span>
            
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-black font-bold">•</span>
            <span className="text-md"><b>Last Date for Registration :</b> <span>10<sup>th</sup> September 2025</span></span>
            
          </div>
        </div>
      </div>

      {/* Early Bird Registration Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <LuTimer className="text-[#f27521]  flex-shrink-0" size={20} />
          <h1 className="text-xl md:text-2xl font-bold">
            Early Bird Registration (30<sup>th</sup> July – 1<sup>st</sup> September 2025)
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-100">
                  <th className="text-left p-3 font-semibold ">Category</th>
                  <th className="text-left p-3 font-semibold ">Fee</th>
                  <th className="text-left p-3 font-semibold ">Inclusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-200">
                <tr>
                  <td className="p-3">Academicians/Research Scholars (India) – Presenters</td>
                  <td className="p-3">INR 3000/-</td>
                  <td className="p-3">Per Paper (Includes 4 Authors)</td>
                </tr>
                <tr>
                  <td className="p-3">Students Only (No Faculty) – Presenters</td>
                  <td className="p-3">INR 1000/-</td>
                  <td className="p-3">Per Paper (Includes 3 Students)</td>
                </tr>
                <tr>
                  <td className="p-3">Industry Professionals</td>
                  <td className="p-3">INR 5000/-</td>
                  <td className="p-3">Per Paper (Includes 3 Authors)</td>
                </tr>
                <tr>
                  <td className="p-3">Academicians/Scholars (Foreign)</td>
                  <td className="p-3">USD 250</td>
                  <td className="p-3">All Included</td>
                </tr>
                <tr>
                  <td className="p-3">Listeners & Attendees (India)</td>
                  <td className="p-3">INR 500/-</td>
                  <td className="p-3">Access + Certificate</td>
                </tr>
                <tr>
                  <td className="p-3">Listeners & Attendees (Foreign)</td>
                  <td className="p-3">USD 50</td>
                  <td className="p-3">Access + Certificate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Late Registration Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <LuCalendar className="text-[#f27521]  flex-shrink-0" size={20} />
          <h1 className="text-xl md:text-2xl font-bold">
            Late Registration (From 1<sup>st</sup> September 2025)
          </h1>
        </div>

        <div className="bg-yellow-50 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="text-left p-3 font-semibold ">Category</th>
                  <th className="text-left p-3 font-semibold ">Fee</th>
                  <th className="text-left p-3 font-semibold ">Inclusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-200">
                <tr>
                  <td className="p-3">Academicians/Research Scholars (India) – Presenters</td>
                  <td className="p-3">INR 4000/-</td>
                  <td className="p-3">Per Paper (Includes 4 Authors)</td>
                </tr>
                <tr>
                  <td className="p-3">Students Only (No Faculty) – Presenters</td>
                  <td className="p-3">INR 1500/-</td>
                  <td className="p-3">Per Paper (Includes 3 Students)</td>
                </tr>
                <tr>
                  <td className="p-3">Industry Professionals</td>
                  <td className="p-3">INR 7000/-</td>
                  <td className="p-3">Per Paper (Includes 3 Authors)</td>
                </tr>
                <tr>
                  <td className="p-3">Academicians/Scholars (Foreign)</td>
                  <td className="p-3">USD 400</td>
                  <td className="p-3">All Included</td>
                </tr>
                <tr>
                  <td className="p-3">Listeners & Attendees (India)</td>
                  <td className="p-3">INR 500/-</td>
                  <td className="p-3">Access + Certificate</td>
                </tr>
                <tr>
                  <td className="p-3">Listeners & Attendees (Foreign)</td>
                  <td className="p-3">USD 50</td>
                  <td className="p-3">Access + Certificate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Registration Fee Includes Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <LuUserRound className="text-[#f27521]  flex-shrink-0" size={20} />
          <h1 className="text-xl md:text-2xl font-bold">Registration Fee Includes (Presenters)</h1>
        </div>

        <div className="">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Pre-conference Workshop and Certificate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Presentation Certificate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Access to Roundtable Discussion by Corporate Experts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Certificate for All Authors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>ISBN Proceedings (Abstract)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Access to All the Sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Conference Kits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Turnitin Plagiarism Report</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Reviewers Report</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Food/Refreshments at the Venue</span>
            </li>
          </ul>
        </div>
      </div>


 <div>
        <div className="flex items-center gap-2 mb-4">
          <LuUserRound className="text-[#f27521]  flex-shrink-0" size={20} />
          <h1 className="text-xl md:text-2xl font-bold">Registration Fee Includes (Listeners/Attendees)</h1>
        </div>

        <div className="">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Pre-conference Workshop and Certificate</span>
            </li>
             <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Access to Roundtable Discussion by Corporate Experts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>ISBN Proceedings (Abstract)</span>
            </li>
             <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Access to Day 1 Keynote Speeches</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              <span>Conference Kits</span>
            </li>
            </ul>

            </div>
            </div>


                    <h1 className="text-red-600 text-md font-bold text-center">Note: Publication charges (if any) are Not Included in Registration Fees.</h1>
        
<div className=""> 
        <div className="flex items-center gap-2 mb-6">
          <BsBank className="text-[#f27521]  flex-shrink-0" size={20}/>
          <h1 className="text-xl md:text-2xl font-bold">Bank Account Details</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-3">
 <div className="w-full bg-white border border-gray-200 rounded-lg p-6 mb-8">
          
            <div className="w-full space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">Beneficiary Name</span>
                <span className=" flex-1 text-right">CONFAB 360 DEGREE</span>
              </div>
              
              <div className="w-full flex justify-between items-start">
                <span className="font-semibold  w-40">Bank Name</span>
                <span className=" flex-1 text-right">ICICI BANK, Mayapuri, Delhi, India</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">Account Number</span>
                <span className=" flex-1 text-right">181805001263</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">Account Type</span>
                <span className=" flex-1 text-right">Current Account</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">Branch</span>
                <span className=" flex-1 text-right">Mayapuri, Delhi, India</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">IFSC Code</span>
                <span className=" flex-1 text-right">ICIC0001818</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">SWIFT Code <span className="text-sm text-gray-500">(For Foreign Payments)</span></span>
                <span className=" flex-1 text-right">ICICINBBCTS</span>
              </div>
            </div>
          
        </div>
{/* UPI Payment Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="text-lg font-bold">Scan to Pay via UPI</h3>
          </div>

          <div className="flex justify-center mb-4">
            <div className="w-48 h-48 bg-white border border-zinc-200 rounded-lg flex items-center justify-center overflow-hidden">
              {/* QR Code Placeholder - In real implementation, you'd use a QR code library */}
             <img src="/assets/images/ICAILIHMI/Payment.png" alt="" className="w-full h-full"/>
            </div>
          </div>

          <p className="text-sm max-w-md mx-auto">
            Click the QR code to open the payment page or scan using any UPI-enabled app.
          </p>
          </div>

        </div>

       
</div>
        </div>
      ),
    },
    {
      key: '12',
      label: 'Contact Detail',
      children: (

        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
<div>
                        <img src='/assets/images/company/logo.webp' alt="" className='w-full  max-w-[230px] md:w-[350px]'/>
                    </div>

                    <div className="space-y-3 text-black">
                      <div className="flex items-center space-x-2">
                       <LuPhoneCall className="text-[#f27521]"/> <span className="text-md font-[600]">+91-7011560479</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <LuMail className="text-[#f27521]"/><span className="text-md font-[600]">info@confab360degree.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <LuMapPin className="text-[#f27521]"/><span className="text-md font-[600]">Delhi, Mumbai, India</span>
                      </div>
                    </div>
        </div>
      )
    },
    {
      key: '13',
      label: 'Submission Guidelines',
      children: (
       <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold">Author Ethical Guidelines</h1>

 <div className="space-y-4">
          <p className="text-md">1. <span className="font-bold">Originality of Submission:</span> Authors must submit only original work not under consideration elsewhere.</p>
          <p className="text-md">2. <span className="font-bold">Plagiarism Limit:</span> The manuscript should have less than 10% similarity to other works.</p>
          <p className="text-md">3. <span className="font-bold">Prohibition on Generative AI Content:</span> Generative AI tools for content creation are not allowed. However, language editing tools are permitted if clearly disclosed.</p>
          <p className="text-md inline-flex justify-start items-start flex-wrap gap-1">
  4. <span className="font-bold"> Research Ethics Compliance:</span> Authors must follow{' '}
  <Link href="https://publicationethics.org/" target="_blank" rel="noopener noreferrer">
    COPE standards
  </Link>{' '}
   on research ethics and integrity.
</p>
 </div>
       </div>
      ),
    },
    {
      key: '14',
      label: 'Review process and ethic statements',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <div className="p-2 bg-gradient-to-br from-gray-50 to-gray-100 border border-zinc-200 rounded-md shadow-sm space-y-3">
<h1 className="text-xl md:text-2xl font-bold">Peer Review Process</h1>

<p className="text-md">Each manuscript presented in the conference will undergo a <b>double-blind review</b> process.</p>
<p className="text-md">Initially, all manuscripts will be screened using <b>Turnitin</b> software. <span className="text-red-600">Plagiarism must be strictly less than 10%.</span></p>
        </div>

        <div className="p-2 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-800/10 rounded-md shadow-sm space-y-3">
<h1 className="text-xl md:text-2xl text-yellow-600 font-bold">First Round of Review</h1>

<p className="text-md">Reviewers will evaluate the manuscript based on the following criteria:</p>

<div>
  <p className='text-md flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />Literature review and theoretical framework</p>
  <p className='text-md flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />Contribution to the field</p>
  <p className='text-md flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />Research methodology (quantitative/qualitative)</p>
  <p className='text-md flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />Results and discussion</p>
  <p className='text-md flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />Alignment between objectives and conclusions</p>
  <p className='text-md flex justify-start items-start gap-2'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />Formatting and overall structure</p>
</div>

<p className="text-md">Reviewers will recommend one of the following outcomes: <b>Accept, Minor Revision, Major Revision,</b> or <b>Reject</b>.</p>

<p className="text-md">Authors must revise the manuscript according to the reviewers’ comments before proceeding to the next stage.</p>
        </div>

        <div className="p-2 bg-gradient-to-br from-green-50 to-green-100 border border-green-800/10 rounded-md shadow-sm space-y-3">
<h1 className="text-xl md:text-2xl text-green-800 font-bold">Second Round of Review</h1>

<p className="text-md">Editors and reviewers will verify whether all feedback from the first round has been adequately addressed. Based on this, the manuscript may be accepted or returned for further revision.</p>
<p className="text-md">The final version of the manuscript will again undergo plagiarism screening via Turnitin to confirm <span className="text-red-600">less than 10% similarity</span>.</p>

        </div>

        </div>
      ) 
    }
  ];