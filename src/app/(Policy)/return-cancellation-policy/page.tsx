import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import React from 'react'

const ReturnCancellationPolicy = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Return & Cancellation Policy' />
    <div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto flex flex-col  gap-0'>


      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-700 text-md leading-relaxed">
          At Confab 360 Degree™, we are committed to delivering high-quality programs, services, and resources. 
          We understand that there may be times when you need to request a return or cancel a registration. 
          Please read our policy carefully to understand the terms.
        </p>
      </div>

      {/* Cancellation Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Cancellation Policy</h2>
        
        {/* Program or Service Registration */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
            Program or Service Registration:
          </h3>
          
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 text-md">
                Cancellations must be requested at <strong>strongleast 7 days</strong> before the program start date to be eligible for a refund.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 text-md">
                A cancellation fee of <strong>10% of the program fee</strong> may apply.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 text-md">
                No refunds will be processed if cancellation requests are made within <strong>7 days</strong> of the scheduled start.
              </span>
            </li>
          </ul>
        </div>

        {/* Workshops and Webinars */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-1 h-1 bg-gray-800 rounded-full mr-2"></span>
            Workshops and Webinars:
          </h3>
          
          <ul className="ml-4">
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 text-md">
                Registration fees for workshops or webinars are non-refundable unless the event is cancelled by Confab 360 Degree™.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Refund Policy</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Refunds for eligible cancellations will be processed within 10-15 business days.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Refunds will be issued using the original payment method. In case of payment gateway charges, those amounts are non-refundable.
            </span>
          </li>
        </ul>
      </section>

      {/* Return Policy for Physical Products */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Return Policy for Physical Products</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Returns are accepted only if the product is defective or incorrect upon delivery.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              The return request must be initiated within 7 business days of receiving the item.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Returned items must be in original packaging and condition, along with all accompanying documents (if any).
            </span>
          </li>
        </ul>
      </section>

      {/* Process for Returns & Refunds */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Process for Returns & Refunds</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              To initiate a return or cancellation, please contact our support team at{' '}
              <a href="mailto:info@confab360degree.com" className="text-blue-600 underline hover:text-blue-800">
                info@confab360degree.com
              </a>{' '}
              or call{' '}
              <a href="tel:+91-7011560479" className="text-blue-600 underline hover:text-blue-800">
                +91-7011560479
              </a>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Once your return request is approved, we will provide instructions for shipping the item back. The shipping cost for returns is the responsibility of the customer unless the product delivered was incorrect or damaged.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Upon receiving and inspecting the returned item, we will process the refund or provide a replacement within 10 business days.
            </span>
          </li>
        </ul>
      </section>

      {/* Non-Returnable or Non-Cancelable Items/Services */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">Non-Returnable or Non-Cancelable Items/Services</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Digital products or e-learning materials are non-returnable.
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-md">
              Services already availed (like consultations or completed workshops) cannot be canceled or refunded.
            </span>
          </li>
        </ul>
      </section>

      {/* Program Cancellation by Confab 360 Degree */}
      <section className="mb-8">
        <h2 className="text-xl font-bold  mb-4">
          Program Cancellation by Confab 360 Degree™
        </h2>
        
        <p className="text-gray-700 text-md">
          If a program or event is canceled by us due to unforeseen circumstances, participants will receive a 100% refund or the option to transfer to another session.
        </p>
      </section>

    </div>
    </>
  )
}

export default ReturnCancellationPolicy