import React from 'react'
import ProjectItem from './ProjectItem'
import salesImg from '../public/assets/projects/Sales.png'
import ecommerceImg from '../public/assets/projects/Ecommerce.png'
import fishImg from '../public/assets/projects/project_fish.PNG'
import truckImg from '../public/assets/projects/watiti.PNG'

const ImageList = [
    { title: 'Fish Batch Record System', language: 'Next Js, Typescript, Tailwind, Prisma, PlanetScale ', image: fishImg, link: '/Fish' },
    { title: 'Truck Tracking System.', language: 'Next Js, Tailwind, firebase,', image: truckImg, link: '/Track' },
    { title: 'Sales System', language: 'React Js, Firebase', image: salesImg, link: '/SalesSystem' },
    { title: 'Ecommerce System', language: 'Next Js, Typescript, Tailwind, Graphql, Hypergraph', image: ecommerceImg, link: '/Ecommerce' },
]

function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-4 py-16'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] px-2'>Projects</p>
                <h2 className='py-4 px-2'>Latest Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {
                        ImageList.map((item, index) => <ProjectItem
                            key={index}
                            img={item.image}
                            title={item.title}
                            language={item.language}
                            link={item.link}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects