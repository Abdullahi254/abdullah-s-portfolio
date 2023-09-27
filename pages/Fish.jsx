import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import fishImg from '../public/assets/projects/project_fish.PNG'
function Fish() {

    return (
        <div className='w-screen'>
            <div className='w-full h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
                <Image src={fishImg} alt="/" layout='fill' objectFit='cover' className='absolute z-1' />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] transalte-y-[-50%] text-white z-20 p-2'>
                    <h2 className='py-2 uppercase'>Fish Batch Record System</h2>
                    <h3>Book Keeping</h3>
                </div>
            </div>

            <div className='max-w-[1240px] m-auto p-2 grid md:grid-cols-4 gap-8 pt-8'>
                <div className='col-span-3'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Project</p>
                    <h2 className='py-4 px-2'>Overview</h2>
                    <p className='p-2 mb-4'>
                        The Fish Batch Record System is a robust and innovative application built on a modern tech stack, including Next.js, Tailwind CSS, Prisma, and PlanetScale as the database. This application is designed to streamline the management of fish batches brought in daily, with a primary focus on tracking weigh-ins, considering water loss, and maintaining sales records.
                    </p>
                    <ol className='py-2 px-4 text-sm mb-2'>
                        <li className='list-disc py-1 tracking-wide'><b>Weigh-In Tracking: </b>The system allows users to record the weight of each fish batch as it arrives at the facility. It stores this data securely and efficiently using Prisma to interact with the PlanetScale database.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Water Loss Monitoring: </b>One of its standout features is the ability to track water loss. If a batch is weighed again later or on a different day and the weight is less, the system automatically calculates and informs users about the water loss. This critical information helps users understand the impact of water loss on their inventory and sales.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Sales Ledger: </b>The application maintains detailed sales records, providing users with a clear overview of their sales transactions. It tracks sales by batch, allowing for accurate accounting and analysis of revenue.</li>
                        <li className='list-disc py-1 tracking-wide'><b>User-Friendly Interface: </b>Next.js and Tailwind CSS ensure a responsive and intuitive user interface, making it easy for users to navigate the system and input data efficiently.</li>
                    </ol>
                    <Link href="https://github.com/Abdullahi254/Project-fish">
                        <div className='px-2'>
                            <button className='py-3 px-5 text-sm rounded-xl hover:scale-110 ease-in duration-300'>code</button>
                        </div>
                    </Link>
                </div>
                <div className=' col-span-3 md:col-span-1 flex flex-col justify-evenly shadow-xl rounded-2xl hover:scale-105 ease-in duration-300 p-4'>
                    <h3 className='my-2 md:my-0'>Technologies</h3>
                    <li className='my-2 md:my-0'>Next JS</li>
                    <li className='my-2 md:my-0'>Tailwind</li>
                    <li className='my-2 md:my-0'>Prisma</li>
                    <li className='my-2 md:my-0'>Planet Scale</li>
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

export default Fish