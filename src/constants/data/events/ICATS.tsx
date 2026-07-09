import { GoDotFill } from "react-icons/go";
import { ERList, SCIntlList, ConferenceSessionsList, ConvenerList, Coconvenerlist, GuestList, ImportantDateList, InternationalAdvisoryList, ProgramCommitteeList, publicationsList, PatronList, ChiefPatronList } from "./ICATS/ICATS";
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

  {/* Top Single Logo
  <div className="flex flex-col items-center">
    <img 
      src="/assets/images/IMCAITCSBM/MAHE Logo.webp" 
      alt="Manipal Institute of Higher Academy (MAHE), Bangalore" 
      loading="lazy" 
      className="w-full max-w-[280px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Department of Commerce, Manipal Academy of Higher Education (MAHE), Bangalaore
    </p>
  </div> */}

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    {/* <div className="flex flex-col items-center">
      <img 
        src="/assets/images/IMCAITCSBM/INTIlogo.png" 
        alt="INTI University" 
        loading="lazy" 
        className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        INTI University, Malaysia
      </p>
    </div> */}

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
      Organizer
    </p>

</div>
          
          <div className="flex flex-col justify-center items-center space-y-8">
              <h2 className="text-2xl font-bold text-center">
                "International Conference on AI, Trade and Sustainability-2026"
              </h2>
             {/* <p className="text-lg text-center ">
               AI for All: Accessibility, Applications, and Advancements
            </p> */}
         
             {/* <div className="max-w-[700px] h-full ">
              <img src="/assets/images/IMCAITCSBM/college.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div> */}
             
          </div>
          <div className="flex flex-col justify-left items-left space-y-4">
              {/* <h2 className="text-medium font-bold text-left">
              About the Institution: MAHE, Bangalore
              </h2>
              <p className="text-medium text-justify">
               Manipal Academy of Higher Education (MAHE) stands as a premier institution fostering excellence in higher
education and research. Renowned for its multidisciplinary approach, MAHE bridges diverse academic
domains-ranging from health sciences and engineering to management and humanities. Its robust research
ecosystem promotes innovation, collaboration, and realworld impact, empowering faculty and students to address
complex global challenges. Interdisciplinary centers, international partnerships, and a strong focus on
experiential learning create a vibrant environment for knowledge creation. With a commitment to academic rigor,
sustainability, and societal relevance, MAHE continues to shape thought leaders and researchers who drive transformative change across sectors.
              </p> */}


              {/* <h2 className="text-medium font-bold text-left">
              About MAHE, Bangalore
              </h2>
              <p className="text-medium text-justify">
               MAHE Bengaluru is an off-campus centre of MAHE, Manipal and, thrives in providing holistic education to students with
state-of-the-art infrastructure, well-qualified experienced faculty, and mentors.
The programmes offered at MAHE Off Campus Centre, Bengaluru are diverse and contemporary. Engineering to Art,
Design and Technology, Commerce, Management, Law, Liberal Arts and Regenerative Medicine. The possibilities
and opportunities are unlimited at MAHE Bengaluru.
With over 9,500 students in the campus, the campus offers a vibrant and a diverse gathering of students from across the country.
              </p> */}

