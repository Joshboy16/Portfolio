import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus modi cupiditate. Iusto cumque reiciendis esse nisi eum tempora molestiae beatae eligendi nam unde, voluptate laudantium ut doloremque aspernatur? Consequatur!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod sint reprehenderit dolores aut vero earum. Nisi cum fugiat exercitationem maxime temporibus, et illum ex, similique officia non, id ipsa.
            </p>
        </div>
    </div>
  )
}

export default About