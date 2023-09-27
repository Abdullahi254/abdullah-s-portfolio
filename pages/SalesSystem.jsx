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
                    <h3 className='px-2'>Sales</h3>
                </div>
            </div>

            <div className='max-w-[1240px] m-auto p-2 grid md:grid-cols-4 gap-8 pt-8'>
                <div className='col-span-3'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Project</p>
                    <h2 className='py-4 px-2'>Overview</h2>
                    <p className='p-2 mb-4'>

                        The proposed system is designed to streamline the gaming experience for both customers and gaming lounge owners. It issues QR tickets to customers with a timestamp indicating when they start gaming. The key features of this system include:
                    </p>
                    <ol className='py-2 px-4 text-sm mb-2'>
                        <li className='list-disc py-1 tracking-wide'><b>Time-Based Billing: </b>The system calculates the gaming charges based on the time a person has played, allowing gaming lounge owners to set their own rate per minute.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Convenience: </b>Customers can simply scan their QR ticket after finishing their gaming session and use the application to make payment. This eliminates the need for manual calculations and cash transactions, enhancing convenience for both parties.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Efficiency: </b>By automating the billing process, the system reduces the workload for gaming lounge managers, making their tasks less tedious.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Improved Customer Experience: </b>Customers benefit from a seamless and hassle-free payment process, contributing to an enhanced gaming experience.</li>
                    </ol>
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