import React from 'react'
import { TaskStatus } from '../../../assets/icons/icons'
import RadialBar from './RadialBar'

const TaskStatusCard = () => {
  return (
    <div className='w-[426px] h-[263px] mt-[30px] ml-[20px]'  style={{
        borderRadius: '14px',
        boxShadow:
          '0px 5px 11px 0px rgba(0, 0, 0, 0.04),0px 19px 19px 0px rgba(0, 0, 0, 0.03),0px 44px 26px 0px rgba(0, 0, 0, 0.02),0px 77px 31px 0px rgba(0, 0, 0, 0.01),0px 121px 34px 0px rgba(0, 0, 0, 0)',
    }}>
        <div className='flex items-center'>
        <TaskStatus/>
        <p>Task Status</p>
        </div>
        <div className='flex'>
        <RadialBar/>
        <RadialBar/>
        <RadialBar/>
        </div>
      
    </div>
  )
}

export default TaskStatusCard
