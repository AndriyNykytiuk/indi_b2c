import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import logoPict from '../img/logoOrange.svg';
import '../css/navbar.css';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
  const [visible, setVisible] = useState(false);
  const [isPromised, setIsPromised] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const timeoutId = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: '767px' });
  useEffect(() => {
    if (isMobile) {
    setVisible(true);
    return; 
  }
    if (isMobile) setVisible(true);
    const handleMouseMove = () => {
        if (window.innerWidth<768) return;
      setVisible(true);
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setVisible(false);
      }, 1500); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId.current);
    };
  }, [isMobile]);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, [isOpen]);

  const variants = {
    hidden: { y: -100, opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.nav
      variants={variants}
      initial="visible"
      animate={visible ? 'visible' : 'hidden'}
      className="header-navbar navbar bg-[#ffffff] border-1 rounded-[24px] mb-[10px] "
    >
      <div className="navbar-container flex items-center justify-between gap-10  ">
   
        <div className='logo-img flex gap-5 items-center justify-center'>
            <div className='burger-button' onClick={() => setIsOpen(!isOpen)}>
                <span className={`first ${isOpen? 'open':'first'}`}></span>
                <span className={`second ${isOpen? 'open':'second'}`}></span>
                <span className={`third ${isOpen? 'open':'third'}`}></span>
             </div>
          <a href="#"><img src={logoPict} alt="Logo" className="h-8" /></a>
        </div>
        <ul  className={`navbar-list flex items-center gap-6 ${isOpen ? 'open' : ''}`}>
          <li className='relative'
          onMouseEnter={() => setIsMain(true)}
          onMouseLeave={() => setIsMain(false)}
          >
            {isMain && (
              <div className="absolute top-[40px] left-0 bg-black p-2 rounded-xl ">
                <p className="text-bold text-white">в процесі наповнення</p>
              </div>
            )}
            <a href="#" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Головна</a></li>
          <li className='relative'
          onMouseEnter={() => setIsAbout(true)}
          onMouseLeave={() => setIsAbout(false)}
          >
            {isAbout && (
              <div className="absolute top-[40px] left-0 bg-black p-2 rounded-xl ">
                <p className="text-bold text-white">в процесі наповнення</p>
              </div>
            )}
            <a href="#" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Про нас</a></li>
          <li className='relative'
          onMouseEnter={() => setIsServices(true)}
          onMouseLeave={() => setIsServices(false)}
          >
            {isServices && (
              <div className="absolute top-[40px] left-0 bg-black p-2 rounded-xl ">
                <p className="text-bold text-white">в процесі наповнення</p>
              </div>
            )}
            <a href="#" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Послуги</a></li>
          <li className='relative'
          onMouseEnter={() => setIsContacts(true)}
          onMouseLeave={() => setIsContacts(false)}
          >
            {isContacts && (
              <div className="absolute top-[40px] left-0 bg-black p-2 rounded-xl ">
                <p className="text-bold text-white">в процесі наповнення</p>
              </div>
            )}
            <a href="#" className="navbar-link px-4" onClick={()=>setIsOpen(false)}>Контакти</a></li>
        </ul>
        <div className='relative'
        onMouseEnter={() => setIsPromised(true)}
        onMouseLeave={() => setIsPromised(false)}
        >
          {isPromised && (
            <div className="absolute top-[0px] left-40 bg-black p-2 rounded-xl shadow">
              <p className="text-bold text-white">в процесі наповнення</p>
            </div>
          )}
          <a href="#" className="button px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Приєднатися</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
