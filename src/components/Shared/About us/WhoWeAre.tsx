import Heading from "@/components/UI/Title/Heading";
import Title from "@/components/UI/Title/Title";
import React from "react";

const WhoWeAre = () => {
  const ourWorkList = [
    {
      key: 1,
      title: "Collaboration",
      para: "We commit to working with respect and transparency and recognize we are better together than apart.",
      icon: "/",
    },
    {
      key: 2,
      title: "Excellence",
      para: "We strive to excel and continually exceed the expectations of our clients and our people, holding each other accountable for our actions and outcomes.",
      icon: "/",
    },
    {
      key: 3,
      title: "Humility",
      para: "While confident in our abilities, we realize that our current knowledge is but a fraction of what we have yet to learn, discover and create.",
      icon: "/",
    },
    {
      key: 4,
      title: "Impact",
      para: "We are passionate about making a difference and take initiative to have a lasting impact on the organizations and communities we serve.",
      icon: "/",
    },
    {
      key: 5,
      title: "Inclusion",
      para: "We embrace different perspectives and draw on the strength of our diversity.",
      icon: "/",
    },
    {
      key: 6,
      title: "Integrity",
      para: "We value authenticity and honesty. We do the right thing regardless of the consequences.",
      icon: "/",
    },
    {
      key: 7,
      title: "Intellectual Curiosity",
      para: "As lifelong learners, we explore and encourage new ideas, and challenge the status quo.",
      icon: "/",
    },
    {
      key: 8,
      title: "Outcomes Focused",
      para: "Confab 360 Degree Strategy has developed an outcomes focused curriculum for our client programming, from strategic planning, to educational workshops, to executive coaching.",
      icon: "/",
    },
  ];

  return (
    <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 md:space-y-4 mb-5 ">
        <Title title="Who we are" />
        <Heading line1="Our People & Values" />
      </div>

      <div className="space-y-3">
        <p className="text-md leading-relaxed">
          Our values and culture serve as the foundation of who we are,
          influencing the way we work with our colleagues, support our clients,
          impact the environment and give back to our communities.
        </p>
        <p className="text-md leading-relaxed">
          We are committed to investing in our people and fostering a work
          environment that values diversity and inclusion, which ignites
          innovation and enables our people to achieve their full potential.
        </p>
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
  );
};

export default WhoWeAre;
