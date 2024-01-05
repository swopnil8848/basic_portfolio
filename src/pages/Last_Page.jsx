import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";


const Last_Page = () => {
  return (
    <div className='my-40'>
        <div className=''>
            <div className='text-md text-gray-700 flex justify-center'>Get In Touch </div>
            <div className='text-4xl font-bold text-gray-900 flex justify-center'>Contact Me </div>
        </div>
        <div className='border-2 border-gray-800 rounded-3xl text-center w-fit mx-auto p-5 md:p-10 lg:p-16 m-5 my-10'>
            <div className='flex justify-center flex-wrap text-center p-2 text-gray-700'><div className='text-xl my-auto mx-2'><IoIosMail/></div><div className='my-auto'>swponilm170@gmail.com</div></div>
            <div className='flex justify-center flex-wrap text-center p-2 text-gray-700'><div className='text-xl my-auto mx-2'><FaLinkedin/></div><div className='my-auto'><a href='linkedin.com/in/swopnil-maharjan-876965284'>linkedIn</a></div></div>
            <div className='flex justify-center flex-wrap text-center p-2 text-gray-700'><div className='text-xl my-auto mx-2'><MdWifiCalling3/></div><div className='my-auto'><a>9865588711</a></div></div>
        </div>
        <div className='flex justify-center mt-20 mx-2'>
            <div className='text-lg text-gray-800 p-1 mx-2 font-serif'>About</div>
            <div className='text-lg text-gray-800 p-1 mx-2 font-serif'>Experience</div>
            <div className='text-lg text-gray-800 p-1 mx-2 font-serif'>Projects</div>
            <div className='text-lg text-gray-800 p-1 mx-2 hidden md:vissible'>Contacts</div>
        </div>
        <div className='my-40'>
            <h1 className='text-gray-700 text-center mx-4 flex justify-center flex-wrap my-auto'><div>Copyright</div> <span className='w-fit my-auto mx-1'><FaRegCopyright/></span> 2023 swopnil maharjan. All the rights reserved </h1>
        </div>
    </div>
  )
}

export default Last_Page