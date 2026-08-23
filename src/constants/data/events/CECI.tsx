import { GoDotFill } from "react-icons/go";
import { ERList, SCIntlList, ConferenceSessionsList, ConvenerList, Coconvenerlist, GuestList, ImportantDateList, InternationalAdvisoryList, ProgramCommitteeList, publicationsList, PatronList, ChiefPatronList } from "./CECI/CECI";
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

  {/*Logos */}
  <div className="flex justify-center items-start gap-10">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">

  {/* Logo 1 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/VNU.jpg"
      alt="VNU University of Economics and Business, Vietnam"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      VNU University of Economics and Business, Vietnam
    </p> */}
  </div>

  {/* Logo 2 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/PU.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Presidency University, Indonesia
    </p> */}
  </div>

  {/* Logo 3 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/TUA.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      The University of Adelaide, Australia
    </p> */}
  </div>

  {/* Logo 4 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/Confab.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Confab 360 Degree, New Delhi
    </p> */}
  </div>
</div>
</div>
   
   
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
  {/* Logo 1 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SU.jpg"
      alt="Partner Institute 1"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 2 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/E.jpg"
      alt="Partner Institute 2"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 3 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/FTU.jpg"
      alt="Partner Institute 3"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 4 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/DAV.jpg"
      alt="Partner Institute 4"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 5 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/UEL.jpg"
      alt="Partner Institute 5"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 6 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/CONR.jpg"
      alt="Partner Institute 6"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
  {/* Logo 7 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SIS.jpg"
      alt="Partner Institute 6"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
</div>

</div>
          
          <div className="flex flex-col justify-center items-center space-y-8">
              <h2 className="text-2xl font-bold text-center text-[#d61c25]">
                The 2026 Joint International Conference on ECONOMIC INTEGRATION AND ENTERPRISE RESILIENCE (CIECI & ICFBE 2026)
              </h2>
             <p className="text-lg text-center ">
               Reshaping Integration and Enterprise Resilience: Artificial Intelligence, Supply Chains, Trade and Family Business Governance
            </p>
         
             <div className="max-w-[700px] h-full ">
              <img src="/assets/images/CECI/BCK.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div>
             
          </div>
          
        </div>
      ),
    },

// {
//       key: '2',
//       label: 'Guest & Speakers',
//       children: (

// <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
// {
//   GuestList.map((item,i)=>(
//     <div key={i} className="space-y-8">
//   <h3 className="text-xl font-bold">{item.title}</h3>
//           <div className="space-y-6">
//             <div className="grid md:grid-cols-3 gap-4">
//                {
//                 item.GuestList.map((item,i)=>(
//                   <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 border border-zinc-200 rounded-lg text-center">
//                 <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden border ">
//                   <img src={item.image} alt="" className="w-full h-full" />
//                 </div>
//                 <h5 className="text-lg font-semibold ">{item.name}</h5>
//                 <p className="text-md text-gray-600 mb-2">{item.role}</p>
//                 <p className="text-sm text-gray-500">{item.location}</p>
//               </div>
//                 ))
//                }
//             </div>
//           </div>
// </div>
//   ))
// }
// </div>
       
//       ),
//     },


{
key: '3',
label: 'Organizing Committee',

children: (
  <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-10">

    <div className="w-full flex flex-col items-center gap-8">

  {/*Logos */}
  <div className="flex justify-center items-start gap-10">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">

  {/* Logo 1 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/VNU.jpg"
      alt="VNU University of Economics and Business, Vietnam"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      VNU University of Economics and Business, Vietnam
    </p> */}
  </div>

  {/* Logo 2 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/PU.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Presidency University, Indonesia
    </p> */}
  </div>

  {/* Logo 3 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/TUA.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      The University of Adelaide, Australia
    </p> */}
  </div>

  {/* Logo 4 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/Confab.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Confab 360 Degree, New Delhi
    </p> */}
  </div>
