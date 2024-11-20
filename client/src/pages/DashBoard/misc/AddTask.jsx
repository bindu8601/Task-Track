import { Checkbox, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const AddTask = () => {
  return (
    <div className="px-[35px] py-[25px]">
      <div className="flex justify-between">
        <p className='text-[16px] font-[600]'>Add Task</p>
        <p className='text-[14px] font-[600]'>Go Back</p>
      </div>
        <div className='border p-3 mt-5'>
          <p className='text-[14px] font-[600] mb-[6px]'>Title</p>
          <Input />
          <p className='text-[14px] font-[600] mt-[15px] mb-[6px]'>Date</p>
          <Input />
          <p className='text-[14px] font-[600] mt-[15px] mb-[6px]'>Priority</p>
          <div className='flex items-center'>
            <span
              style={{
                display: 'inline-block',
                width: '5px',
                height: '5px',
                backgroundColor: 'red',
                borderRadius: '50%',
              }}
            ></span>
            <p className='pl-[7px]'>Extreme <Checkbox/></p>
            <span
              style={{
                display: 'inline-block',
                width: '5px',
                height: '5px',
                backgroundColor: 'blue',
                borderRadius: '50%',
              }}
              className='ml-[15px]'
            ></span>
            <p className='pl-[7px]'>Moderate <Checkbox/></p>
            <span
              style={{
                display: 'inline-block',
                width: '5px',
                height: '5px',
                backgroundColor: 'green',
                borderRadius: '50%',
                
              }}
              className='ml-[15px]'

            ></span>
            <p className='pl-[7px]'>Low <Checkbox/></p>
          </div>
          <div className='text-[14px] font-[600] mt-[15px]'>
            <p className='mb-[10px]'>Task Description</p>
            <TextArea rows={5} placeholder='Start Writing here...'/>
          </div>
        </div>
        <button className='bg-[#F24E1E] text-[white] w-[90px] h-[34px] mt-4' style={{borderRadius:'6px'}}>
            Done
        </button>
      </div>
  )
}

export default AddTask
