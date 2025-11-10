import { Spin } from 'antd'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'

const loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 48, color: '#f27521' }} spin />} 
                />
    </div>

  )
}

export default loading