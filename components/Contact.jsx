import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import contactImg from '../public/assets/contact.avif'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
function Contact() {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full h-full'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Contact</p>
                <h2 className='py-4 px-2'>Get In Touch</h2>
                <div className='grid md:grid-cols-2 gap-8 h-[70%]'>
                    <div className='shadow-xl rounded-xl shadow-gray-400 p-4 hover:scale-105 ease-in duration-300 h-full flex flex-col justify-between'>
                        <div className='w-full mb-[150px] lg:mb-0'>
                            <Image src={contactImg} alt="/" priority/>
                            <h2 className='py-4 px-2'>Abdullahi Mohamud</h2>
                            <p className='uppercase text-sm tracking-wider px-2 mb-4'>Front-End Developer</p>
                            <p className='px-2'>
                                I am available for freelance or full-time positions. Contact
                                me and let&apos;s talk.
                            </p>
                        </div>
                        <div className='w-full'>
                            <p className='uppercase text-sm tracking-wider px-2 mb-4'>Connect with me</p>
                            <div className='w-full flex justify-evenly py-2'>
                                <Link href="https://www.linkedin.com/in/abdullahi-mohamud-aa04291b6/">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <Link href="https://github.com/Abdullahi254">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </Link>
                                <Link href="/#contact">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className='shadow-xl rounded-xl shadow-gray-400 p-4  h-full flex flex-col justify-evenly my-10 md:mt-0' action="https://formsubmit.co/a64c33f5f151b56f71fbdba8b3a92966" method="POST">
                            <div className='w-full grid grid-cols-2 gap-8'>
                                <div className='w-full'>
                                    <p className='uppercase text-sm mb-2'>Name</p>
                                    <input className='py-2  border-gray-300 rounded-lg w-full' type="text" name='name' required />
                                </div>
                                <div className='w-full'>
                                    <p className='uppercase text-sm mb-2'>Phone number</p>
                                    <input className='py-2 border-gray-300 rounded-lg w-full' type="number" name='phone' required />
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='uppercase text-sm mb-2'>Email</p>
                                <input className='py-2 border-gray-300 rounded-lg w-full' type="email" name="email" required  />
                            </div>
                            <div className='w-full'>
                                <p className='uppercase text-sm mb-2'>subject</p>
                                <input className='py-2 border-gray-300 rounded-lg w-full' type="text" name='subject' required />
                            </div>
                            <div className='w-full'>
                                <p className='uppercase text-sm mb-2'>Message</p>
                                <textarea className='border-gray-300 rounded-lg w-full' rows="12" name='message' required />
                            </div>
                            <button className='w-full rounded-lg bg-[#5651e5] text-white uppercase py-2' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <Link href="/">
                    <div className='my-16 md:my-10 rounded-full shadow-gray-700 shadow-xl p-4 cursor-pointer hover:scale-110 ease-in duration-300 mx-auto w-16'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5] m-auto' size={30} />
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Contact