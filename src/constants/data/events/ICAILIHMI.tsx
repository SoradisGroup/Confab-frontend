import { GoDotFill } from "react-icons/go";
import { ERList, SCIntlList, ConferenceSessionsList, ConvenerList, Coconvenerlist, GuestList, ImportantDateList, InternationalAdvisoryList, ProgramCommitteeList, publicationsList, PatronList, ChiefPatronList } from "./ITNSSEM";
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

          <div className="w-full flex flex-col items-center gap-8">

  {/* Top Single Logo */}
  <div className="flex flex-col items-center">
    <img 
      src="/assets/images/ITNSSEM/Audisankaralogo.png" 
      alt="Audisankara College" 
      loading="lazy" 
      className="w-full max-w-[120px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Audisankara Deemed to be University, Nellore
    </p>
  </div>

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/ITNSSEM/INTIlogo.png" 
        alt="INTI University" 
        loading="lazy" 
        className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        INTI University, Malaysia
      </p>
    </div>

    {/* Logo 2 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/logo/confab.png" 
        alt="Partner Institute" 
        loading="lazy" 
        className="w-full max-w-[320px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        Confab 360 Degree, New Delhi
      </p>
    </div>

    </div>
    {/* Co-Organizers Label */}
    <p className="text-base font-semibold text-center">
      Co-Organizer (s)
    </p>

