import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Checkbox, Input, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    console.log('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    console.log('Image must be smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
const AddTask = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Browse</div>
    </button>
  )
  return (
    <div className="px-[35px] py-[25px]">
      <div className="flex justify-between">
        <p className="text-[16px] font-[600]">Add Task</p>
        <p className="text-[14px] font-[600]">Go Back</p>
      </div>
      <div className="border p-3 mt-5">
        <p className="text-[14px] font-[600] mb-[6px]">Title</p>
        <Input />
        <p className="text-[14px] font-[600] mt-[15px] mb-[6px]">Date</p>
        <Input />
        <p className="text-[14px] font-[600] mt-[15px] mb-[6px]">Priority</p>
        <div className="flex items-center">
          <span
            style={{
              display: 'inline-block',
              width: '5px',
              height: '5px',
              backgroundColor: 'red',
              borderRadius: '50%',
            }}
          ></span>
          <p className="pl-[7px]">
            Extreme <Checkbox />
          </p>
          <span
            style={{
              display: 'inline-block',
              width: '5px',
              height: '5px',
              backgroundColor: 'blue',
              borderRadius: '50%',
            }}
            className="ml-[15px]"
          ></span>
          <p className="pl-[7px]">
            Moderate <Checkbox />
          </p>
          <span
            style={{
              display: 'inline-block',
              width: '5px',
              height: '5px',
              backgroundColor: 'green',
              borderRadius: '50%',
            }}
            className="ml-[15px]"
          ></span>
          <p className="pl-[7px]">
            Low <Checkbox />
          </p>
        </div>
        <div className="text-[14px] font-[600] mt-[15px] flex">
          <div className="w-[600px]">
            <p className="mb-[10px]">Task Description</p>
            <TextArea rows={5} placeholder="Start Writing here..." />
          </div>
          <div className='ml-[20px]'>
            <p>Upload Image</p>
            <div className='mt-[10px]'>
            <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
            </div>
         
          </div>
         
        </div>
      </div>
      <button
        className="bg-[#F24E1E] text-[white] w-[90px] h-[34px] mt-4"
        style={{ borderRadius: '6px' }}
      >
        Done
      </button>
    </div>
  )
}

export default AddTask
