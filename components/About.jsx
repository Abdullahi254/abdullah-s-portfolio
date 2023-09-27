import React from 'react'
import Image from 'next/image'
import compImage from '../public/assets/me.jpg'
import Link from 'next/link'
function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center  py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'> Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Hey there! 👋 I&apos;ve always been fascinated by the intricate world of programming. The way lines of code come together to create amazing digital experiences has always intrigued me. It didn&apos;t take long for me to realize that I wanted to dive deeper into this captivating realm.

            My journey began with JavaScript, and as I started unraveling its potential, I became even more enthusiastic about making websites come alive with interactivity. It was like unlocking a whole new dimension on the web!

            To gain hands-on experience and share my passion, I ventured into the world of freelancing on Fiverr. There, I had the chance to collaborate with clients on a variety of projects, each one a unique opportunity to harness the power of code and design.

            These days, I&apos;m immersed in building projects using React JS with Next JS, two technologies that truly inspire me. I&apos;m constantly seeking out and embracing new technologies, because staying on the cutting edge of development is a thrilling journey.

            Before this exciting phase of my career, I spent four enriching years completing a degree in computer science. During that time, I fine-tuned my coding and software engineering skills, laying a strong foundation for my current endeavors.

            My goal is to leverage my passion and skills to create innovative solutions and contribute to the dynamic world of technology. I&apos;m on a mission to transform ideas into reality through code, and I&apos;m thrilled about the endless possibilities that lie ahead. Let&apos;s build amazing things together! 🚀
          </p>
          <Link href="/#projects">
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects
            </p>
          </Link>

        </div>
        <div className='shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={compImage} alt="/" priority />
        </div>
      </div>
    </div>
  )
}

export default About