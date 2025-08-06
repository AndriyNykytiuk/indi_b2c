import React from 'react'
import '../css/footer.css'
import orangeLogo from '../img/orangeLogo.svg'
import fb from '../img/Facebook.svg'
import inst from '../img/Instagram.svg'
import x from '../img/X.svg'
import lin from '../img/LinkedIn.svg'
import youtube from '../img/Youtube.svg'
const Footer = () => {
  return (
    <footer className= 'footer'>
        <div className='footer-container mx-auto max-w-[1280px]'>
            <div className='footer-wrapper grid grid-rows-3 '>
                <div className="footer-top top row-span-2 items-start">
                    <div className="top-logo">
                        <img src={orangeLogo} alt="Image"/>
                    </div>
                    <div className="top-rules">
                        <ul className='top-list'>
                            <li><a href="#">Політика конфіденційності</a></li>
                            <li><a href="#">Умови користування</a></li>
                            <li><a href="#">Підтримка</a></li>
                            <li><a href="#">Instagram </a></li>
                            <li><a href="#">TikTok</a></li>
                            <li><a href="#">Telegram</a></li>
                        </ul>
                    </div>
                    <div className="top-social social">
                        <ul className='social-list' >
                            <li><a href="#"><img src={fb} alt="Image"/></a></li>
                            <li><a href="#"><img src={inst} alt="Image"/></a></li>
                            <li><a href="#"><img src={x} alt="Image"/></a></li>
                            <li><a href="#"><img src={lin} alt="Image"/></a></li>
                            <li><a href="#"><img src={youtube} alt="Image"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom bottom">
                    <ul className='bottom-list'>
                        <li><h4>© 2025 INDI. Всі права захищені.</h4></li>
                        <li><a href="#">Політика конфіденційності</a></li>
                        <li><a href="#">Умови обслуговування</a></li>
                        <li><a href="#">Налаштування Cookies</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer