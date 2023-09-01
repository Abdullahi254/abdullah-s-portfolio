import React from 'react'
import Image from 'next/image'
import compImage from '../public/assets/comp-img.avif'
import Link from 'next/link'
function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center  py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'> Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Having always been fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing in the fiverr platform . I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <p className='py-2 text-gray-600'>
            Prior to this role, I completed a 4-year course in computer science, where I honed my coding and software engeneering skills.
          </p>
          <Link href="/#projects">
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects
            </p>
          </Link>

        </div>
        <div className='shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={compImage} alt="/" priority/>
        </div>
      </div>
    </div>
  )
}

export default About