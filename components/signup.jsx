import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/logo.png"
import GoogleIcon from '@mui/icons-material/Google';

function signUp() {
    return (
        <div className="flex h-screen w-screen justify-start flex-col">
            <div className="m-auto my-8 w-full md:w-3/4 max-w-2xl  flex flex-col justify-center shadow-2xl rounded-md">
                <div className='m-auto pt-3 mt-2'>
                    <Image width={100} height={80} layout="intrinsic" src={logo} alt="LOGO image" priority/>
                </div>
                <div className='m-auto my-4'>
                    <p className='text-xl md:text-2xl font-semibold'>
                        Create a new account
                    </p>
                    <p className='text-sm md:text-base py-1 ml-2 md:ml-6'>
                        or <a className='text-indigo-300 hover:text-indigo-700 cursor-pointer hover:underline'>
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form className='mt-4 w-full rounded-md '>
                    <div className='my-2 mx-1'>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                    </div>
                    <div className='mx-1 mb-4'>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                    <div className='mx-1 mb-4'>
                        <label htmlFor="password2" className="sr-only">Confirm password</label>
                        <input id="password2" name="password2" type="password" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm password" />
                    </div>
                    
                    <div className='w-full text-center mb-3'>
                        <button type='submit' className='bg-indigo-500 py-2 w-3/4 rounded-lg text-gray-200 hover:bg-indigo-800 hover:text-gray-200 text-base md:text-lg'>
                            Sign Up
                        </button>
                    </div >
                </form>
                <div className='my-4 w-full flex justify-center'>
                    <hr className='w-1/4 mt-3 mr-3' />
                    <p className='mr-3'>Or continue with</p>
                    <hr className='w-1/4 mt-3' />
                </div>
                <div className='m-auto mb-4 cursor-pointer'>
                    <GoogleIcon className='fill-indigo-500 md:text-3xl hover:fill-indigo-800' />
                </div>
            </div>
        </div>
    )
}

export default signUp