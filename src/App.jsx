import React, { useEffect, useRef, useState } from 'react'
import First_Page from './pages/First_Page'
import First_Page_2 from './pages/First_Page_2'
import First_Page_3 from './pages/First_Page_3'
import First_Page_4 from './pages/First_Page_4'
import Last_Page from './pages/Last_Page'
import { GiHamburgerMenu } from 'react-icons/gi'



export default function App() {

  const [active, setActive] = useState(false);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [experienceHeight, setExperienceHeight] = useState(0);
  const [projectHeight, setProjectHeight] = useState(0);

  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const last = useRef(null)

  useEffect(() => {
    if (about.current) {
      const height = about.current.getBoundingClientRect()?.height||1;
      setAboutHeight(height);
      // console.log('About div height:', height);
    }
    if (experience.current) {
      const height = experience.current.getBoundingClientRect()?.height||1;
      setExperienceHeight(height+aboutHeight)
      console.log('About div height:', height);
    }
    if (projects.current) {
      const height = projects.current.getBoundingClientRect()?.height||1;
      setExperienceHeight(height+experienceHeight)
      console.log('About div height:', height);
    }
  }, []);

  const scrollToAbout = () => {
    console.log("scroll being called")
    if (about.current) {
      window.scrollTo({
        top: about.current.offsetTop + window.innerHeight ,
        behavior: 'smooth',
      });
    }
  };
  const scrollToExperience = () => {
    console.log("scroll being called")
    if (experience.current) {
      window.scrollTo({
        top: projects.current.offsetTop ,
        behavior: 'smooth',
      });
    }
  };
  const scrollToContacts = () => {
    if (last.current) {
      console.log("scroll being called")
      window.scrollTo({
        top: last.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const scrollToProjects = () => {
    console.log("scroll being called")
    if (contact.current) {
      window.scrollTo({
        top: contact.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className='overflow-x-hidden'>
      <nav className='flex md:justify-evenly justify-around my-5'>
        <div className='md:text-2xl text-xl font-semibold my-2 md:p-2'>
          Swopnil Maharjan
        </div>
        <div className={`md:flex lg:text-xl font-semibold transition-all duration-1000 ease-in-out ${active?'fixed h-fit top-0 bg-gray-100 w-full hover:bg-slate-50':'fixed w-full opacity-0 bg-gray-100 -top-96'}`}>
          <div className='lg:m-6 m-2 lg:p-2 py-6 cursor-pointer' onClick={scrollToAbout}>About</div>
          <div className='lg:m-6 m-2 lg:p-2 py-6 cursor-pointer' onClick={scrollToExperience}>Experience</div>
          <div className='lg:m-6 m-2 lg:p-2 py-6 cursor-pointer'  onClick={scrollToProjects}>Projects</div>
          <div className='lg:m-6 m-2 lg:p-2 py-6 cursor-pointer' onClick={scrollToContacts}>Contact</div>
        </div>
        <div className='hidden md:flex lg:text-xl font-semibold'>
          <div className='m-2 md:p-2 py-6 cursor-pointer' onClick={scrollToAbout}>About</div>
          <div className='m-2 md:p-2 py-6 cursor-pointer' onClick={scrollToExperience}>Experience</div>
          <div className='m-2 md:p-2 py-6 cursor-pointer' onClick={scrollToProjects}>Projects</div>
          <div className='m-2 md:p-2 py-6 cursor-pointer' onClick={scrollToContacts}>Contact</div>
        </div>
        <div className='text-2xl p-2 cursor-pointer fixed right-4 top-4 md:hidden' onClick={()=>{
            console.log(active,'active')
            setActive(!active)}}>
            <GiHamburgerMenu />
        </div>
      </nav>
      <div ref={about}><First_Page/></div>
      <div ref={experience}><First_Page_2/></div>
      <div ref={projects}><First_Page_3/></div>
      <div ref={contact}><First_Page_4/></div>
      <div ref={last}><Last_Page/></div>
    </div>
  )
}