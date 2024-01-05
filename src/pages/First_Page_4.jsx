import React from 'react'
import Eccomerce from '/Eccomerce.jpg'
import tour from '/tour.jpg'
import cool from '/cool.jpg'

const First_Page_4 = () => {
  return (
    <div className='min-h-screen overflow-hidden text-center'>
        <div className='mb-12'>
            <h1 className='flex justify-center text-gray-700'>Browse My Recent</h1>
            <h1 className='flex justify-center text-5xl font-bold m-4'>Projects</h1>
        </div>

        <div className='lg:flex justify-center md:mx-12 xlg:mx-20'>


            <div  className='border border-gray-600 m-4 rounded-3xl'>
                <div><img className='rounded-3xl p-4' src={Eccomerce}/></div>
                <div className='text-2xl font-bold flex justify-center my-4'><h1>E-ccomerce MERN project</h1></div>
                <div className='text-gray-700 mx-4 text-center my-2'><h1>please login with email:swopnilm170@gmail password:passowrd to get access to dashboard.</h1></div>
                <div className='flex justify-center my-5'>
                    <button className='rounded-full border-2 border-gray-800 p-3 mx-3 text-center w-1/3 lg:w-1/3 xsm:w-1/4'><a href='https://github.com/swopnil8848/ECCOMERCE_HOST/tree/main'>GitHub</a></button>
                    <button className='rounded-full border-2 border-gray-800 p-3 mx-3 text-center w-1/3 lg:w-1/3 xsm:w-1/4'><a href='https://neapl-eccomerce.onrender.com/'>LiveDemo</a></button>
                </div>
            </div>


            <div className='border border-gray-600 m-4 rounded-3xl'>
                <div><img className='rounded-3xl p-4' src={tour}/></div>
                <div className='text-2xl font-bold flex justify-center my-4'><h1>Tour Backend project</h1></div>
                <div className='text-gray-700 mx-4 text-center my-2'><h1>if this website doesnt load please check the github and use npm run start:dev to go throught the project</h1></div>
                <div className='flex justify-center my-5'>
                    <button className='rounded-full border-2 border-gray-800 p-3 mx-3 text-center w-1/3 lg:w-1/3 xsm:w-1/4'><a href='https://github.com/swopnil8848/Natours/tree/master'>GitHub</a></button>
                    <button className='rounded-full border-2 border-gray-800 p-3 mx-3 text-center w-1/3 lg:w-1/3 xsm:w-1/4'><a href='https://natours-tours-r8rs.onrender.com'>LiveDemo</a></button>
                </div>
            </div>


            <div className='border border-gray-600 m-4 rounded-3xl'>
                <div><img className='rounded-3xl p-4' src={cool}/></div>
                <div className='text-2xl font-bold flex justify-center my-4'><h1>COOL CARE Frontend Project</h1></div>
                <div className='text-gray-700 mx-4 text-center my-2'><h1>I've created a website for Cool Care, a startup specializing in repair services. If you encounter any issues with your appliances, feel free to contact them.</h1></div>
                <div className='flex justify-center my-5'>
                    <button className='rounded-full border-2 border-gray-800 p-3 mx-3 text-center w-1/3 lg:w-1/3 xsm:w-1/4'><a href='https://github.com/swopnil8848/vercel-app-deploy-cool-care/tree/main'>GitHub</a></button>
                    <button className='rounded-full border-2 border-gray-800 p-3 mx-3 text-center w-1/3 lg:w-1/3 xsm:w-1/4'><a href='https://vercel-app-deploy-cool-care.vercel.app/home'>LiveDemo</a></button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default First_Page_4