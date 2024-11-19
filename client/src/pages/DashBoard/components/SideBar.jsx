import React from 'react'
import Bindu from '../../../assets/images/Bindu.png'
import {
  DashBoardIcon,
  HelpIcon,
  SettingsIcon,
  TaskCategoriesIcon,
  TaskIcon,
  VitalIcon,
} from '../../../assets/icons/icons'

const SideBar = () => {
  return (
    <div
      className="w-[365px] relative bg-[#FF6767] mt-[44px] h-[868px] left-[-35px]"
      style={{ borderRadius: '0px 8px 8px 0px' }}
    >
      <div className="flex flex-col items-center">
        {/* Profile Section */}
        <img
          style={{
            boxSizing: 'border-box',
            border: '1px solid rgb(255, 255, 255)',
            width: '86px',
            height: '86px',
            marginTop: '-35px',
          }}
          className="rounded-full"
          src={Bindu}
          alt="Bindu"
        />
        <p className="mt-4 text-white text-[16px] font-[600]">
          Bindu Eppalapalle
        </p>
        <p className="text-white text-[12px]">bindusai888@gmail.com</p>
      </div>

      {/* Navigation Section */}
      <div className="mt-8 pl-[65px] ">
        <div className="flex items-center mb-9 text-white gap-[8px]">
          <DashBoardIcon className="mr-3" />
          <p>DashBoard</p>
        </div>
        <div className="flex items-center mb-9 text-white gap-[8px]">
          <VitalIcon className="mr-3" />
          <p>Vital Task</p>
        </div>
        <div className="flex items-center mb-9 text-white gap-[8px]">
          <TaskIcon className="mr-3" />
          <p>My Task</p>
        </div>
        <div className="flex items-center mb-9 text-white gap-[8px]">
          <TaskCategoriesIcon className="mr-3" />
          <p>Task Categories</p>
        </div>
        <div className="flex items-center mb-9 text-white gap-[8px]">
          <SettingsIcon className="mr-3" />
          <p>Settings</p>
        </div>
        <div className="flex items-center text-white gap-[8px]">
          <HelpIcon className="mr-3" />
          <p>Help</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
