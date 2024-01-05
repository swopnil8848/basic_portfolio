import React from 'react'
import { TiTick } from "react-icons/ti";

const First_Page_3 = () => {
  return (
    <div className='overflow-hidden min-h-screen my-auto'>
        <div className=''>
            <h1 className='text-gray-600 text-center flex justify-center m-2'>Explore My</h1>
            <h1 className='text-gray-900 font-bold text-4xl text-center flex justify-center'>Experience</h1>
        </div>
        <div className='lg:flex lg:mx-20 my-14'>
            <div className='border-2 border-gray-800 rounded-2xl lg:w-1/2 md:mx-10 mx-2 my-2'>
                <h1 className='flex justify-center md:text-2xl text-xl font-semibold my-8'>Frontend Development</h1>
                <div className='flex flex-wrap'>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>HTML</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>CSS</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>Tailwind</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>JavaScript</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>React</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className='md:text-2xl text-xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-4 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>d3/vega</div></div>
                        <div className='text-sm font-extralight  text-gramd:y-600 ml-4 md:ml-12'>basic</div>
                    </div>
                </div>
            </div> 
            <div className='border-2 border-gray-800 rounded-2xl lg:w-1/2 mx-2 md:mx-10'>
                <h1 className='flex justify-center md:text-2xl text-xl font-semibold my-8'>Backend Development</h1>
                <div className='flex flex-wrap'>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>Nodejs</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>Express</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>Mongoose</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className=' text-xl md:text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-2 md:mx-5 my-auto'><TiTick/></div><div className='text-md md:text-lg font-serif'>MongoDb</div></div>
                        <div className='text-sm font-extralight  text-gray-600 md:ml-12 ml-4'>Experienced</div>
                    </div>
                    {/* <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className='text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-5'><TiTick/></div><div className=' font-serif'>React</div></div>
                        <div className='text-sm font-extralight  text-gray-600 ml-12'>Experienced</div>
                    </div>
                    <div className='w-1/2 my-6 px-6'>
                        <div className='flex'><div className='text-2xl bg-gray-700 p-0 w-fit text-white rounded-full mx-4'><TiTick/></div><div className=' font-serif'>d3/vega</div></div>
                        <div className='text-sm font-extralight  text-gray-600 ml-12'>basic</div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default First_Page_3