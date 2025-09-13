import React,{ useState} from 'react'
import '../css/footer.css'
import orangeLogo from '../img/orangeLogo.svg'
import fb from '../img/Facebook.svg'
import inst from '../img/Instagram.svg'
import x from '../img/X.svg'
import lin from '../img/LinkedIn.svg'
import youtube from '../img/Youtube.svg'
import '../links.js'
const Footer = () => {
    const [isInstagram, setIsInstagram] = useState(false);
    const [isTikTok, setIsTikTok] = useState(false);
    const [isTelegram, setIsTelegram] = useState(false);
    const [isFb,setIsFb]=useState(false);
    const [isInst,setIsInst]=useState(false);
    const [isX,setIsX]=useState(false);
    const [isLin,setIsLin]=useState(false);
    const [isYoutube,setIsYoutube]=useState(false);
    const [isPolicy,setIsPolicy]=useState(false);
    const [isTerms,setIsTerms]=useState(false);
    const [isSupport,setIsSupport]=useState(false);
    const [isCookies,setIsCookies]=useState(false);

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
                  
                            <li
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsInstagram(true);}}
                                    onMouseLeave={()=>{setIsInstagram(false)}}
                            >
                                {isInstagram && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}  
                                <a data-name='в процесі наповнення' href="#">Instagram </a></li>
                            <li
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsTikTok(true);}}
                                    onMouseLeave={()=>{setIsTikTok(false)}}
                            >
                                {isTikTok && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}  
                                <a data-name='в процесі наповнення' href="#">TikTok</a></li>
                            <li
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsTelegram(true);}}
                                    onMouseLeave={()=>{setIsTelegram(false)}}
                            >
                                {isTelegram && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}  
                                <a data-name='в процесі наповнення' href="#">Telegram</a></li>
                        </ul>
                    </div>
                    <div className="top-social social">
                        <ul className='social-list' >
                            <li
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsFb(true);}}
                                    onMouseLeave={()=>{setIsFb(false)}}
                            >
                                {isFb && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                                <a data-name='в процесі наповнення' href="#"><img src={fb} alt="Image"/></a></li>
                            <li
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsInst(true);}}
                                    onMouseLeave={()=>{setIsInst(false)}}
                            >
                                {isInst && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                                <a data-name='в процесі наповнення' href="#"><img src={inst} alt="Image"/></a></li>
                            <li
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsX(true);}}
                                    onMouseLeave={()=>{setIsX(false)}}
                            >
                                {isX && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                                <a data-name='в процесі наповнення' href="#"><img src={x} alt="Image"/></a></li>
                            <li 
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsLin(true);}}
                                    onMouseLeave={()=>{setIsLin(false)}}
                            >
                                {isLin && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                                <a data-name='в процесі наповнення' href="#"><img src={lin} alt="Image"/></a></li>
                            <li
                                className='relative'
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setIsYoutube(true);}}
                                    onMouseLeave={()=>{setIsYoutube(false)}}
                            >
                                {isYoutube && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                            <a data-name='в процесі наповнення' href="#"><img src={youtube} alt="Image"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom bottom">
                    <ul className='bottom-list'>
                        <li><h4>© 2025 INDI. Всі права захищені.</h4></li>
                        <li
                            className='relative'
                            onClick={(e)=>{
                                e.preventDefault();
                                setIsPolicy(true);}}
                                onMouseLeave={()=>{setIsPolicy(false)}}
                        >
                            {isPolicy && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}  
                            <a data-name='в процесі наповнення' href="#">Політика конфіденційності</a></li>
                        <li
                            className='relative'
                            onClick={(e)=>{
                                e.preventDefault();
                                setIsTerms(true);}}
                                onMouseLeave={()=>{setIsTerms(false)}}
                        >
                            {isTerms && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                            <a data-name='в процесі наповнення' href="#">Умови обслуговування</a></li>
                        <li
                            className='relative'
                            onClick={(e)=>{
                                e.preventDefault();
                                setIsSupport(true);}}
                                onMouseLeave={()=>{setIsSupport(false)}}
                        >
                            {isSupport && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                            <a data-name='в процесі наповнення' href="#">Підтримка</a></li>
                        <li
                            className='relative'
                            onClick={(e)=>{
                                e.preventDefault();
                                setIsCookies(true);}}
                                onMouseLeave={()=>{setIsCookies(false)}}
                        >
                            {isCookies && <span className='absolute -top-13 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2'>в процесі наповнення</span>}
                            <a data-name='в процесі наповнення' href="#">Налаштування Cookies</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer