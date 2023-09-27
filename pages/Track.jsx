import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import truckImg from '../public/assets/projects/watiti.PNG'
function Track() {

    return (
        <div className='w-screen'>
            <div className='w-full h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
                <Image src={truckImg} alt="/" layout='fill' objectFit='cover' className='absolute z-1' />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] transalte-y-[-50%] text-white z-20 p-2'>
                    <h2 className='py-2 uppercase'>Truck Tracking System.</h2>
                    <h3>Book Keeping</h3>
                </div>
            </div>

            <div className='max-w-[1240px] m-auto p-2 grid md:grid-cols-4 gap-8 pt-8'>
                <div className='col-span-3'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Project</p>
                    <h2 className='py-4 px-2'>Overview</h2>
                    <p className='p-2 mb-4'>
                    The Truck Tracking System is a robust web application developed using Next.js and powered by Firebase. Its core function is to efficiently monitor the movement and logistics of truck lorries transporting sand from mines to a factory.
                    </p>
                    <ol className='py-2 px-4 text-sm mb-2'>
                        <li className='list-disc py-1 tracking-wide'><b>Real-time Tracking: </b>The system provides real-time tracking of truck lorries, ensuring visibility into their locations and progress.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Tonnes Transported: </b>It records the amount of sand transported in tonnes, allowing for accurate inventory management.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Expense Tracking: </b>The application meticulously tracks expenses related to truck operations, including driver payments, fuel costs, maintenance, and other expenditures.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Data Visualization: </b>The system generates charts and graphs that showcase expense trends over time, enabling users to make informed decisions and optimize operations.</li>
                    </ol>
                    <Link href="https://github.com/Abdullahi254/project-watiti">
                        <div className='px-2'>
                            <button className='py-3 px-5 text-sm rounded-xl hover:scale-110 ease-in duration-300'>code</button>
                        </div>
                    </Link>
                </div>
                <div className=' col-span-3 md:col-span-1 flex flex-col justify-evenly shadow-xl rounded-2xl hover:scale-105 ease-in duration-300 p-4'>
                    <h3 className='my-2 md:my-0'>Technologies</h3>
                    <li className='my-2 md:my-0'>Next JS</li>
                    <li className='my-2 md:my-0'>Tailwind</li>
                    <li className='my-2 md:my-0'>Typescript</li>
                    <li className='my-2 md:my-0'>Firebase</li>
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

export default Track