</div>
          
          <div className="flex flex-col justify-center items-center space-y-8">
              <h2 className="text-2xl font-bold text-center">
                "Intelligent Technologies for Networked Systems and Sustainable Energy Management in alignment with UNSDGs - 2026"
              </h2>
             {/* <p className="text-lg text-center ">
               AI for All: Accessibility, Applications, and Advancements
            </p> */}
         
             <div className="max-w-[700px] h-full ">
              <img src="/assets/images/ITNSSEM/college.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div>
             
          </div>
          <div className="flex flex-col justify-left items-left space-y-4">
              <h2 className="text-medium font-bold text-left">
              About the Institution: Audisankara Deemed to be University, Nellore
              </h2>
              <p className="text-medium text-justify">
               Audisankara Group of Institutions, led by Dr. Vanki Penchalaiah, is dedicated to providing quality education to individuals regardless of race, creed, or gender. The group consists of Sri Prasuna College of Law, established in 1998, and Audisankara College of Engineering & Technology (ASCET), established in 2001. ASCET, a prestigious institution known for its academic excellence, was established in the year 2001 to promote quality technical education in rural areas. With state-of-the-art facilities and a conducive learning environment, ASCET has grown from an initial intake of 180 students to now accommodating over 10,000 students over the course of two decades. The college emphasizes holistic learning and offers well-equipped laboratories to foster a sustainable future. ASCET takes immense pride as the first autonomous institution in the region, with prestigious NBA and NAAC-A+ accreditations. Our unwavering dedication to excellence reflects in our top-notch infrastructure, esteemed faculty, and innovative teaching methods. Affiliated with Jawaharlal Nehru Technological University, Anantapuramu, and approved by AICTE, we commit to delivering exceptional education and fostering a nurturing learning environment. We are thrilled to announce the expansion of our Atal Community Innovation Center (ACIC). This hub promotes innovation, entrepreneurship, and industry collaboration, providing budding talents with a nurturing space to ideate and develop impactful solutions. Empowering the entrepreneurial spirit within our students, this initiative drives positive change in society and beyond.
              </p>

              <h2 className="text-medium font-bold text-left">
              About Confab 360 Degree, India
              </h2>
              <p className="text-medium text-justify">
              Confab 360 Degree is a globally recognized platform dedicated to empowering professionals, researchers, and institutions by bridging the gap between academia and industry. Our mission is to foster innovation, promote high-quality research, and provide advanced training opportunities aligned with global trends and industry requirements. Confab 360 Degree is an IAF-ISO certified company. Confab's training program is also affiliated with AICTE-NEAT Cell and Management & Entrepreneurship and Professional Skills Council (https://www.mepsc.in/ )
              Confab 360 Degree is an internationally oriented platform committed to fostering meaningful connections between academia, industry, and research communities through a holistic and forward-thinking approach. The organization focuses on empowering students, educators, professionals, and institutions by providing opportunities for knowledge exchange, skill enhancement, and collaborative growth. By organizing international conferences, seminars, workshops, and certification programs, Confab 360 Degree creates a dynamic environment where participants can explore emerging trends, share innovative ideas, and engage with experts from diverse fields. Its initiatives are designed not only to enhance technical and professional competencies but also to encourage interdisciplinary learning and critical thinking. With a strong emphasis on research, innovation, and real-world application, Confab 360 Degree plays a vital role in bridging the gap between theoretical education and industry expectations. Furthermore, it supports sustainable development and global perspectives by promoting inclusive participation and continuous learning, enabling individuals and organizations to adapt effectively to the rapidly evolving demands of the modern professional landscape.
              </p>

              <h2 className="text-medium font-bold text-left">
              INTI International University, Malaysia
              </h2>
              <p className="text-medium text-justify">
              INTI International University is one of Malaysia’s leading private universities, situated on a sprawling 82-acre campus in the vibrant town of Putra Nilai, just an hour south of Kuala Lumpur. Surrounded by beautifully landscaped grounds, the university offers an ideal environment for both academic and personal growth, featuring state-of-the-art facilities and modern amenities. With a proud history spanning 40 years, INTI International University & Colleges has established itself as a hub of educational excellence, producing over 95,000 graduates across its four campuses. Today, the university hosts a diverse community of more than 16,000 students from Malaysia and around the world, fostering a rich cross-cultural learning environment. Through innovative teaching methods and strong industry partnerships, INTI equips students to thrive in a technology-driven world. Our programmes prepare students to work with smart technologies, analyse data for informed decision-making, and understand the transformative technologies shaping industries. At the same time, we emphasize professional skills such as adaptability, collaboration in multidisciplinary teams, problem-solving, and a commitment to lifelong learning. By empowering students to explore their passions and realize their potential, INTI is redefining education and preparing graduates for success in a rapidly evolving global landscape. 
              INTI's commitment to excellence is reflected in its certifications, including ISO 9001:2015 and ISO 45001:2018, underscoring our dedication to delivering world-class education while prioritizing student safety and well-being.
              In the QS World University Rankings 2026, INTI International University advanced to an impressive rank of 509 and achieved a rank of 122 in the QS World University Rankings: Asia 2026. We are also ranked in the QS World University Rankings by Subject 2026 in the:
            </p>
            <ul className="list-disc list-inside space-y-2 text-md">
                <li>Top 300 for Business</li>
                <li>Top 375 for Accounting & Finance</li>
                <li>Top 450 for Computer Science</li>
                <li>Top 450 for Social Sciences & Management</li>
              </ul>             
            

            </div>
        </div>
      ),
    },

