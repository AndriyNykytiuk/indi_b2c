import React,{useState} from 'react'
import SimpleParallax from 'simple-parallax-js';
import Navbar from './Navbar'
import hand from '../img/hand.png'
import '../css/header.css'
const Header = () => {
  const [isDownload, setIsDownload] = useState(false);
  return (
    <header className='header '>
        <div className='header-container mx-auto max-w-[1280px] sm:px-6 flex flex-col items-center justify-center pt-[10px] '>
            <Navbar/>
            <div className='header-title '>
                <h1>
                    Перетвори покупку на <strong>виграш!</strong>
                </h1>
            </div>
            <div className='header-subtitle '>
                <h2>
                   Збирай знижки, подарунки та бонуси, просто граючи у телефоні або гуляючи містом.
                </h2>
            </div>
            <div className='relative'
            onMouseEnter={() => setIsDownload(true)}
            onMouseLeave={() => setIsDownload(false)}
            >
            {isDownload && (
              <div className="absolute top-[0px] left-40 bg-black p-2 rounded-xl shadow">
                <p className="text-bold text-white">в процесі наповнення</p>
              </div>
            )}
                <a href="#" className='button mb-5'>Завантажити</a>
            </div>
           
            <div className='header-img'>
                <img src={hand} alt="Image"/>
            </div>
        </div>
    </header>
  )
}

export default Header