</div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
  {/* Logo 1 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SU.jpg"
      alt="Partner Institute 1"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 2 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/E.jpg"
      alt="Partner Institute 2"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 3 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/FTU.jpg"
      alt="Partner Institute 3"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 4 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/DAV.jpg"
      alt="Partner Institute 4"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 5 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/UEL.jpg"
      alt="Partner Institute 5"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 6 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/CONR.jpg"
      alt="Partner Institute 6"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
  {/* Logo 7 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SIS.jpg"
      alt="Partner Institute 7"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
</div>


<div className="flex flex-col justify-center items-center space-y-8">
              <h2 className="text-2xl font-bold text-center text-[#d61c25]">
                The 2026 Joint International Conference on ECONOMIC INTEGRATION AND ENTERPRISE RESILIENCE (CIECI & ICFBE 2026)
              </h2>
             <p className="text-lg text-center ">
               Reshaping Integration and Enterprise Resilience: Artificial Intelligence, Supply Chains, Trade and Family Business Governance
            </p>
 </div>


{/* ===== CHIEF PATRON ===== */}
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-left">
        Chief Patron (s)
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


    {/* ===== CHIEF PATRON =====
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

  {/*Logos */}
  <div className="flex justify-center items-start gap-10">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">

  {/* Logo 1 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/VNU.jpg"
      alt="VNU University of Economics and Business, Vietnam"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      VNU University of Economics and Business, Vietnam
    </p> */}
  </div>

  {/* Logo 2 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/PU.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Presidency University, Indonesia
    </p> */}
  </div>

  {/* Logo 3 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/TUA.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      The University of Adelaide, Australia
    </p> */}
  </div>

  {/* Logo 4 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/Confab.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Confab 360 Degree, New Delhi
    </p> */}
  </div>