{/* <h2 className="text-medium font-bold text-left">
              About Department of Commerce, MAHE Bengaluru
              </h2>
              <p className="text-medium text-justify">
               The Department of Commerce at MAHE Bengaluru is dedicated to preparing students for future-ready careers
through specialized programs in areas such as Business Analytics, FinTech, and more. Renowned for its academic
excellence, the department emphasizes a holistic approach to education by integrating theoretical knowledge with
practical exposure.
With a diverse student body from across the country and beyond, the department thrives on inclusivity and
collaboration. Students are encouraged to balance academics with active participation in sports, cultural events,
and extracurricular activities, fostering all-around development.
Our vibrant student community takes pride in organizing and participating in club activities and intercollegiate tests,
showcasing leadership and creativity. Guided by the vision of creating opportunities, the Department of Commerce
empowers students to excel in academics, extracurriculars, and beyond.
              </p> */}


              <h2 className="text-medium font-bold text-left">
              About Confab 360 Degree, India
              </h2>
              <p className="text-medium text-justify">
              Confab 360 Degree is a globally recognized platform dedicated to empowering professionals, researchers, and institutions by bridging the gap between academia and industry. Our mission is to foster innovation, promote high-quality research, and provide advanced training opportunities aligned with global trends and industry requirements. Confab 360 Degree is an IAF-ISO certified company. Confab's training program is also affiliated with AICTE-NEAT Cell and Management & Entrepreneurship and Professional Skills Council (https://www.mepsc.in/ )
              Confab 360 Degree is an internationally oriented platform committed to fostering meaningful connections between academia, industry, and research communities through a holistic and forward-thinking approach. The organization focuses on empowering students, educators, professionals, and institutions by providing opportunities for knowledge exchange, skill enhancement, and collaborative growth. By organizing international conferences, seminars, workshops, and certification programs, Confab 360 Degree creates a dynamic environment where participants can explore emerging trends, share innovative ideas, and engage with experts from diverse fields. Its initiatives are designed not only to enhance technical and professional competencies but also to encourage interdisciplinary learning and critical thinking. With a strong emphasis on research, innovation, and real-world application, Confab 360 Degree plays a vital role in bridging the gap between theoretical education and industry expectations. Furthermore, it supports sustainable development and global perspectives by promoting inclusive participation and continuous learning, enabling individuals and organizations to adapt effectively to the rapidly evolving demands of the modern professional landscape.
              </p>

            </div>
        </div>
      ),
    },

