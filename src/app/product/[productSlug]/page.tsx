'use client'

import Navbar from '@/components/Layout/Header/Navbar';
import { ProductList, productType } from '@/constants/data/product/productList';
import { FormatEuroCurrency } from '@/utils/Formater';
import Link from 'next/link';
import { useParams,useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GrShareOption } from 'react-icons/gr';
import { IoMdHeart } from 'react-icons/io';
import { LuMapPin, LuZoomIn } from 'react-icons/lu';
import { TbStarFilled } from 'react-icons/tb';


const SingleProduct = () => {
  const params = useParams();
  const productSlug = params?.productSlug ? decodeURIComponent(params.productSlug as string) : "";
  const router = useRouter();

//   console.log(productSlug);
  
  // Fix: Use find() instead of filter() to get a single product
  const product = ProductList.find((item: productType) => item.slug === productSlug);

//   console.log(product);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  // Fix: Check if product exists before defining functions
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

const handleSubmit = () => {
  // ✅ Find product from ProductList
  const product = ProductList.find(
    (item: productType) => item.slug === productSlug
  );

  if (!product) {
    console.error("Product not found");
    return;
  }

  // ✅ Build cart object
  const cartObject = {
    product: [
      {
        productId: product.productID,
        name: product.name,
        slug: product.slug,
        purchaseAtPrice: product.price || 0, // or whichever field you have
        quantity: quantity, // default quantity (you can update dynamically)
        images: product.images || [],
      },
    ],
  };

  // ✅ Save in localStorage
  localStorage.setItem("cart", JSON.stringify(cartObject));
  // ✅ Redirect to shipping
  router.push("/shipping");
};

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Home</span> <span className="mx-2">/</span> 
          <span>Product</span> <span className="mx-2">/</span>
          <span className="text-blue-600 font-medium">{product.slug}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-5 bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
          {/* Image Gallery Section */}
          <div className="p-4 md:p-8 ">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-4 group">
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f3f4f6"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280" font-family="Arial" font-size="16">
                          Conference Image ${currentImageIndex + 1}
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <FaChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <FaChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </>
                )}

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <LuZoomIn className="w-4 h-4 text-gray-600" />
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  {currentImageIndex + 1} / {product.images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-6 gap-2">
                {product.images.slice(0, 6).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentImageIndex === index 
                        ? 'border-[#f27521] ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#f3f4f6"/>
                            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial" font-size="10">
                              ${index + 1}
                            </text>
                          </svg>
                        `)}`;
                      }}
                    />
                  </button>
                ))}
                {product.images.length > 6 && (
                  <div className="aspect-square rounded-lg bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-xs text-gray-500 font-medium">
                    +{product.images.length - 6}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="p-4 md:p-8 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                  <LuMapPin className="w-3 h-3" />
                  {product.category}
                </span>
                {/* <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  Available
                </span> */}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className='text-md'>Product ID: {product.productID}</span>
                {/* <div className="flex items-center gap-1">
                  <TbStarFilled className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 (124 reviews)</span>
                </div> */}
              </div>
            </div>

            {/* Price */}
            <div className="py-2 md:py-4">
              <div className="text-3xl font-bold text-[#f27521]">
                {FormatEuroCurrency(product.price)}
                {/* <span className="text-lg font-normal text-gray-500 ml-2">per registration</span> */}
              </div>
              {/* <div className="text-sm text-green-600 font-medium mt-1">
                🎉 Special Launch Price - Limited Time
              </div> */}
            </div>

            {/* Quick Info */}
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>November 2024</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>500+ Attendees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Award Ceremony</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Vietnam</span>
              </div>
            </div> */}

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-md font-medium text-gray-700">Quantity :</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={handleSubmit}  className="flex-1 bg-[#f27521] hover:bg-[#f27521] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  <AiOutlineShoppingCart className="w-5 h-5" />
                  Buy Now
                </button>
                {/* <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 border border-gray-300 rounded-lg transition-all duration-200 hover:shadow-md ${
                    isWishlisted ? 'text-red-500 border-red-300 bg-red-50' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <IoMdHeart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button> */}
                {/* <button className="p-3 border border-gray-300 rounded-lg text-gray-600 hover:text-blue-500 transition-colors duration-200 hover:shadow-md">
                  <GrShareOption className="w-5 h-5" />
                </button> */}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-t border-gray-200 pt-5">
              <div className="flex border-b border-gray-200 mb-4">
                {['description', 'details', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-medium text-sm md:text-md capitalize transition-colors duration-200 border-b-2 ${
                      activeTab === tab
                        ? 'text-blue-600 border-blue-600'
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="text-gray-600 leading-relaxed">
                {activeTab === 'description' && (
                  <p className='text-md'>{product.desc}</p>
                )}
                {activeTab === 'details' && (
                  <div className="space-y-2">
                    <p><strong>Event Type:</strong> International Conference & Award Ceremony</p>
                    <p><strong>Location:</strong> Vietnam</p>
                    <p><strong>Duration:</strong> 3 Days</p>
                    <p><strong>Language:</strong> English</p>
                    <p><strong>Includes:</strong> Conference Access, Award Ceremony, Networking Sessions, Materials</p>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <TbStarFilled key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="font-medium">4.8 out of 5</span>
                      <span className="text-gray-500">(124 reviews)</span>
                    </div>
                    <p className="text-md">Join hundreds of satisfied attendees who found value in this exceptional conference experience.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleProduct;