import Heading from '@/components/UI/Title/Heading';
import Title from '@/components/UI/Title/Title';
import React from 'react'

const AcademicFeatureComp = () => {

const ourWorkList = [
    {
      key: 1,
      title: "Cutting-Edge Research",
      para: "Confab 360 Degree is at the forefront of cutting-edge research in the field of management. We focus on innovative research methodologies and problem-solving to drive industry advancements.",
      icon: "/",
    },
    {
      key: 2,
      title: "Thought Leadership",
      para: "We take pride in our position as thought leaders in management research. Our institute publishes influential studies, hosts research seminars, and engages with industry leaders to shape management practices.",
      icon: "/",
    },
    {
      key: 3,
      title: "Interdisciplinary Approach",
      para: "Our research methodology integrates insights from various disciplines, leading to comprehensive and practical solutions for the modern business landscape.",
      icon: "/",
    },
    {
      key: 4,
      title: "Industry Impact",
      para: "We have a strong track record of making a tangible impact on industries through our research findings, leading to improved management practices, increased efficiency, and enhanced profitability.",
      icon: "/",
    },
    {
      key: 5,
      title: "Faculty Excellence",
      para: "Our faculty consists of esteemed scholars, researchers, and experts in diverse management domains. They bring their expertise and real-world experience to the institute's research endeavors.",
      icon: "/",
    },{
        key: 6,
        title:"Student Involvement",
        para:'We encourage active student involvement in research projects, providing a unique opportunity for aspiring management professionals to gain practical experience and contribute to meaningful research.',
        icon:'/'
    },
    {
        key: 7,
        title:"Collaborative Partnerships",
        para:'Confab 360 Degree collaborates with industry, government bodies, and other research institutions to tackle complex management challenges and foster innovation.',
        icon:'/'
    },
    {
        key: 8,
        title:"International Reach",
        para:'Our institute has a global perspective, engaging with international organizations, universities, and experts to ensure our research has a worldwide impact.',
        icon:''
    },
    {
        key: 9,
        title:"Professional Development",
        para:'We offer professional development programs and workshops based on our research findings, empowering individuals and organizations to improve their management capabilities.',
        icon:'/'
    },
    {
        key: 10,
        title:"Solutions for the Future",
        para:"Confab 360 Degree's research is geared towards addressing the management challenges of the future, from sustainability and digital transformation to leadership in the age of disruption.",
        icon:'/'
    },
     {
        key: 11,
        title:"Conferences and Events",
        para:'We host conferences, webinars, and events that provide a platform for the exchange of ideas, best practices, and the latest research in management.',
        icon:'/'
    },
     {
        key: 12,
        title:"Responsive to Change",
        para:'In a rapidly evolving business landscape, we adapt and evolve our research focus to remain relevant and impactful.',
        icon:'/'
    },
     {
        key: 13,
        title:"Commitment to Excellence",
        para:'Our commitment to academic excellence and innovative research methodologies sets us apart as a premier management research institute.',
        icon:'/'
    },
     {
        key: 14,
        title:"Impactful Publications",
        para:'We produce high-impact research publications, reports, and journals that influence the academic and business community.',
        icon:'/'
    },
     {
        key: 15,
        title:"Community Engagement",
        para:'Our institute actively engages with the community, offering insights and solutions to address pressing management challenges at local and global levels.',
        icon:'/'
    },
     {
        key: 16,
        title:"Confab 360 Degree",
        para:"Confab 360 Degree is more than a research institute; it's a hub of innovation, expertise, and collaborative problem-solving in the management field, driving positive change in the business world.",
        icon:'/'
    }

  ];

  return (
    <div className="w-full bg-white pb-10 px-[20px] md:px-[70px] max-w-7xl mx-auto">
      {/* Header */}
      {/* <div className="text-center space-y-2 md:space-y-4 mb-5 ">
        <Title title="Why choose our services" />
        <Heading line1="Impact of our services" />
      </div> */}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 justify-items-start gap-5">
        {ourWorkList.map((item, i) => (
          <div
  key={i}
  className="group relative overflow-hidden flex flex-col justify-start items-center gap-4 !bg-[#f3f7fa] border border-[#f3f7fa]/80 rounded-xl p-6 w-full bg-white hover:bg-gradient-to-br hover:from-[#f7ba2c] hover:to-[#f27521] transition-all duration-500 ease-out cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-orange-200/50 hover:-translate-y-2 transform"
>
  {/* Background shine effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
  
  {/* Icon container with enhanced styling */}
  {/* <div className="relative z-10 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300">
    <img
      src={item.icon}
      loading="lazy"
      alt={`${item.title} icon`}
      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
    />
  </div> */}

  {/* Content with improved typography */}
  <div className="relative z-10 text-start space-y-4">
    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 leading-tight">
      {item.title}
    </h2>
    
    <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed max-w-xs">
      {item.para}
    </p>
  </div>

  {/* Optional: Add a subtle arrow or indicator */}
  {/* <div className="relative z-10 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <svg 
      className="w-5 h-5 text-white animate-bounce" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </div> */}
</div>
        ))}
      </div>
    </div>
  )
}

export default AcademicFeatureComp