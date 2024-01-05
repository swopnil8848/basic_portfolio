import React, { useState } from 'react';
import swopnil from '/swopnil.jpg';
// import image_shop_swopnil from 'image_shop_swopnil.png'
import updated_swopnil_4 from '/updated_swopnil_4.jpg';
import image_swopnil from '/image_shop_swopnil.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import './First_Page.css'

const First_Page = () => {

    const [active,setActive] = useState(false)

    const onButtonClick = () => {
      const pdfUrl = "https://bronze-guinna-21.tiiny.site/";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "https://bronze-guinna-21.tiiny.site/"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <div className='min-h-screen w-screen font-serif overflow-hidden'>
      
      <div className='image_container md:flex items-center justify-center md:w-3/4 mx-10 mx-auto md:mx-20'>
        <div className='flex justify-center items-center mx-12 md:mx-4 md:w-1/2'>
          <img className='rounded-full lg:p-20 ' src={image_swopnil} alt="Swopnil Maharjan" />
        </div>  
        <div className=' my-5 md:my-0'>
            <div className='text-gray-700 text-center'>Hello, I'm</div>
            <div className='md:text-2xl lg:text-3xl text-xl text-center my-2'>Swopnil Maharjan</div>
            <div className='text-gray-700 text-center my-2'>MERN STACK Developer</div>
            <div className='flex justify-center my-2'>
                <button onClick={onButtonClick} className='flex text-sm lg:text-md lg:font-semibold border border-black rounded-full text-center w-fit align-middle my-auto lg:p-3 p-1 lg:m-2 m-1'>
                    <div className='m-1'>Download </div> <div className='m-1'>CV</div> 
                </button>
                <button className='flex text-sm lg:text-md bg-gray-700 text-white lg:font-semibold border border-black rounded-full text-center lg:p-3 p-1 lg:m-2 m-1'>
                    <div className='m-1'>Contact</div><div className='m-1'>Info</div>
                </button>
            </div>
            <div className='flex justify-center'>
                <a href="https://www.linkedin.com/in/swopnil-maharjan-876965284/"><div className='rounded-full text-3xl p-2 m-1'><RxLinkedinLogo /></div></a>
                <a href='https://github.com/swopnil8848'><div className='rounded-full text-3xl p-2 m-1'><FaGithub /></div></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default First_Page;
