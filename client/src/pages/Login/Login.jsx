import React from 'react'
import { Button, Checkbox } from 'antd'
import CustomInput from '../Register/components/CustomInput'
import loginImage from '../../assets/images/Login.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate('/register')
  }
  return (
    <div className="w-screen h-screen bg-[#FF6767] relative">
      <div
        className="flex bg-white w-[1236px] h-[600px] left-[102px] top-[60px] absolute"
        style={{
          borderRadius: '10px',
          boxShadow:
            '5px 4px 14px 0px rgba(0, 0, 0, 0.04),20px 16px 26px 0px rgba(0, 0, 0, 0.03),45px 36px 34px 0px rgba(0, 0, 0, 0.02),80px 64px 41px 0px rgba(0, 0, 0, 0.01),124px 100px 45px 0px rgba(0, 0, 0, 0);',
        }}
      >
        <div className="mt-[140px] ml-[50px]">
          <p className="text-[36px] font-[700] leading-[44px] text-[#212427]">
            Sign In
          </p>
          <CustomInput placeHolder="Enter Username" />
          <CustomInput placeHolder="Enter Password" />
          <p className="flex pt-[16px]">
            <Checkbox className="pr-[17px]" />
            <span className="text-[16px] text-[#212427]">Remember Me</span>
          </p>
          <Button className="w-[129px] h-[40px] bg-[#FF9090] text-[white] mt-[16px]">
            Login
          </Button>
          <p className="flex pt-[16px] text-[16px] text-[#212427]">
            Don't have an account?
            <p
              className="text-[#4096ff] pl-[5px]"
              style={{ cursor: 'pointer' }}
              onClick={handleRegister}
            >
              Create One
            </p>
          </p>
        </div>
        <div className="w-[480px] h-[500px] mt-[40px] flex items-center ml-[70px] mr-[70px]">
          <img src={loginImage} />
        </div>
      </div>
    </div>
  )
}

export default Login
