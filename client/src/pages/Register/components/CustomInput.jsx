import React from 'react'
import { Input } from 'antd'

const CustomInput = ({ placeHolder }) => {
  return (
    <div className="pt-4">
      <Input className="w-[559px] h-[40px]" placeholder={placeHolder} />
    </div>
  )
}

export default CustomInput
