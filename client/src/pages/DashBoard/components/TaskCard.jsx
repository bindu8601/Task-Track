import React from 'react'

const TaskCard = () => {
  return (
    <div
      className="w-[402px] h-[166px] p-4 flex justify-between"
      style={{
        border: '1px solid rgb(161, 163, 171)',
        borderRadius: '14px',
        background: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-2">
        <p className="text-[16px] font-[600] text-black">
          Attend Nischal’s Birthday Party
        </p>
        <p className="text-[14px] font-[400] text-[#747474]">
          Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
          Elements)
        </p>
        <div className="flex space-x-4 text-sm">
          <p>
            <span className="text-[10px] font-[400]">Priority:</span>{' '}
            <span className="text-[#42ADE2] text-[10px] font-[400]">
              Moderate
            </span>
          </p>
          <p>
            <span className="text-[10px] font-[400]">Status:</span>{' '}
            <span className="text-[#F21E1E] text-[10px] font-[400]">
              Not Started
            </span>
          </p>
        </div>
        <p className="text-[#A1A3AB] text-[10px] font-[400]">
          Created on: <span>20/06/2023</span>
        </p>
      </div>

      {/* Right Section */}
      {/* <div>
        <img
          src="https://via.placeholder.com/80"
          alt="Birthday Party"
          className="w-[80px] h-[80px] rounded-md object-cover"
        />
      </div> */}
    </div>
  )
}

export default TaskCard
