'use client'

import Navbar from '@/components/Layout/Header/Navbar';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { MdDownload, MdEmail } from 'react-icons/md';

const PaymentSuccess = () => {

     const [emailSent, setEmailSent] = useState(false);

  const handleSendReceipt = () => {
    setEmailSent(true);
    // Simulate email sending
    setTimeout(() => setEmailSent(false), 3000);
  };

  return (
    <>
    <Navbar/>
 <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-emerald-50/50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border-2 border-green-100 p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FiCheckCircle  className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600">
            Your payment has been processed successfully
          </p>
        </div>

        {/* Payment Details */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[15px] text-gray-600">Amount</span>
            <span className="text-[15px] font-semibold">$99.00</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[15px] text-gray-600">Transaction ID</span>
            <span className="text-[15px]">TXN123456789</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[15px] text-gray-600">Date</span>
            <span className="text-[15px]">{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          {/* <button
            onClick={handleSendReceipt}
            disabled={emailSent}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MdEmail  className="w-5 h-5" />
            <span>{emailSent ? 'Receipt Sent!' : 'Email Receipt'}</span>
          </button> */}
          
          {/* <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
            <MdDownload className="w-5 h-5" />
            <span>Download Receipt</span>
          </button> */}

          {/* Continue Button */}
        <Link href={'/shipping'} className="hover-button w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group">
          <span>Continue </span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
        </div>

        

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Contact our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              support team
            </a>
          </p>
        </div>
      </div>
    </div>    
    </>
  )
}

export default PaymentSuccess