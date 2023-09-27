import React from 'react'
import Image from 'next/image'
import firebaseImg from '../public/assets/skills/firebase.png'
import cssImg from '../public/assets/skills/css.png'
import githubImg from '../public/assets/skills/github1.png'
import htmlImg from '../public/assets/skills/html.png'
import jsImg from '../public/assets/skills/javascript.png'
import mongoImg from '../public/assets/skills/mongo.png'
import nodeImg from '../public/assets/skills/node.png'
import reactImg from '../public/assets/skills/react.png'
import solidity from '../public/assets/skills/solidity.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import typescript from '../public/assets/skills/typescript.png'

function Skills() {
    return(
        <div id='skills' className='w-full lg:h-screen p-2 '>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4 '>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={githubImg} alt='/' width="64px" height="64px" priority/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={reactImg} alt='/' width="64px" height="64px" priority/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={solidity} alt='/' width="64px" height="64px" priority/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Solidity</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={typescript} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Typescript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={cssImg} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Css</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={jsImg} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={htmlImg} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={nodeImg} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NodeJs</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={tailwindImg} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={firebaseImg} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                            <div className='m-auto'>
                                <Image src={mongoImg} alt='/' width="64px" height="64px"/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills