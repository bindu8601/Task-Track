import React, { useState } from 'react'
import register from '../../assets/images/Register.png'
import CustomInput from './components/CustomInput'
import { Button, Checkbox, Input, notification } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFirstName,
  setLastName,
  setUserEmail,
  setUserName,
  setUserPassword,
} from '../../reducers/userReducer'
import { registerUser } from '../../apis/request'

const Register = () => {
  const { firstName, lastName, userEmail, userName, userPassword } =
    useSelector(({ userDetails }) => userDetails)
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }
  const handleRegister = async () => {
    const payload = {
      firstName,
      lastName,
      userEmail,
      userName,
      password: userPassword,
    }
    try {
      let result = await registerUser(payload)
      if (result?.success) {
        console.log(result?.message)
      }
    } catch (err) {
      console.log(err)
    }
    console.log({ payload })
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
        <div className="w-[480px] h-[500px] flex items-center ml-[70px] mr-[70px]">
          <img src={register} />
        </div>
        <div className="mt-[40px]">
          <p className="text-[36px] font-[700] leading-[44px] text-[#212427]">
            Sign Up
          </p>
          <Input
            value={firstName}
            onChange={(e) => dispatch(setFirstName(e.target.value))}
            className="mt-4 w-[559px] h-[40px]"
            placeHolder="Enter First Name"
          />
          <Input
            onChange={(e) => dispatch(setLastName(e.target.value))}
            value={lastName}
            className="mt-4 w-[559px] h-[40px]"
            placeHolder="Enter Last Name"
          />
          <Input
            onChange={(e) => dispatch(setUserName(e.target.value))}
            value={userName}
            className="mt-4 w-[559px] h-[40px]"
            placeHolder="Enter Username"
          />
          <Input
            onChange={(e) => dispatch(setUserEmail(e.target.value))}
            value={userEmail}
            className="mt-4 w-[559px] h-[40px]"
            placeHolder="Enter Email"
          />
          <Input
            onChange={(e) => dispatch(setUserPassword(e.target.value))}
            value={userPassword}
            className="mt-4 w-[559px] h-[40px]"
            placeHolder="Enter Password"
          />
          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="mt-4 w-[559px] h-[40px]"
            placeHolder="Confirm Password"
          />
          <p className="flex pt-[16px]">
            <Checkbox className="pr-[17px]" />I agree to all the terms
          </p>
          <Button
            onClick={handleRegister}
            className="w-[129px] h-[40px] bg-[#FF9090] text-[white] mt-[16px]"
          >
            Register
          </Button>
          <p className="flex pt-[16px] text-[#212427]">
            Already have an account?
            <p
              className="text-[#4096ff] pl-[5px]"
              style={{ cursor: 'pointer' }}
              onClick={handleLogin}
            >
              Sign in
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
