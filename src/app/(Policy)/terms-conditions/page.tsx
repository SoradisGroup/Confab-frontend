import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import React from 'react'

const TermsConditions = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Terms & Conditions' />

    <div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto flex flex-col gap-0'>

      {/* Header */}
      <div className="mb-8">

        <p className="text-gray-700 text-md leading-relaxed">
          Welcome to Confab 360 Degree™! By accessing or using our website and services, you agree to abide by the following Terms & Conditions.
        </p>
      </div>

      {/* Eligibility */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Eligibility</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          Our services are intended for professionals, academicians, and businesses. You must be at least 18 years old to register or use our services.
        </p>
      </section>

      {/* User Obligations */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">User Obligations</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Ensure the information you provide is accurate and up to date.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Respect intellectual property rights by not distributing or reproducing our materials without prior authorization.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Use our services for lawful purposes only.
            </span>
          </li>
        </ul>
      </section>

      {/* Service Availability */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Service Availability</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          We strive to ensure uninterrupted access to our services but do not guarantee uptime or availability. Scheduled maintenance and technical disruptions may occur.
        </p>
      </section>

      {/* Fees and Payments */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Fees and Payments</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Program fees must be paid in full before access is granted.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Prices are subject to change, and all payments are non-refundable unless specified otherwise.
            </span>
          </li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Intellectual Property</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          All content, including training materials, videos, and publications, are the property of Confab 360 Degree™. Unauthorized use or sharing is prohibited.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          Confab 360 Degree™ is not liable for any direct or indirect damages resulting from the use or inability to use our services.
        </p>
      </section>

      {/* Governing Law and Dispute Resolution */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Governing Law and Dispute Resolution</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in New Delhi, India.
        </p>
      </section>

    </div>
    </>
  )
}

export default TermsConditions