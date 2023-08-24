import React from 'react'
import arrayDestruct from '../assets/portfolio/portfolio.PNG'
import installNode from '../assets/portfolio/portfolio1.PNG'
import navbar from '../assets/portfolio/portfolio2.PNG'
import reactParallax from '../assets/portfolio/portfolio3.PNG'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            demo:"https://josephuguru.netlify.app/",
            code:"https://github.com/Joshboy16/Portfolio"
        },
        {
            id: 2,
            src: reactParallax,
            demo:"https://springcourier.top/",
            code:"https://github.com/Joshboy16/"
        },
        {
            id: 3,
            src: navbar,
            demo:"https://danguru.org/",
            code:"https://github.com/Joshboy16/"
        },
        {
            id: 4,
            src: reactSmooth,
            demo:"https://josephuguru.netlify.app/",
            code:"https://github.com/Joshboy16/youtube-clone-ui"
        },
        {
            id: 5,
            src: installNode,
            demo:"https://josephuguru.netlify.app/",
            code:"https://github.com/Joshboy16/"
        },
        {
            id: 6,
            src: reactWeather,
            demo:"https://josephuguru.netlify.app/",
            code:"https://github.com/Joshboy16/"
        },
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
        <p className='py-6'>Check out some of my work here</p>
    </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

    {portfolios.map(({id, src, demo, code}) =>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>code</button>
                </div>
            </div> 
            ))
    }


       

    </div>

    </div>

    </div>
  )
}

export default Portfolio