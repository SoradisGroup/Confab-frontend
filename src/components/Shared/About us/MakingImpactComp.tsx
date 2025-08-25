import Heading from '@/components/UI/Title/Heading'
import Title from '@/components/UI/Title/Title'
import React from 'react'

const MakingImpactComp = () => {
  return (
    <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">

{/* right Side */}
<div className="relative bg-white">
            <div className="relative overflow-hidden rounded-sm ">
              <img
                src="/assets/images/about/2.webp"
                alt=""
                loading='lazy'
                className="w-full h-full object-cover border"
              />
</div>
</div>

{/* left Side */}
 <div className="space-y-6">
            {/* Header */}
            <div className='text-start space-y-2 md:space-y-4 '>
                <Title title='Corporate Social Responsibility'/>
                <Heading line1='Making an Impact'/>
            </div>

    <p className="text-md leading-relaxed mb-8">At Huron, we believe our people and our organization have an important role to play in creating a better future for all. Since our inception, we have created a strong culture of giving back to the communities where we live and work. Driven by our people, it is through our collective actions that Huron can advance toward our vision of empowering our clients, our people and the communities we serve to own their future.</p>         

   <div className="relative overflow-hidden rounded-sm ">
              <img
                src="/assets/images/about/8.webp"
                alt=""
                loading='lazy'
                className="w-full h-full object-cover border"
              />
</div>         

</div>

        </div>
        </div>
  )
}

export default MakingImpactComp