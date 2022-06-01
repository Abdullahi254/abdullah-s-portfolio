import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ecommerceImg from '../public/assets/projects/Ecommerce.png'
function Ecommerce() {

    return (
        <div className='w-screen'>
            <div className='w-full h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[40vh] bg-black/80 z-10' />
                <Image src={ecommerceImg} alt="/" layout='fill' objectFit='cover' className='absolute z-1' />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] transalte-y-[-50%] text-white z-20 p-2'>
                    <h2 className='py-2 uppercase'>ecommerce System</h2>
                    <h3>React JS/ Express JS/ Mongo DB  </h3>
                </div>
            </div>

            <div className='max-w-[1240px] m-auto p-2 grid md:grid-cols-4 gap-8 pt-8'>
                <div className='col-span-3'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Project</p>
                    <h2 className='py-4 px-2'>Overview</h2>
                    <p className='p-2 mb-4'>
                        This app was build using React JS and Material UI in the front. I used Express JS to
                        create the back-end API server and mongo DB as the database. Users are able to navigate
                        intuitively throughtout the application components and shop from either a mobile device
                        or larger screens.
                    </p>
                    <Link href="https://github.com/Abdullahi254/react-kenyan-ecommerce-template.git">
                        <div className='px-2'>
                            <button className='py-3 px-5 text-sm rounded-xl hover:scale-110 ease-in duration-300'>code</button>
                        </div>
                    </Link>
                </div>
                <div className=' col-span-3 md:col-span-1 flex flex-col justify-evenly shadow-xl rounded-2xl hover:scale-105 ease-in duration-300 p-4'>
                    <h3 className='my-2 md:my-0'>Technologies</h3>
                    <li className='my-2 md:my-0'>React JS</li>
                    <li className='my-2 md:my-0'>Express JS</li>
                    <li className='my-2 md:my-0'>Mongo DB</li>
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

export default Ecommerce