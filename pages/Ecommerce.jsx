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
                    <Link href="https://dukamoto.vercel.app/"><h3 className='cursor-pointer text-blue-300 underline text-sm'>Duka moto</h3></Link>
                </div>
            </div>

            <div className='max-w-[1240px] m-auto p-2 grid md:grid-cols-4 gap-8 pt-8'>
                <div className='col-span-3'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Project</p>
                    <h2 className='py-4 px-2'>Overview</h2>
                    <p className='p-2 mb-4'>
                    The eCommerce site is a cutting-edge online shopping platform built using Next.js, Hypergraph, and GraphQL technologies. Its unique feature is its integration with Mpesa, a popular mobile payment system in the Kenyan market, catering specifically to local payment preferences. The site relies on Snipchart for robust backend operations.
                    </p>
                    <ol className='py-2 px-4 text-sm mb-2'>
                        <li className='list-disc py-1 tracking-wide'><b>Next.js and Hypergraph: </b>The use of Next.js ensures a fast and responsive front-end experience, while Hypergraph enables efficient data storage and retrieval, enhancing overall website performance.</li>
                        <li className='list-disc py-1 tracking-wide'><b>GraphQL Integration: </b>GraphQL simplifies data querying and retrieval, offering a flexible and efficient way to interact with the website&apos;s backend.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Mpesa Payment: </b>By integrating Mpesa as the payment merchant, the eCommerce site caters to the Kenyan market&apos;s specific payment needs, providing a seamless and familiar payment method for customers.</li>
                        <li className='list-disc py-1 tracking-wide'><b>Snipchart Backend: </b>Snipchart is employed to handle the backend operations, ensuring reliability, security, and scalability for the eCommerce site.</li>
                    </ol>
                    <Link href="https://github.com/Abdullahi254/react-kenyan-ecommerce-template.git">
                        <div className='px-2'>
                            <button className='py-3 px-5 text-sm rounded-xl hover:scale-110 ease-in duration-300'>code</button>
                        </div>
                    </Link>
                </div>
                <div className=' col-span-3 md:col-span-1 flex flex-col justify-evenly shadow-xl rounded-2xl hover:scale-105 ease-in duration-300 p-4'>
                    <h3 className='my-2 md:my-0'>Technologies</h3>
                    <li className='my-2 md:my-0'>Next JS</li>
                    <li className='my-2 md:my-0'>GraphQl</li>
                    <li className='my-2 md:my-0'>Tailwind</li>
                    <li className='my-2 md:my-0'>Typescript</li>
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