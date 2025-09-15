import { tabItems2 } from '@/constants/data/events/MegaConf/MegaConference'
import { Tabs } from 'antd'
import React from 'react'

const MegaConferenceDetailsComp = () => {
  return (
    <div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
<div className="w-full">
            <Tabs
              tabPosition="top"
              items={tabItems2}
              className="conference-tabs"
              size="large"
            />
          </div>
</div>
  )
}

export default MegaConferenceDetailsComp