{
      key: '2',
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
                <p className="text-md text-gray-600 mb-2">{item.role}</p>
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
  key: '3',
label: 'Organizing Committee',

children: (
  <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-10">

    <div className="w-full flex flex-col items-center gap-8">

  {/* Top Single Logo
  <div className="flex flex-col items-center">
    <img 
      // src="/assets/images/ITNSSEM/Audisankaralogo.png" 
      alt="MAHE, Bangalore" 
      loading="lazy" 
      className="w-full max-w-[280px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Manipal Institute of Higher Academy, Bangalaore
    </p>
  </div> */}

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    {/* <div className="flex flex-col items-center">
      <img 
        src="/assets/images/ITNSSEM/INTIlogo.png" 
        alt="INTI University" 
        loading="lazy" 
        className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        INTI University, Malaysia
      </p>
    </div> */}

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
      Organizer
    </p>

</div>

    {/* ===== CHIEF PATRON ===== */}
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-left">
        Conference Chair
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
    {/* <div className="space-y-6">
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
    </div> */}

    {/* ===== CONVENER ===== */}
    {/* <div className="space-y-6">
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
    </div> */}

    {/* ===== CO-CONVENER ===== */}
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-left">
        {/* Co-Convener */}
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
      key: '4',
      label: 'Conference Description and Scope',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">

          <div className="w-full flex flex-col items-center gap-8">

  {/* Top Single Logo */}
  {/* <div className="flex flex-col items-center">
    <img 
      // src="/assets/images/ITNSSEM/Audisankaralogo.png" 
      alt="Manipal Institute of Higher Academy (MAHE), Bangalore" 
      loading="lazy" 
      className="w-full max-w-[280px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Manipal Academy of Higher Education, Bangalore
    </p>
  </div> */}

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    {/* <div className="flex flex-col items-center">
      <img 
        src="/assets/images/ITNSSEM/INTIlogo.png" 
        alt="INTI University" 
        loading="lazy" 
        className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        INTI University, Malaysia
      </p>
    </div> */}

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
      Organizer
    </p>

</div>

          <div className="flex flex-col justify-center items-center space-y-8">
            <p className="text-md">The <span className="font-bold">The International Conference on AI, Trade and Sustainability (ICATS 2026) </span> serves as a premier global platform for academicians, researchers, industry professionals, policymakers, entrepreneurs, and practitioners to explore the transformative role of Artificial Intelligence (AI) in shaping the future of trade, commerce, business, and sustainable development. As organizations and economies navigate rapid technological advancements, increasing globalization, and pressing sustainability challenges, the integration of AI-driven solutions has emerged as a critical enabler of innovation, efficiency, and responsible growth. The conference aims to foster interdisciplinary dialogue and collaboration by bringing together diverse perspectives from technology, business, economics, management, social sciences, and public policy. Participants will have the opportunity to present cutting-edge research, share best practices, discuss emerging trends, and explore innovative approaches that leverage AI to enhance trade ecosystems, optimize business operations, support data-driven decision-making, and promote sustainable economic development. ICATS 2026 seeks to address contemporary challenges and opportunities at the intersection of AI, digital transformation, global trade, and sustainability. The conference will encourage discussions on ethical AI adoption, smart supply chains, digital commerce, sustainable business models, green innovation, responsible governance, and the future of work in an increasingly AI-powered world.
</p>
         
         <p className="text-md">
          Through keynote addresses, technical sessions, panel discussions, industry forums, and networking opportunities, ICATS 2026 will facilitate meaningful knowledge exchange and foster partnerships among academia, industry, government, and civil society. The conference aspires to contribute to the development of innovative, inclusive, and sustainable solutions that advance economic prosperity while addressing global environmental and social challenges.<br/>
         </p>

{/* Objectives Section */}
<div className="w-full max-w-3xl text-left self-start">
  <h2 className="text-lg font-semibold text-red-600 mb-2">Objectives</h2>
  
  <ul className="list-disc list-inside space-y-2 text-md">
    <li>Promote interdisciplinary research and knowledge exchange on Artificial Intelligence, trade, business, and sustainability.</li>
    <li>Explore innovative AI-driven solutions that enhance business performance, trade efficiency, and economic resilience.</li>
    <li>Foster collaboration among academia, industry, and policymakers to address emerging global challenges and opportunities.</li>
    <li>Encourage sustainable and responsible business practices through digital transformation and technological innovation.</li>
    <li>Advance discussions on ethical, inclusive, and sustainable development aligned with global economic and environmental goals.</li>
  </ul>
</div>


         {/* <div className="max-w-[700px] h-full ">
              <img src="/assets/images/ITNSSEM/college2.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div> */}
         
          </div>
          </div>
      ),
    },
    {
      key: '5',
      label: 'Conference Themes and Sub-themes',
      children: (

<div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">

          <div className="w-full flex flex-col items-center gap-8">

  {/* Top Single Logo */}
  {/* <div className="flex flex-col items-center">
    <img 
      // src="/assets/images/ITNSSEM/Audisankaralogo.png" 
      alt="Manipal Institute of Higher Academy (MAHE), Bangaloree" 
      loading="lazy" 
      className="w-full max-w-[280px] object-contain"
    />
    <p className="mt-2 text-sm font-medium text-center">
      Conference Organizer - Manipal Academy of Higher Education, Bangalore
    </p>
  </div> */}

  {/* Bottom Two Logos */}
  <div className="flex justify-center items-start gap-10">

    {/* Logo 1 */}
    <div className="flex flex-col items-center">
      <img 
        // src="/assets/images/ITNSSEM/INTIlogo.png" 
        // alt="INTI University" 
        // loading="lazy" 
        // className="w-full max-w-[310px] object-contain"
      />
      <p className="mt-2 text-sm font-medium text-center">
        {/* INTI University, Malaysia */}
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
      Organizer
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
      key: '6',
      label: 'Location',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-6">

          <h1 className="text-xl md:text-2xl font-bold">VENUE</h1>

          {/* <p className="text-xl font-bold">Manipal Institute of Higher Academy (MAHE), Bangalore</p> */}
          <p className="text-xl font-bold">To Be Decided</p>

          <p className="text-md"><span className="font-bold">Dates:</span> 7th October (Wednesday) – 8th October (Thursday), 2026 | Hybrid Mode</p>

 {/* <div className="max-w-[700px] h-full mx-auto ">
              <img src="/assets/images/ITNSSEM/college.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div> */}

          </div>
      ),
    },
    {
      key: '7',
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
                Link
              </Link>
            </div>


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
      label: 'Scientific Committee (India)',
      children: (
       <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold">Scientific Committee (India)</h1>

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



//     {
//       key: '15',
//       label: 'Editorial and Review Board (Internal)',
//       children: (
//        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
//         <h1 className="text-xl md:text-2xl font-bold">Editorial and Review Board (Internal)</h1>

// <div className="flex flex-col gap-3">

//   {
//     ERList.map((item,i)=>(
//       <p key={i} className='text-md md:text-lg flex justify-start items-start gap-2'><span>{i+1}. </span>{item}</p>
//     ))
    
//   }

// </div>
//           </div>
//       ),
//     },



//     {
      
//       /* ===== Porgram Committee SECTION ===== */
//       key: '10',
//       label: 'Coordinators',
//       children: (
//          <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start gap-5">
//             {
//   ProgramCommitteeList.map((item, i) => (
//     <div
//       key={i}
//       className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-zinc-200 rounded-lg"
//     >
//       <div className="flex flex-col items-center space-y-3">

//         {/* Name */}
//         <h4 className="text-lg font-bold text-center">
//           {item.name}
//         </h4>

//         {/* Detail */}
//         <p className="text-md text-center text-gray-600">
//           {item.detail}
//         </p>

//       </div>
//     </div>
//   ))

// // {
// //               ProgramCommitteeList.map((item,i)=>(
// //                 <div key={i} className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-zinc-200 rounded-lg">
// //               <div className="flex flex-col items-center space-y-4">
// //                 <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden border">
// //                   {/* <UserCheck className="w-12 h-12 text-black" /> */}
// //                   <img src={item.image} alt="" loading="lazy" className="w-full h-full" />                
// //                 </div>
                
// //                 <div>
// //                   <h4 className="text-lg font-bold text-center">{item.name}</h4>
// //                   <p className="text-md text-center">{item.detail}</p>
                  
                  
// //                 </div>
// //               </div>
// //             </div>
// //               ))
// //             }

//           }
            
//           </div>
//         </div>
//       ),
//     },
    
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
                    Registration Fees
                  </td>
                  <td className="p-3">INR /-</td>
                  <td className="p-3">Per Author</td>
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
                <span className=" flex-1 text-right">CONFAB 360 DEGREE</span>
              </div>
              
              <div className="w-full flex justify-between items-start">
                <span className="font-semibold  w-40">Bank Name</span>
                <span className=" flex-1 text-right">ICICI BANK, Mayapuri, Delhi, India</span>
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
                <span className=" flex-1 text-right">Mayapuri, Delhi, India</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="font-semibold  w-40">IFSC Code</span>
                <span className=" flex-1 text-right">ICIC0001818</span>
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
             <img src="/assets/images/ICAILIHMI/Payment.png" alt="" className="w-full h-full"/>
            </div>
          </div>

          <p className="text-sm max-w-md mx-auto">
            {/* Click the QR code to open the payment page or scan using any UPI-enabled app. */}
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
                       <LuPhoneCall className="text-[#f27521]"/> <span className="text-md font-[600]">+91-7011560479 | +91-9717688509</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <LuMail className="text-[#f27521]"/><span className="text-md font-[600]"> confab360degree@gmail.com</span>
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
          <p className="text-md">1. <span className="font-bold">General Formatting: </span>
          Use A4 paper size (210 mm x 297 mm).
Margins: 1 inch (2.54 cm) on all sides.
Font: Use a clear, readable font (e.g., Times New Roman or Arial) in 12-point size.
Line Spacing: 1.5 or double-spaced throughout the text.
Paragraphs: Indent the first line of each paragraph by 0.5 inches (1.27 cm).</p>
          <p className="text-md">2. <span className="font-bold">Abstract: </span> Provide a concise abstract (150-250 words) summarizing the main points of your paper.
Keywords: List 3-5 relevant keywords after the abstract.
The word limit should be between 3000-8000 words including referencing and abstract, tables, figures etc.</p>
          <p className="text-md">3. <span className="font-bold">Figures and Tables:</span> Number figures and tables consecutively
      (e.g., Table 1, Figure 1).
Include captions below figures and above tables.
Ensure all figures and tables are referenced in the text.</p>
          <p className="text-md inline-flex justify-start items-start flex-wrap gap-1">
  4. <span className="font-bold"> Research Ethics Compliance:</span> Title of the paper: Centered, bold, and in title case.
Author(s): Full names, affiliations, and email addresses.
Acknowledgments: Include any funding sources or acknowledgments.
  {/* <Link href="https://publicationethics.org/" target="_blank" rel="noopener noreferrer">
    COPE standards
  </Link>{' '} */}
   </p>
 <p className="text-md">5. <span className="font-bold">Main Body:</span> Use headings and subheadings to organize your content.
Use numbered sections if required by the journal.
Maintain clarity and coherence throughout the text.</p>
 
 <p className="text-md">6. <span className="font-bold">References:</span> Use Harvard style for all citations and references</p>
 
   
 
 
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