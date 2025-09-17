'use client'

import MenuDrawer from '@/components/UI/Drawer/MenuDrawer';
import { collaborationsLinks, companyLinks, eventLinks, publicationLinks, trainingAndWorkshopLinks } from '@/constants/data/header/headerInfo';
import { Dropdown } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoMdMenu } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = ({textColor="!text-[#1c2834]"}) => {

      const [showHeader, setShowHeader] = useState(false);
     const [open, setOpen] = useState(false);
     const [arrow, setArrow] = useState(false);
    const [arrow2, setArrow2] = useState(false);
    const [arrow3, setArrow3] = useState(false);
    const [arrow4, setArrow4] = useState(false);
    const [arrow5, setArrow5] = useState(false);
    
    const pathname = usePathname();
    
    const isActive = (path: string) => pathname === path;
    
      const comapnyList = companyLinks.map(link => ({
          key: link.key,
          label: (
           <Link
            href={link.href}
            className={`px-3 py-2 text-[13px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[700] transition duration-300 ease-in-out`}
          >
            {link.label}
          </Link>
          ),
        }));
    
        const collaborationList = collaborationsLinks.map(link => ({
          key: link.key,
          label: (
           <Link
            href={link.href}
            className={`px-3 py-2 text-[13px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[700] transition duration-300 ease-in-out`}
          >
            {link.label}
          </Link>
          ),
        }));
    
         const trainingAndWorkshopList = trainingAndWorkshopLinks.map(link => ({
          key: link.key,
          label: (
           <Link
            href={link.href}
            className={`px-3 py-2 text-[13px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[700] transition duration-300 ease-in-out`}
          >
            {link.label}
          </Link>
          ),
        }));
    
        const publicationList = publicationLinks.map(link => ({
          key: link.key,
          label: (
           <Link
            href={link.href}
            className={`px-3 py-2 text-[13px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[700] transition duration-300 ease-in-out`}
          >
            {link.label}
          </Link>
          ),
        }));
    
    
        const eventList = eventLinks.map(link => ({
          key: link.key,
          label: (
           <Link
            href={link.href}
            className={`px-3 py-2 text-[13px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[700] transition duration-300 ease-in-out`}
          >
            {link.label}
          </Link>
          ),
        }));
    
      useEffect(() => {
        const handleScroll = () => {
          setShowHeader(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    
       const showDrawer = () => {
          setOpen(true);
        };
      
        const onClose = () => {
          setOpen(false);
        };

  return (
    <>
    <div className="w-full max-w-[2000px] mx-auto px-4 md:px-8 py-3 flex justify-between items-center ">
        <Link href="/">
      <img src="/assets/images/company/logo.webp" alt="" className='w-[150px] md:w-[200px] '/>
      </Link>

      <div className='hidden lg:flex justify-center items-center gap-5 text-md font-[700] text-white'>
        <Link href="/" className={`${isActive('/')
            ? '!text-[#f27521] hover:!text-[#f27521]' : `${textColor} hover:!text-[#f27521]`
         } font-[700] transition duration-300 ease-in-out`}>Home</Link>
        {/* <Link href="/" className='bannerTitle text-[#1c2834] font-[700]'>Company</Link> */}

<Dropdown menu={{ items: comapnyList }} placement="bottomLeft" onOpenChange={(flag) => setArrow(flag)} >
               <button  className={`py-2 flex justify-center items-center gap-1  transition duration-300 ease-in-out text-[#1c2834] font-[700] ${textColor}`}>Company <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>

        <Link href="/service" className={`${isActive('/service')
            ? '!text-[#f27521] hover:!text-[#f27521]' : `${textColor} hover:!text-[#f27521]`
         } font-[700] transition duration-300 ease-in-out`}>Services</Link>
        <Dropdown menu={{ items: collaborationList}} placement="bottomLeft" onOpenChange={(flag) => setArrow2(flag)}>
               <button  className={`py-2 flex justify-center items-center gap-1  transition duration-300 ease-in-out ${textColor}`}>Collaborations <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow2 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
        <Dropdown menu={{ items: trainingAndWorkshopList}} placement="bottomLeft" onOpenChange={(flag) => setArrow3(flag)}>
               <button  className={`py-2 flex justify-center items-center gap-1  transition duration-300 ease-in-out ${textColor}`}>Training and Workshops <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow3 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
        <Dropdown menu={{ items: publicationList}} placement="bottomLeft" onOpenChange={(flag) => setArrow4(flag)}>
               <button  className={`py-2 flex justify-center items-center gap-1  transition duration-300 ease-in-out ${textColor}`}>Publications <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow4 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
              <Dropdown menu={{ items: eventList}} placement="bottomLeft" onOpenChange={(flag) => setArrow5(flag)}>
               <button  className={`py-2 flex justify-center items-center gap-1  transition duration-300 ease-in-out ${textColor}`}>Events <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow5 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
        

        {/* <button type='button' className='px-[15px] py-[5px] border-2 border-[#f27521] bg-transparent'><h1 className='text-md text-[#f27521] font-[700]'>Get in Touch</h1></button> */}


      </div>


      <button
          onClick={showDrawer}
          className="block lg:hidden text-[#f27521] text-[30px]"
        >
          <IoMdMenu />
        </button>
    </div>
    <MenuDrawer open={open} onClose={onClose} />
    </>
  )
}

export default Navbar