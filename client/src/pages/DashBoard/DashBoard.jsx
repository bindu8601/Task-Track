import React from 'react'
import Title from './components/Title'
import SearchBar from './components/SearchBar'
import CustomCalender from './components/CustomCalender'
import SideBar from './components/SideBar'
import Message from './components/Message'
import ToDo from './components/ToDo'

const DashBoard = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div
        className="bg-[#F8F8F8] pr-[72px] pl-[72px] flex h-[100px] items-center justify-between"
        style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.07)' }}
      >
        <Title />
        <SearchBar />
        <CustomCalender />
      </div>

      {/* Main Content */}
      <div className="flex">
        <SideBar />
        <div className="flex flex-col flex-grow">
          <Message />
          <ToDo />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
