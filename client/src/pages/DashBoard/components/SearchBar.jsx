import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex pt-[10px] items-center relative">
      <Input
        className="w-[695px] h-[36px] pr-[50px]"
        style={{
          boxShadow:
            '-1px 4px 10px 0px rgba(0, 0, 0, 0.04),-4px 17px 18px 0px rgba(0, 0, 0, 0.03),-9px 39px 24px 0px rgba(0, 0, 0, 0.02),-17px 69px 28px 0px rgba(0, 0, 0, 0.01),-26px 108px 31px 0px rgba(0, 0, 0, 0)',
        }}
      />
      <button
        className="absolute right-0 h-[36px] w-[36px] border"
        style={{ borderRadius: '8px', backgroundColor: '#FF6767' }}
      >
        <SearchOutlined style={{ color: 'white' }} />
      </button>
    </div>
  )
}

export default SearchBar