{
  key: '2',
label: 'Organizing Committee',

children: (
  <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-10">

    <div className="w-full flex flex-col items-center gap-8">

  {/* Top Single Logo */}
  <div className="flex flex-col items-center">
    <img 
      src="/assets/images/ITNSSEM/Audisankaralogo.png" 
      alt="Audisankara College" 
      loading="lazy" 
      className="w-full max-w-[120px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Audisankara Deemed to be University, Nellore
    </p>
  </div>

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/ITNSSEM/INTIlogo.png" 
        alt="INTI University" 
        loading="lazy" 
        className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        INTI University, Malaysia
      </p>
    </div>

    {/* Logo 2 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/logo/confab.png" 
        alt="Partner Institute" 
        loading="lazy" 
        className="w-full max-w-[320px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        Confab 360 Degree, New Delhi
      </p>
    </div>

    </div>
    {/* Co-Organizers Label */}
    <p className="text-base font-semibold text-center">
      Co-Organizer (s)
    </p>

</div>

    {/* ===== CHIEF PATRON ===== */}
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-left">
        Chief Patron
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          ChiefPatronList.map((item, i) => (
            <div key={i} className="max-w-[280px] bg-gradient-to-br from-gray-50 to-gray-100 p-6 border rounded-lg">

              <div className="flex flex-col items-center space-y-4">
                <div className="w-52 h-52 rounded-full overflow-hidden border">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-md text-gray-600">{item.detail}</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>

    {/* ===== PATRON ===== */}
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-left">
        Patron
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          PatronList.map((item, i) => (
            <div key={i} className="max-w-[280px] bg-gradient-to-br from-gray-50 to-gray-100 p-6 border rounded-lg">

              <div className="flex flex-col items-center space-y-4">
                <div className="w-52 h-52 rounded-full overflow-hidden border">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-md text-gray-600">{item.detail}</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>

    {/* ===== CONVENER ===== */}
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-left">
        Convener
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          ConvenerList.map((item, i) => (
            <div key={i} className="max-w-[280px] bg-gradient-to-br from-gray-50 to-gray-100 p-6 border rounded-lg">

              <div className="flex flex-col items-center space-y-4">
                <div className="w-52 h-52 rounded-full overflow-hidden border">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-md text-gray-600">{item.detail}</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>

    {/* ===== CO-CONVENER ===== */}
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-left">
        Co-Convener
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          Coconvenerlist.map((item, i) => (
            <div key={i} className="max-w-[280px] bg-gradient-to-br from-gray-50 to-gray-100 p-6 border rounded-lg">

              <div className="flex flex-col items-center space-y-4">
                {/* <div className="w-52 h-52 rounded-full overflow-hidden border">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div> */}

                <div className="text-left">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-md text-gray-600">{item.detail}</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>

  </div>
      ),
    },


    {
      key: '3',
      label: 'Conference Theme and Scope',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">

          <div className="w-full flex flex-col items-center gap-8">

  {/* Top Single Logo */}
  <div className="flex flex-col items-center">
    <img 
      src="/assets/images/ITNSSEM/Audisankaralogo.png" 
      alt="Audisankara College" 
      loading="lazy" 
      className="w-full max-w-[120px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Audisankara Deemed to be University, Nellore
    </p>
  </div>

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/ITNSSEM/INTIlogo.png" 
        alt="INTI University" 
        loading="lazy" 
        className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        INTI University, Malaysia
      </p>
    </div>

    {/* Logo 2 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/logo/confab.png" 
        alt="Partner Institute" 
        loading="lazy" 
        className="w-full max-w-[320px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        Confab 360 Degree, New Delhi
      </p>
    </div>

    </div>
    {/* Co-Organizers Label */}
    <p className="text-base font-semibold text-center">
      Co-Organizer (s)
    </p>

</div>

          <div className="flex flex-col justify-center items-center space-y-8">
            <p className="text-md">The <span className="font-bold">Intelligent Technologies for Networked Systems and Sustainable Energy Management in alignment with UNSDGs – 2026 (ITNSSEM 2026)</span> aims to integrate advancements in networked computing, data analytics, and intelligent technologies with modern energy management and sustainable development practices.
This interdisciplinary conference will bring together experts from computing, engineering, and management domains to address real-world challenges in energy optimization, smart infrastructure, and sustainable systems.
</p>
         
         <p className="text-md">
          The conference emphasizes the role of Artificial Intelligence, IoT, and data-driven decision-making in improving efficiency, reducing carbon emissions, and enabling intelligent control in energy systems.<br/>
         </p>

{/* Objectives Section */}
<div className="w-full max-w-3xl text-left self-start">
  <h2 className="text-lg font-semibold text-red-600 mb-2">Objectives</h2>
  
  <ul className="list-disc list-inside space-y-2 text-md">
    <li>To explore intelligent technologies for energy optimization and control systems</li>
    <li>To integrate data analytics and networking with sustainable energy solutions</li>
    <li>To promote research in smart grids, microgrids, and green infrastructure</li>
    <li>To analyze techno-economic feasibility of modern energy systems</li>
    <li>To bridge the gap between technology and management strategies</li>
  </ul>
</div>


         <div className="max-w-[700px] h-full ">
              <img src="/assets/images/ITNSSEM/college2.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div>
         
          </div>
          </div>
      ),
    },
    {
      key: '4',
      label: 'Conference Tracks and Sessions',
      children: (

<div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">

          <div className="w-full flex flex-col items-center gap-8">

  {/* Top Single Logo */}
  <div className="flex flex-col items-center">
    <img 
      src="/assets/images/ITNSSEM/Audisankaralogo.png" 
      alt="Audisankara College" 
      loading="lazy" 
      className="w-full max-w-[120px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Audisankara Deemed to be University, Nellore
    </p>
  </div>

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/ITNSSEM/INTIlogo.png" 
        alt="INTI University" 
        loading="lazy" 
        className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        INTI University, Malaysia
      </p>
    </div>

    {/* Logo 2 */}
    <div className="flex flex-col items-center">
      <img 
        src="/assets/images/logo/confab.png" 
        alt="Partner Institute" 
        loading="lazy" 
        className="w-full max-w-[320px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        Confab 360 Degree, New Delhi
      </p>
    </div>

    </div>
    {/* Co-Organizers Label */}
    <p className="text-base font-semibold text-center">
      Co-Organizer (s)
    </p>

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
      key: '5',
      label: 'Location',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-6">

          <h1 className="text-xl md:text-2xl font-bold">VENUE</h1>

          <p className="text-xl font-bold">Audisankara Deemed to be University, Nellore</p>

          <p className="text-md"><span className="font-bold">Dates:</span> 10th August (Monday) – 11th August (Tuesday), 2026</p>

 <div className="max-w-[700px] h-full mx-auto ">
              <img src="/assets/images/ITNSSEM/college.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div>

          </div>
      ),
    },
    {
      key: '6',
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
                Submit your abstract here:
              </p>
              <Link href={'Link'} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                It will be through Microsoft CMT portal
              </Link>
            </div>


      </div>
      ),
    },
    {
      key: '7',
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
      key: '8',
      label: 'Scientific Committee (International)',
      children: (
       <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold">Scientific Committee (International)</h1>

<div className="flex flex-col gap-3">

  {
    SCIntlList.map((item,i)=>(
      <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><span>{i+1}. </span>{item}</p>
    ))
    
  }

</div>
          </div>
      ),
    },
      
    {
      key: '9',
      label: 'Editorial Board (India)',
      children: (
       <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold">Editorial Board (India)</h1>

<div className="flex flex-col gap-3">

  {
    InternationalAdvisoryList.map((item,i)=>(
      <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><span>{i+1}. </span>{item}</p>
    ))
    
  }

</div>
          </div>
      ),
    },



    {
      key: '15',
      label: 'Editorial and Review Board (Internal)',
      children: (
       <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold">Editorial and Review Board (Internal)</h1>

<div className="flex flex-col gap-3">

  {
    ERList.map((item,i)=>(
      <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><span>{i+1}. </span>{item}</p>
    ))
    
  }

</div>
          </div>
      ),
    },



    {
      
      /* ===== Porgram Committee SECTION ===== */
      key: '10',
      label: 'Coordinators',
      children: (
         <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start gap-5">
            {
              ProgramCommitteeList.map((item,i)=>(
                <div key={i} className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-zinc-200 rounded-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden border">
                  {/* <UserCheck className="w-12 h-12 text-black" /> */}
                  <img src={item.image} alt="" loading="lazy" className="w-full h-full" />                
                </div>
                
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
    
    /* ===== Publication Outlets SECTION ===== */
    {
      key: '11',
      label: 'Publication Outlets',
      children: ( <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8"> <h1 className="text-xl md:text-2xl font-bold">Publication Opportunities</h1> <Carousel autoplay={true} autoplaySpeed={4000} slidesToScroll={1} dots={true} arrows={false} draggable={true} >

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
        

        <p className="text-center "><span className="font-bold">Note:</span> We are in talks with other journal outlets as well.</p>
      </div>
      ),
    },
    
    /* ===== Registration Fees SECTION ===== */
    {
      key: '12',
      label: 'Registration Fees',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
      {/* Important Dates Section
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
      </div> */}

      {/* Early Bird Registration Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <LuTimer className="text-[#f27521]  flex-shrink-0" size={20} />
          <h1 className="text-xl md:text-2xl font-bold">
            {/* Registratoin Fees (30<sup>th</sup> July – 1<sup>st</sup> September 2025) */}
            Registration Fees
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
                  <td className="p-4">
                    Category 1 – UG/PG students <br />
                    (Single Author – 1 member – 1 certificate) <br />
                    (Combination of Student/Faculty/Research Scholar/Industry Participant) <br />
                    (ONLINE/VIRTUAL PRESENTATION)
                  </td>
                  <td className="p-3">INR 2000/-</td>
                  <td className="p-3">Per Author</td>
                </tr>
                 <tr>
                  <td className="p-4">
                    Category 2 – UG/PG students (Group of 2 to 5 members – 2 to 5 certificates) <br />
                    (Combination of Student/Faculty/Research Scholar/Industry Participant) <br />
                    (ONLINE/VIRTUAL PRESENTATION)
                  </td>
                  <td className="p-3">INR 2500/-</td>
                  <td className="p-3">Per Team</td>
                </tr>
                 <tr>
                  <td className="p-4">
                    Category 3 – UG/PG students (Group of 6 to 7 members – 2 to 7 certificates) <br />
                    (Combination of Student/Faculty/Research Scholar/Industry Participant) <br />
                    (ONLINE/VIRTUAL PRESENTATION)
                  </td>
                  <td className="p-3">INR 2500/-</td>
                  <td className="p-3">Per Team</td>
                </tr>
                 <tr>
                  <td className="p-4">
                    Category 4 – Student/Faculty/Research Scholar/Industry Participant <br />
                    (Single Author 1 member – 1 certificate) <br />
                     (Only for those who attend physically in our campus) <br />
                  </td>
                  <td className="p-3">INR 2500/-</td>
                  <td className="p-3">Per Author</td>
                 </tr>
                 <tr>
                  <td className="p-4">
                    Category 5 – Students Faculties/Research Scholars/Industry Participants <br />
                    (Group of 2 to 5 members – 2 to 5 certificates) <br />
                    (Combination of Student/Faculty/Research Scholar/Industry Participant) <br />
                    (Only for those you attend physically in our campus)
                  </td>
                  <td className="p-3">INR 3250/-</td>
                  <td className="p-3"></td>
                </tr>
                <tr>
                  <td className="p-4">
                    Category 6 – Students Faculties/Research Scholars/Industry Participants <br />
                    (Group of 6 to 7 members – 6 to 7 certificates) <br />
                    (Combination of Student/Faculty/Research Scholar/Industry Participant) <br />
                    (Only for those you attend physically in our campus)
                  </td>
                  <td className="p-3">INR 3550/-</td>
                  <td className="p-3"></td>
                </tr>
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Late Registration Section
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
      </div> */}

      {/* Registration Fee Includes Section
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


<div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400">
            <p className="text-sm text-orange-700">
              <span className="font-semibold">Note:</span> Publication charges (if any) are Not Included in Registration Fees.
            </p>
          </div>
         */}


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
                <span className=" flex-1 text-right">AUDISANKARA RESEARCH AND EDUCATIONAL INSTITUTE</span>
              </div>
              
              <div className="w-full flex justify-between items-start">
                <span className="font-semibold  w-40">Bank Name</span>
                <span className=" flex-1 text-right">AXIS BANK</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">Account Number</span>
                <span className=" flex-1 text-right">925010035781364</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">Account Type</span>
                <span className=" flex-1 text-right">Current Account</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">Branch</span>
                <span className=" flex-1 text-right">VEDAYAPALEM</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">IFSC Code</span>
                <span className=" flex-1 text-right">UTIB0003289</span>
              </div>
              
              {/* <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">SWIFT Code <span className="text-sm text-gray-500">(For Foreign Payments)</span></span>
                <span className=" flex-1 text-right">ICICINBBCTS</span>
              </div> */}
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
             <img src="/assets/images/ICAILIHMI/xx.png" alt="" className="w-full h-full"/>
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
      key: '13',
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
      key: '14',
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
      key: '16',
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