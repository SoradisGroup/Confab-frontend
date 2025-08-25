import Heading from '@/components/UI/Title/Heading';
import Title from '@/components/UI/Title/Title';
import React from 'react'

const WhyToChoose = () => {

 const ourWorkList = [
    {
      key: 1,
      title: "Innovations",
      para: "Our training programs help the individual to learn and train on latest and recent innovations acquired by the industries.",
      icon: "/",
    },
    {
      key: 2,
      title: "Communication",
      para: "The training will help in improving the overall communication between different verticals in the organization and thereby improves overall efficiency.",
      icon: "/",
    },
    {
      key: 3,
      title: "High Performers",
      para: "It will help them to become high performers and thereby improves the overall ability of the team.",
      icon: "/",
    },
    {
      key: 4,
      title: "Skills Development",
      para: "It will improve their personality development skills, analytical skills, risk management skills, project management skills and other technical skills.",
      icon: "/",
    },
    {
      key: 5,
      title: "Improve ROI",
      para: "The training will help the organization to improve the overall ROI and further improvement in overall structure.",
      icon: "/",
    }
  ];

  return (
    <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 md:space-y-4 mb-5 ">
        <Title title="Why choose our services" />
        <Heading line1="Impact of our services" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 justify-items-start gap-5">
        {ourWorkList.map((item, i) => (
          <div
  key={i}
  className="group relative overflow-hidden flex flex-col justify-start items-center gap-4 bg-[#ffedd5]/20 border border-[#ffedd5]/80 rounded-xl p-6 w-full bg-white hover:bg-gradient-to-br hover:from-[#f7ba2c] hover:to-[#f27521] transition-all duration-500 ease-out cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-orange-200/50 hover:-translate-y-2 transform"
>
  {/* Background shine effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
  
  {/* Icon container with enhanced styling */}
  <div className="relative z-10 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300">
    <img
      src={item.icon}
      loading="lazy"
      alt={`${item.title} icon`}
      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
    />
  </div>

  {/* Content with improved typography */}
  <div className="relative z-10 text-center space-y-2">
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

export default WhyToChoose