</div>
</div>
   
   
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
  {/* Logo 1 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SU.jpg"
      alt="Partner Institute 1"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 2 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/E.jpg"
      alt="Partner Institute 2"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 3 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/FTU.jpg"
      alt="Partner Institute 3"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 4 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/DAV.jpg"
      alt="Partner Institute 4"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 5 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/UEL.jpg"
      alt="Partner Institute 5"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 6 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/CONR.jpg"
      alt="Partner Institute 6"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
  {/* Logo 7 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SIS.jpg"
      alt="Partner Institute 6"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
</div>

</div>
          
          <div className="flex flex-col justify-center items-center space-y-8">
              
                           
              <h2 className="text-2xl font-bold text-center text-[#d61c25]">
                The 2026 Joint International Conference on ECONOMIC INTEGRATION AND ENTERPRISE RESILIENCE (CIECI & ICFBE 2026)
              </h2>
             <p className="text-lg text-center ">
               Reshaping Integration and Enterprise Resilience: Artificial Intelligence, Supply Chains, Trade and Family Business Governance
            </p>
             
                
         <p className="text-md">
          Through keynote addresses, technical sessions, panel discussions, industry forums, and networking opportunities, ICATS 2026 will facilitate meaningful knowledge exchange and foster partnerships among academia, industry, government, and civil society. The conference aspires to contribute to the development of innovative, inclusive, and sustainable solutions that advance economic prosperity while addressing global environmental and social challenges.<br/>
         </p>

             <div className="flex flex-col justify-left items-left space-y-4">
             <h2 className="text-xl font-bold text-left text-[#d61c25]">
              About The Conference
              </h2>
              <p className="text-medium text-justify">
               The University of Economics and Business, Vietnam National University - Hanoi (VNU-UEB), in a strategic partnership with President University (Indonesia), announces the JOINT INTERNATIONAL CONFERENCE ON ECONOMIC INTEGRATION AND ENTERPRISE RESILIENCE (CIECI & ICFBE 2026): Reshaping Integration and Enterprise Resilience: Artificial Intelligence, Supply Chains, Trade and Family Business Governance. This joint event brings together the 14th annual International Conference on International Economic Cooperation and Integration (CIECI 2026) and the 9th International Conference on Family Business and Entrepreneurship (ICFBE 2026).
               This year's joint conference aims to explore how artificial intelligence, the restructuring of global supply chains, the establishment of new trade governance frameworks, and the dynamics of family enterprises can help economies respond to and build resilience amidst geopolitical fragmentation. The conference is organized in collaboration with the University of Adelaide (Australia), Confab 360 Degree (India), Sofia University St. Kliment Ohridski (Bulgaria), Rangsit University (Thailand), Foreign Trade University, Diplomatic Academy of Vietnam, University of Economics and Law - VNU HCMC, University of National and World Economy (Bulgaria), and School of Interdisciplinary Sciences and Arts, Vietnam National University - Hanoi (VNU-SIS).
               This 1.5-day hybrid conference, to be held on 22-23 October 2026 in Hanoi, will provide a dynamic platform for scholars, researchers, policymakers, and business leaders to exchange ideas, foster meaningful dialogue, share best practices, and develop actionable solutions to lead the way toward a more resilient and sustainable future amid digital transformation and global economic shifts.
               </p>
 

             <h2 className="text-xl font-bold text-left text-[#d61c25]">
              Rationale
              </h2>
              <p className="text-medium text-justify">
  The global economy stands at a critical crossroads, characterised by a profound paradox: while technological advancements are driving unprecedented levels of digital interconnectedness, geopolitical fractures are simultaneously causing severe physical and institutional fragmentation.

  At the forefront of this digital acceleration is the explosive growth of Artificial Intelligence (AI). Generative AI and advanced digital technologies are no longer mere operational tools; they are fundamentally altering global comparative advantages, disrupting traditional labour markets, and accelerating cross-border digital trade. This rapid evolution necessitates an urgent academic and policy discourse on data sovereignty, digital equity, and the establishment of robust frameworks for AI governance in international trade.

  <br /><br />

  Conversely, the physical realm of global trade faces mounting headwinds. Escalating geopolitical tensions, ranging from major power competition to volatile regional conflicts, have exposed the severe fragility of global supply chains. The overarching paradigm has abruptly shifted from “just-in-time” efficiency to “just-in-case” resilience. Consequently, concepts like “Friend-shoring”, “Near-shoring” and “De-risking” are rapidly rewiring global value chains. These shifts pose complex challenges for multinational corporations while simultaneously creating strategic windows of opportunity for emerging economies to upgrade their positions within the new global architecture.

  In this deeply fragmented landscape, traditional trade institutions are under immense strain. There is a pressing demand for “New Trade Governance”, innovative and adaptive regulatory frameworks capable of managing the complex nexus of national economic security, digital trade, and sustainable development. As nations navigate non-traditional protectionist barriers and strive to maximise the benefits of new-generation Free Trade Agreements (FTAs) like the CPTPP, EVFTA, and RCEP, formulating resilient institutional responses is critical to preventing a backslide into economic isolationism.

  Amidst these macroeconomic and geopolitical shifts, the micro-foundations of enterprise development – particularly family-owned firms and SMEs in emerging economies – play an indispensable role. As global markets face fragmentation and technological disruption, these enterprises remain central actors in driving innovation, employment creation, and long-term value generation. Therefore, understanding how family enterprises and entrepreneurial ventures balance continuity with structural transformation, through strategic governance and succession planning, is vital for holistic regional growth.

<br /><br />
  The joint international conference CIECI & ICFBE 2026 is convened to untangle this complex interdependence between macroeconomic integration and micro-level enterprise adaptability. By bringing together scholars, researchers, policymakers, and business leaders from around the globe, the conference aims to identify actionable strategies to reshape international economic integration, strengthen corporate resilience and forge pathways toward a more resilient, adaptive, and secure global economy in an era of profound transformation.
</p>
</div>
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

  {/*Logos */}
  <div className="flex justify-center items-start gap-10">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">

  {/* Logo 1 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/VNU.jpg"
      alt="VNU University of Economics and Business, Vietnam"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      VNU University of Economics and Business, Vietnam
    </p> */}
  </div>

  {/* Logo 2 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/PU.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Presidency University, Indonesia
    </p> */}
  </div>

  {/* Logo 3 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/TUA.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      The University of Adelaide, Australia
    </p> */}
  </div>

  {/* Logo 4 */}
  <div className="flex flex-col items-center">
    <img
      src="/assets/images/CECI/Confab.jpg"
      alt="Partner Institute"
      loading="lazy"
      className="w-full max-w-[340px] h-[210px] object-contain"
    />
    {/* <p className="mt-1 max-w-[220px] text-xs leading-tight font-medium text-center">
      Confab 360 Degree, New Delhi
    </p> */}
  </div>
