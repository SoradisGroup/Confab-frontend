'use client'

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const FloatingButtonComp = () => {

const [showHeader, setShowHeader] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-3 z-50">
        <div className="flex flex-col justify-center items-center gap-2">
          {showHeader && (
            <button
              className={`rounded-full bg-[#f27521] hover:bg-[#f27521]/70 transition duration-300 ease-in-out p-3 transition-transform duration-500 ease-in-out ${
                showHeader ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={scrollToTop}
            >
                <FaArrowUp className='text-[30px] text-white' />
            </button>
          )}
        </div>
      </div>
  )
}

export default FloatingButtonComp