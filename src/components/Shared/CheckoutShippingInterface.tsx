'use client'

import { statesOfIndia } from '@/constants/data/home/homeInfo';
import { FormatEuroCurrency } from '@/utils/Formater';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCreditCard, FaTruck } from 'react-icons/fa';
import { LuChevronDown } from 'react-icons/lu';


const CheckoutShippingInterface = () => {
  // Mock cart data (in a real app, this would come from localStorage or state management)
  type CartItem = {
    name: string;
    images: string[];
    quantity: number;
    purchaseAtPrice: number;
  };

  type Cart = {
    product: CartItem[];
  };

const [cart, setCart] = useState<Cart | null>(null);

useEffect(() => {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    setCart(JSON.parse(cartData));
  }
}, []);

  const [paymentMethod, setPaymentMethod] = useState('cod');

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      country: 'India',
      streetAddress: '',
      apartment: '',
      city: 'Select City',
      state: '',
      pinCode: '',
      phone: '',
      email: ''
    }
  });

  // Calculate totals
  const subtotal = cart?.product.reduce((sum, item) => sum + (item?.purchaseAtPrice * item.quantity), 0);
  const total = subtotal;

  // Form submission handler
  const onSubmit = (data:any) => {
    console.log('Shipping Address:', data);
    console.log('Payment Method:', paymentMethod);
    console.log('Cart:', cart);
    
    // Simulate order processing
    alert('Order placed successfully!');
    // In a real app, you would process the order here
    // reset(); // Uncomment to reset form after successful submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Details</h2>
            
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('firstName', {
                      required: 'First name is required',
                      minLength: {
                        value: 2,
                        message: 'First name must be at least 2 characters'
                      }
                    })}
                    placeholder="First Name"
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('lastName', {
                      required: 'Last name is required',
                      minLength: {
                        value: 2,
                        message: 'Last name must be at least 2 characters'
                      }
                    })}
                    placeholder="Last Name"
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  {...register('companyName')}
                  placeholder="Company Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                   type='text'
                    {...register('country', { required: 'Country is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none "
                    disabled
                  />
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('streetAddress', {
                    required: 'Street address is required',
                    minLength: {
                      value: 5,
                      message: 'Street address must be at least 5 characters'
                    }
                  })}
                  placeholder="House number and street name"
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 ${
                    errors.streetAddress ? 'border-red-500' : ''
                  }`}
                />
                {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress.message}</p>}
                
                <input
                  type="text"
                  {...register('apartment')}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Town/City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Town / City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder='City'
                  {...register('city', {
                    required: 'Town/City is required',
                    minLength: {
                      value: 2,
                      message: 'City name must be at least 2 characters'
                    }
                  })}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : ''
                  }`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    {...register('state', { required: 'State is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    {
                      statesOfIndia.map((item,i)=>(
                        <option key={i} value={item.value}>{item.name}</option>
                      ))
                    }
                    
                  
                  </select>
                  <LuChevronDown  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* PIN Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder='PIN Code'
                  {...register('pinCode', {
                    required: 'PIN Code is required',
                    pattern: {
                      value: /^[1-9][0-9]{5}$/,
                      message: 'Please enter a valid 6-digit PIN code'
                    }
                  })}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.pinCode ? 'border-red-500' : ''
                  }`}
                />
                {errors.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Please enter a valid 10-digit mobile number'
                    }
                  })}
                  placeholder="Phone"
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  placeholder="Email Address"
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>
          </div>

          {/* Order Summary and Payment */}
          <div className="space-y-6">
            {/* Your Order */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Order</h3>
              
              {cart?.product?.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#f3f4f6"/>
                            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280" font-family="Arial" font-size="12">
                              IMG
                            </text>
                          </svg>
                        `)}`;
                      }}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">× {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium">{FormatEuroCurrency((item.purchaseAtPrice * item.quantity))}</span>
                </div>
              ))}
              
              <div className="space-y-2 py-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{FormatEuroCurrency(subtotal ?? 0)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-orange-600">{FormatEuroCurrency(total ?? 0)}</span>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment</h3>
              
              <div className="space-y-4">
                {/* Cash on Delivery */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <input
                      id="cod"
                      type="radio"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="cod" className="ml-3 flex flex-col md:flex-row items-start md:items-center gap-2">
                      <FaTruck className="w-5 h-5 mr-2 text-zinc-400" />
                      <span className="font-medium text-gray-900">Cash on delivery</span>
                    </label>
                  </div>
                  {paymentMethod === 'cod' && (
                    <p className="mt-2 ml-7 text-sm text-gray-600">
                      Pay with cash upon delivery.
                    </p>
                  )}
                </div>

                {/* Credit/Debit Card */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <input
                      id="card"
                      type="radio"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="card" className="ml-3 flex flex-col md:flex-row items-start md:items-center gap-2">
                      <FaCreditCard className="w-5 h-5 mr-2 text-zinc-400" />
                      <span className="font-medium text-gray-900">Credit Card/Debit Card/NetBanking</span>
                        <img src="/assets/images/logo/razorpay.png" alt="" className='w-[80px]' />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                  <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
                </p>
              </div>

              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className={`w-full mt-6 font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#f27521] hover:bg-[#f27521] text-white'
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Place order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutShippingInterface;