'use client'

import { collaborationsLinks, companyLinks, eventLinks, publicationLinks, trainingAndWorkshopLinks } from '@/constants/data/header/headerInfo';
import { Drawer, Dropdown } from 'antd'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { MdClose, MdKeyboardArrowDown } from 'react-icons/md';


interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer = ({open,onClose}:MenuDrawerProps) => {

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
            onClick={onClose}
            className={`px-3 py-2 text-[15px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[500] transition duration-300 ease-in-out`}
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
            onClick={onClose}
            className={`px-3 py-2 text-[15px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[500] transition duration-300 ease-in-out`}
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
            onClick={onClose}
            className={`px-3 py-2 text-[15px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[500] transition duration-300 ease-in-out`}
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
            onClick={onClose}
            className={`px-3 py-2 text-[15px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[500] transition duration-300 ease-in-out`}
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
            onClick={onClose}
            className={`px-3 py-2 text-[15px] ${
              isActive(link.href)
                ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
            } font-[500] transition duration-300 ease-in-out`}
          >
            {link.label}
          </Link>
          ),
        }));


  return (
    <Drawer
        title={false}
        closable={false}
        open={open}
        placement={'right'}
        width={350}
      >
        <div className='w-full h-full bg-white text-white border-r border-[#f27521]'>
           <div className=' flex justify-between items-center px-3 py-3 border-b border-[#f27521]/40'>
                       <Link href="/">
      <img src="/assets/images/company/logo.webp" alt="" className='w-[150px] md:w-[200px]'/>
      </Link>
          
                      <button onClick={onClose}><MdClose className='text-[25px] text-[#f27521] hover:text-red-500'/></button>
                    </div>

 <div className='flex flex-col justify-start items-start text-[17px] font-[700] text-white'>
        <Link href="/" onClick={onClose} className={`w-full px-7 py-4 ${isActive('/')
            ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
         } font-[500] transition duration-300 ease-in-out`}>Home</Link>
        {/* <Link href="/" className='bannerTitle text-[#1c2834] font-[500]'>Company</Link> */}

<Dropdown menu={{ items: comapnyList }} placement="bottomLeft" onOpenChange={(flag) => setArrow(flag)} >
               <button  className={`w-full px-7 py-4 flex justify-start items-center gap-1  transition duration-300 ease-in-out text-[#1c2834] font-[500]`}>Company <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>

        <Link href="/service" onClick={onClose} className={`w-full px-7 py-4 ${isActive('/service')
            ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
         } font-[500] transition duration-300 ease-in-out`}>Services</Link>
        <Dropdown menu={{ items: collaborationList}} placement="bottomLeft" onOpenChange={(flag) => setArrow2(flag)}>
               <button  className={`w-full px-7 py-4 flex justify-start items-center gap-1  transition duration-300 ease-in-out text-[#1c2834] font-[500]`}>Collaborations <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow2 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
        <Dropdown menu={{ items: trainingAndWorkshopList}} placement="bottomLeft" onOpenChange={(flag) => setArrow3(flag)}>
               <button  className={`w-full px-7 py-4 flex justify-start items-center gap-1  transition duration-300 ease-in-out text-[#1c2834] font-[500]`}>Training and Workshops <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow3 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
        <Dropdown menu={{ items: publicationList}} placement="bottomLeft" onOpenChange={(flag) => setArrow4(flag)}>
               <button  className={`w-full px-7 py-4 flex justify-start items-center gap-1  transition duration-300 ease-in-out text-[#1c2834] font-[500]`}>Publications <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow4 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
              <Dropdown menu={{ items: eventList}} placement="bottomLeft" onOpenChange={(flag) => setArrow5(flag)}>
               <button  className={`w-full px-7 py-4 flex justify-start items-center gap-1  transition duration-300 ease-in-out text-[#1c2834] font-[500]`}>Events <MdKeyboardArrowDown className={`text-[18px] transition-transform duration-300 ${
                    arrow5 ? 'rotate-180' : ''
                  }`} /></button>
              </Dropdown>
        
        <Link href="/contact" onClick={onClose}  className={`w-full px-7 py-4 ${isActive('/contact')
            ? '!text-[#f27521] hover:!text-[#f27521]' : '!text-[#1c2834] hover:!text-[#f27521] '
         } font-[500] transition duration-300 ease-in-out`}>Contact</Link>

        {/* <button type='button' className='px-[15px] py-[5px] border-2 border-[#f27521] bg-transparent'><h1 className='text-md text-[#f27521] font-[500]'>Get in Touch</h1></button> */}


      </div>

                    
        </div>
      </Drawer>
  )
}

export default MenuDrawer