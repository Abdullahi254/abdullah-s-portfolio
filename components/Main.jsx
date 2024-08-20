import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
function Main() {
    return (
        <div id='home' className='w-full h-screen text-center border-4'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Let&apos;s build something together.
                    </p>
                    <h1 className='py-4 pb-2 text-gray-700'>
                        Hi, I&apos;m <span className='text-[#5651e5]'>Abdullahi</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Software Engineer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I&apos;m a Full-stack Developer specializing in building (and occasionally designing) exceptional digital experiences.
                        Currently focused on developing responsive front-end applications while deepening expertise in back-end technologies to deliver complete
                        and scalable solutions.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href="https://www.linkedin.com/in/abdullahi-mohamud-aa04291b6/">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link href="https://github.com/Abdullahi254">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href="/#contact">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
