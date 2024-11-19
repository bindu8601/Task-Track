import React from 'react';
import { ToDoIcon } from '../../../assets/icons/icons';
import TaskCard from './TaskCard';

const ToDo = () => {
  // Get today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short', // Short month format (e.g., "Nov")
    day: 'numeric', // Numeric day format (e.g., "20")
  });

  return (
    <div
      className="w-[466px] h-screen ml-[40px] mt-[30px]"
      style={{
        borderRadius: '14px',
        boxShadow:
          '0px 5px 11px 0px rgba(0, 0, 0, 0.04),0px 19px 19px 0px rgba(0, 0, 0, 0.03),0px 44px 26px 0px rgba(0, 0, 0, 0.02),0px 77px 31px 0px rgba(0, 0, 0, 0.01),0px 121px 34px 0px rgba(0, 0, 0, 0)',
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between p-4">
        <div className="flex items-center space-x-2">
          <ToDoIcon />
          <p className="text-[#FF6767] font-semibold">To-Do</p>
        </div>
        <div className="flex items-center space-x-1 text-[#FF6767]">
          <p className="text-xl font-bold">+</p>
          <p className="font-medium text-black">Add Task</p>
        </div>
      </div>

      {/* Date Section */}
      <div className="p-4 flex">
        <p className="text-gray-900">{formattedDate}</p>
        <p className='pl-[8px]'>.Today</p>
      </div>
      <div className='px-[30px]'>
      <TaskCard/>
      </div>
    </div>
  );
};

export default ToDo;
