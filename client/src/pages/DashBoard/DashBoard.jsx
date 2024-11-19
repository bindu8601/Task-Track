import React from 'react'
import Title from './components/Title'
import SearchBar from './components/SearchBar'
import CustomCalender from './components/CustomCalender'
import SideBar from './components/SideBar'

const DashBoard = () => {
  return (
    <div>
      <div
        className="bg-[#F8F8F8] pr-[72px] pl-[72px] flex h-[100px] items-center justify-between"
        style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.07)' }}
      >
        <Title />
        <SearchBar />
        <CustomCalender />
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default DashBoard
