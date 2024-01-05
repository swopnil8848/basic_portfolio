import React from 'react'
import { AiFillProject } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import swopnil from '/swopnil.jpg';
import updated_swopnil_4 from '/updated_swopnil_4.jpg';
import updated_image_1 from '/updated_image_1.png';


const First_Page_2 = () => {
  return (
    <div className='lg:mx-12 min-h-screen overflow-hidden mt-28 lg:mt-0 xl:mt-20 md:mt-6'>
        <h1 className='text-gray-500 text-md flex justify-center text-center p-2'>Get To Know More</h1>
        <h1 className='text-gray-700 font-semibold text-4xl flex justify-center text-center p-2'>About Me</h1>
        <div className='h-5/6 md:flex justify-evenly md:mx-28 lg:mt-20 mt-10'>
            <div className='h-full m-5 my-auto lg:w-1/3 lg:m-5 flex md:flex-row-reverse justify-center md:justify-normal md:mr-10'>
                <img className='lg:h-1/2 rounded-lg' src={updated_swopnil_4} alt="" />
            </div>
            <div className='md:w-1/2 lg:w-2/3 align-middle my-auto'>
                <div className='lg:flex'>
                    <div className='border-2 border-gray-900 lg:p-4 p-2 md:px-10 lg:px-20 rounded-xl lg:w-1/2 m-4 md:m-2 lg:m-6'>
                        <div className='text-center flex justify-center text-2xl m-1'><AiFillProject/></div>
                        <div className='text-center text-xl font-semibold text-gray-900'>Projects</div>
                        <div className='flex justify-center text-center text-gray-700 cursor-pointer'><a className='flex'><div className='mx-2'>Ecommerce </div><div>website</div></a></div>
                        <div className='text-center text-gray-700 cursor-pointer'><a>Cool care website</a></div>
                    </div>
                    <div className='border-2 border-gray-900 lg:p-4 p-2 md:px-10 lg:px-20 rounded-xl lg:w-1/2 m-4 md:m-2 lg:m-6'>
                        <div className='text-center flex justify-center text-2xl m-1'><GiBookshelf/></div>
                        <div className='text-center text-xl font-semibold text-gray-900'>Education</div>
                        <div className='text-center text-gray-700 cursor-pointer'>Bsc Csit (current) </div>
                        <div className='text-center text-gray-700 cursor-pointer flex justify-center'><div className='mx-1'>+2</div><div className='mx-1'>NIST</div><div>collage</div></div>
                    </div>
                </div>
                <div className='mx-4 text-gray-700 md:hidden xl:block'>
                    <p className='m-2 text-justify'>Hello, I'm   Swopnil Maharjan, a passionate MERN stack developer eager to contribute my skills and enthusiasm to a dynamic team. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I am well-equipped to handle the challenges of modern web development.</p>
                    <p className='m-2 text-justify'>I've honed my backend skills through a comprehensive course led by Jonas Schmedtmann, focusing on Mongoose and Node.js.</p>
                </div>
            </div>
        </div>
        <div className='mx-28 text-gray-700 hidden md:block xl:hidden '>
            <p className='m-2 text-justify'>Hello, I'm   Swopnil Maharjan, a passionate MERN stack developer eager to contribute my skills and enthusiasm to a dynamic team. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I am well-equipped to handle the challenges of modern web development.</p>
            <p className='m-2 text-justify'>I've honed my backend skills through a comprehensive course led by Jonas Schmedtmann, focusing on Mongoose and Node.js.</p>
        </div>
    </div>
  )
}

export default First_Page_2