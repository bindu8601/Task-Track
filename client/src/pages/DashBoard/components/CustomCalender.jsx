import { BellOutlined, CalendarOutlined } from '@ant-design/icons'
import React from 'react'

const CustomCalender = () => {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('en-GB') // Format: DD/MM/YYYY
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' })
  return (
    <div className="flex pt-[37px] items-center">
      <div className="flex gap-[9px]">
        <button
          className="w-[36px] h-[36px]"
          style={{ borderRadius: '8px', backgroundColor: '#FF6767' }}
        >
          <BellOutlined style={{ color: 'white' }} />
        </button>
        <button
          className="w-[36px] h-[36px]"
          style={{ borderRadius: '8px', backgroundColor: '#FF6767' }}
        >
          <CalendarOutlined style={{ color: 'white' }} />
        </button>
      </div>
      <div className="pl-[30px]">
        <p className="text-[15px] font-[500]">{dayName}</p>
        <p className="text-[15px] font-[500] text-[#3ABEFF]">{formattedDate}</p>
      </div>
    </div>
  )
}

export default CustomCalender
