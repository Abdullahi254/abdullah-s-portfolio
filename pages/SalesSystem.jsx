import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import salesImg from '../public/assets/projects/Sales.png'

function SalesSystem() {
    return (
        <div className='w-screen'>
            <div className='w-full h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
                <Image src={salesImg} alt="/" layout='fill' objectFit='cover' className='absolute z-1' />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] transalte-y-[-50%] text-white z-20 p-2'>
                    <h2 className='py-2 uppercase'>Gaming Sales System</h2>
                    <h3>React JS/ Material UI/ Firestore   </h3>
                </div>
            </div>

            <div className='max-w-[1240px] m-auto p-2 grid md:grid-cols-4 gap-8 pt-8'>
                <div className='col-span-3'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Project</p>
                    <h2 className='py-4 px-2'>Overview</h2>
                    <p className='p-2 mb-4'>
                        The system will provide a customer with a QR ticket that has a timestamp on when they have started gaming. The idea is to calculate the amount a person has to pay using the respective time they have played.
                        The gaming lounge owner/manager has the freedom to choose their own rate per minute. After finishing playing, the gamer can scan the ticket and pay using the application. This will help make the managers work less tedious and give the customer a better gaming experience.

                    </p>
                    <Link href="https://github.com/Abdullahi254/gaming-lounge-management-system.git">
                        <div className='px-2'>
                            <button className='py-3 px-5 text-sm rounded-xl hover:scale-110 ease-in duration-300'>code</button>
                        </div>
                    </Link>
                </div>
                <div className=' col-span-3 md:col-span-1 flex flex-col justify-evenly shadow-xl rounded-2xl hover:scale-105 ease-in duration-300 p-4'>
                    <h3 className='my-2 md:my-0'>Technologies</h3>
                    <li className='my-2 md:my-0'>React JS</li>
                    <li className='my-2 md:my-0'>Firebase Firestore</li>
                    <li className='my-2 md:my-0'>Firebase Cloud-Functions</li>
                    <li className='my-2 md:my-0'>Firebase Authentication</li>
                    <li className='my-2 md:my-0'>Daraja API</li>
                    <li className='my-2 md:my-0'>Material UI</li>
                </div>
                <div className='col-span-3 px-4 mt-4 cursor-pointer'>
                    <Link href='/#projects'>
                        <p className='uppercase underline text-sm tracking-widest font-semibold'> back</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SalesSystem