import React from 'react'
import Title from '../UI/Title/Title'
import Heading from '../UI/Title/Heading'

const WelcomeComp = () => {
  return (
    <>
   <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto flex flex-col justify-center items-center gap-5">
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
           <Title title="Congratulations, Marcus!" />
            <Heading line1="For Joining Confab as Regional Director" />
        </div>

        <div className="max-w-[350px] max-h-[350px] bg-white overflow-hidden">
                      <img
                        src={'/assets/images/home/marcus.jpeg'}
                        alt={'Marcus'}
                        className="w-full h-full object-cover border"
                      />
                    </div>
    </div>
    </>
  )
}

export default WelcomeComp