</div>
</div>
   
   
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
  {/* Logo 1 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SU.jpg"
      alt="Partner Institute 1"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 2 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/E.jpg"
      alt="Partner Institute 2"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 3 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/FTU.jpg"
      alt="Partner Institute 3"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 4 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/DAV.jpg"
      alt="Partner Institute 4"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 5 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/UEL.jpg"
      alt="Partner Institute 5"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>

  {/* Logo 6 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/CONR.jpg"
      alt="Partner Institute 6"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
  {/* Logo 7 */}
  <div className="flex items-center justify-center">
    <img
      src="/assets/images/CECI/SIS.jpg"
      alt="Partner Institute 6"
      loading="lazy"
      className="w-full max-w-[160px] h-[100px] object-contain"
    />
  </div>
</div>

</div>

<div className="rid grid-cols-1 lg:grid-cols-2 gap-6">

  {
  ConferenceSessionsList.map((item, i) => (
    <div key={i} className="bg-[#f3f7fa] p-4 rounded-lg">

      {/* Main Track */}
      <h1 className="text-md font-bold mb-4 flex justify-start items-start gap-2 text-[#d61c25]">
        <span>{i + 1}.</span>
        {item.title}
      </h1>

      {/* Sub Tracks */}
      <div className="flex flex-col gap-4">

        {item.subtitles?.map((subtitle, subIndex) => (
          <div key={subIndex} className="w-full">

            {/* Sub Track Title */}
            <h2 className="text-md font-semibold mb-2">
              {subtitle.title}
            </h2>

            {/* Topics */}
            <div className="flex flex-col gap-1 pl-5">
              {subtitle.sessionsList?.map((session, sessionIndex) => (
                <p
                  key={sessionIndex}
                  className="text-md flex justify-start items-start gap-2"
                >
                  <GoDotFill className="flex-shrink-0 text-[10px] mt-2" />
                  <span>{session}</span>
                </p>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  ))
},
              
              </div>


          </div>

      ),
    },
    {
      key: '6',
      label: 'Location',
      children: (
        <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-6">

          <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Location</h1>

          {/* <p className="text-xl font-bold">Manipal Institute of Higher Academy (MAHE), Bangalore</p> */}
          <p className="text-xl font-bold">Hanoi, Vietnam</p>

          <p className="text-md"><span className="font-bold">Dates:</span> 22nd October (Thursday) – 23rd October (Friday), 2026</p>

 {/* <div className="max-w-[700px] h-full mx-auto ">
              <img src="/assets/images/ITNSSEM/college.jpg" alt="" loading="lazy" className="w-full h-full object-content" />
             </div> */}

          </div>
      ),
    },
    {
      key: '7',
      label: 'Important Dates',
      children: (
      <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-6">
         <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Important Dates</h1>

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
              <p className="text-lg font-bold mb-4 text-[#d61c25]">
                Submission Email Id: confab360degree@gmail.com
              </p>
              <Link href="mailto:confab360degree@gmail.com" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Submission Link
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
        <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Scientific Committee (International)</h1>

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
        <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Scientific Committee (India)</h1>

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
      label: 'Editorial Board',
      children: (
       <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8">
        <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Editorial Board </h1>

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
      children: ( <div className="p-4 md:p-6 bg-white rounded-lg border flex flex-col space-y-8"> <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Publication Opportunities</h1> <Carousel autoplay={true} autoplaySpeed={4000} slidesToScroll={1} dots={true} arrows={false} draggable={true} >

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
          <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">
            {/* Registratoin Fees (30<sup>th</sup> July – 1<sup>st</sup> September 2025) */}
            Registration Fees
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-100">
                  <th className="text-left p-3 font-semibold ">Type of Attendance</th>
                  <th className="text-left p-3 font-semibold ">Fee</th>
                  <th className="text-left p-3 font-semibold ">Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-200">
                <tr>
                  <td className="p-4">
                    Any Participant
                  </td>
                  <td className="p-3 font-semibold">USD 500/-</td>
                  <td className="p-3">Offline</td>
                </tr>
                {/* <tr>
                <td className="p-4 align-top w-[55%] break-words">
                  Indian Participants - Presentations and publication in Springer Proceedings (Scopus) - Authors (geographically diverse)
                </td>
                <td className="p-3 align-top whitespace-nowrap font-semibold">
                  INR 45000/-
                </td>
                <td className="p-3 align-top whitespace-nowrap">
                  Online/Offline
                </td>
              </tr>
                <tr>
                  <td className="p-4">
                    Indian Participants- Only Presentation (After conference considered for Scopus/WoS/ABDC Journals) - APC as per journals shortlisted
                  </td>
                  <td className="p-3 font-semibold">INR 7080/-</td>
                  <td className="p-3">Online/Offline</td>
                </tr>
                <tr>
                  <td className="p-4">
                    Foreign Participants – Presentation and publication in Springer Proceedings (Scopus)
                  </td>
                  <td className="p-3 font-semibold">USD 600/-</td>
                  <td className="p-3">Online/Offline</td>
                </tr>
                <tr>
                  <td className="p-4">
                    Foreign Participants - Only Presentation (After conference considered for Scopus/WoS/ABDC Journals) - APC as per journals shortlisted
                  </td>
                  <td className="p-3 font-semibold">USD 200/-</td>
                  <td className="p-3">Online/Offline</td>
                </tr> */}
                 
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

      {/* Registration Fee Includes Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <LuUserRound className="text-[#f27521]  flex-shrink-0" size={20} />
          <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Registration Fee Includes</h1>
        </div>

        <div className="">
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Two days of conference attendance</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Two-night stay</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Certificate of presentation</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Food at the conference venue</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Access to all the sessions</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Big networking with officials and academicians from more than ten universities across the world</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Publication in Springer Proceedings</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Photography and reports</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-black font-bold">•</span>
      <span>Social media coverage</span>
    </li>
  </ul>
</div>
      </div>


 


<div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400">
            <p className="text-sm text-orange-700">
              <span className="font-semibold">Note:</span> The publication charges for journal outlets are not included in registration fees.
            </p>
          </div>
        


<div className=""> 
        <div className="flex items-center gap-2 mb-6">
          <BsBank className="text-[#f27521]  flex-shrink-0" size={20}/>
          <h1 className="text-xl md:text-2xl font-bold text-[#d61c25]">Bank Account Details</h1>
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
              
              <div className="flex justify-between items-start">
                <span className="font-semibold whitespace-nowrap">SWIFT Code <span className="text-sm text-gray-500">(For International Payments)</span></span>
                <span className=" flex-1 text-right">ICICINBBCTS</span>
              </div>
            </div>
          
        </div>

{/* UPI Payment Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="text-lg font-bold">Scan or Click to Pay</h3>
          </div>

          <div className="flex justify-center mb-4">
  <a
    href="https://razorpay.me/@confab360degree1628"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="w-48 h-48 bg-white border border-zinc-200 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
      <img
        src="/assets/images/payment/payment.svg"
        alt="Payment QR Code"
        className="w-full h-full object-contain"
      />
    </div>
  </a>
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
                       <LuPhoneCall className="text-[#f27521]"/> <span className="text-md font-[600]">+91-9717688509</span>
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