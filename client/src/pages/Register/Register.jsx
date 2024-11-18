import React from 'react'
import register from '../../assets/images/Register.png'
import CustomInput from './components/CustomInput';
import { Button, Checkbox } from 'antd';

const Register = () => {
  return (
    <div className="w-screen h-screen bg-[#FF6767] relative"> 
    <div className='flex bg-white w-[1236px] h-[600px] left-[102px] top-[60px] absolute' style={{borderRadius:'10px',boxShadow:'5px 4px 14px 0px rgba(0, 0, 0, 0.04),20px 16px 26px 0px rgba(0, 0, 0, 0.03),45px 36px 34px 0px rgba(0, 0, 0, 0.02),80px 64px 41px 0px rgba(0, 0, 0, 0.01),124px 100px 45px 0px rgba(0, 0, 0, 0);'}}>
      <div className='w-[480px] h-[500px] flex items-center ml-[70px] mr-[70px]'> 
      <img src={register} />
      </div>
      <div className='mt-[40px]'>
        <p className='text-[36px] font-[700] leading-[44px] text-[#212427]'>Sign Up</p>
        <CustomInput placeHolder='Enter First Name'/>
        <CustomInput placeHolder='Enter Last Name'/>
        <CustomInput placeHolder='Enter Username'/>
        <CustomInput placeHolder='Enter Email'/>
        <CustomInput placeHolder='Enter Password'/>
        <CustomInput placeHolder='Confirm Password'/>
        <p className='flex pt-[16px]'>
        <Checkbox className='pr-[17px]'/>
I agree to all the terms
        </p>
        <Button className='w-[129px] h-[40px] bg-[#FF9090] text-[white] mt-[16px]'>Register</Button>
        <p className='flex pt-[16px] text-[#212427]'>Already have an account?
          <p className='text-[#4096ff] pl-[5px]' style={{cursor:'pointer'}} >Sign in</p>
        </p>
      </div>
    </div>
    </div>
  )
}



export default Register
