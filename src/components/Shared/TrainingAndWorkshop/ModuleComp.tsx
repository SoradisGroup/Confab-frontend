import Heading from '@/components/UI/Title/Heading'
import { moduleNames, moduleNames2 } from '@/constants/data/TrainingAndWorkshop/module';
import { Collapse } from 'antd'
import React from 'react'
import { IoMdAdd } from 'react-icons/io';

const ModuleComp = () => {

    

     const customExpandIcon = ({ isActive }: { isActive?: boolean }) => (
    <IoMdAdd 
      className={`w-5 h-5 transition-transform duration-200 ${
        isActive ? 'rotate-45' : 'rotate-0'
      }`} 
    />
  );

  const items = moduleNames.map((module, index) => ({
    key: index.toString(),
    label: (
      <span className="text-lg font-medium">
        {module.label}
      </span>
    ),
    children: (
      <div className="space-y-3">
        {
            module.desc.map((item,i)=>(
                <p key={i} className='text-md'>{item}</p>
            ))
        }
      </div>
    ),
    className: "border-b border-gray-200 last:border-b-0"
  }));

    const items2 = moduleNames2.map((module, index) => ({
    key: index.toString(),
    label: (
      <span className="text-lg font-medium">
        {module.label}
      </span>
    ),
    children: (
      <div className="space-y-3">
        {
            module.desc.map((item,i)=>(
                <p key={i} className='text-md'>{item}</p>
            ))
        }
      </div>
    ),
    className: "border-b border-gray-200 last:border-b-0"
  }));

  return (
    <div className='bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
    <Heading line1='Module'/>

<div className='w-full space-y-3'>
    <h1 className='text-xl font-[600]'>Modules for Individuals</h1>
    <Collapse
        ghost
        expandIcon={customExpandIcon}
        expandIconPosition="end"
    
        className="w-full custom-collapse"
        items={items}
      />
</div>

<div className='w-full space-y-3'>
    <h1 className='text-xl font-[600]'>Modules for Teams</h1>
    <Collapse
        ghost
        expandIcon={customExpandIcon}
        expandIconPosition="end"
    
        className="w-full custom-collapse"
        items={items2}
      />
</div>

</div>
  )
}

export default ModuleComp