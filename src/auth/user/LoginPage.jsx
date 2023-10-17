import React, { useEffect, useState } from 'react'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'
import { toast } from 'react-toastify'

export const LoginPage = () => {


  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ShowPassword, setShowPassword] = useState(false)

  const handleInput = (e) => {
    if (e){
      if(e.target.id === "email"){
        setEmail(e.target.value)
      }
      if(e.target.id === "password"){
        setPassword(e.target.value)
      }
    }};

    const shwpswd = ()=>{
      setShowPassword(!ShowPassword)
    }



  return (
    <>
    <div className='flex items-center justify-center bg-[#161523] w-full h-screen'>
    <div className='flex flex-row items-center justify-center text-white shadow-lg p-[30px] bg-[#201f2d] rounded w-[600px]'>
    <div>
    <img src='' alt=""/>
    </div>
    <div className='flex flex-col gap-2'>
    <h1 className='text-3xl'>Welcome Back!</h1>
    <p className='text-xs'>Sign in to your account</p>
      <div className='flex flex-col gap-1'>
        <span>Email</span>
        <input onChange={handleInput} id='email' className='bg-[#201f2d] border-[1px] p-[5px] rounded' placeholder='You@Example.com' type="text"/>
      </div>
      <div className='flex flex-col gap-1'>
        <span>Password</span>
          <div className='relative flex items-center'>
            <input onChange={handleInput} id='password' className='bg-[#201f2d] border-[1px] p-[5px] rounded w-full focus:outline focus:outline-red-600' placeholder='Password here...' type={ShowPassword ? 'text' : 'password'}/>
            <div className='absolute cursor-pointer right-1' onClick={shwpswd}>{ShowPassword? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
           : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          }</div>
          </div>
        </div>
      <div className='flex flex-col gap-3'>
        <span className='ps-[140px] text-sm'><a href="">Forgot Password?</a></span>
        <button className='w-[250px] bg-[#ef233c] rounded p-[8px]'>Sign In</button>
        <span>Don't have an account? <a href="" className='text-red-600'>Sign Up</a></span>
        <div className='flex flex-row gap-5 items-center justify-center'>
          <div className='flex items-center justify-center shadow-lg bg-[#201f2d] border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer'>
          <a href=""><img className='w-[20px] h-[20px]' src={google}/></a>
          </div>
          <div className='flex items-center justify-center shadow-lg bg-[#201f2d] border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer'>
          <a href=""><img className='w-[30px] h-[30px]' src={facebook} /></a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
