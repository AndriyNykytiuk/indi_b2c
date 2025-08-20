import React from 'react'
import alina from '../img/alina.png'
import StarRatings from 'react-star-ratings'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css'
import '../css/userreview.css'
const UserReview = () => {
  return (
    <section className='user-review px-4 mb-[100px]'>
        <div className='user-review-container mx-auto max-w-[1280px] rounded-[64px] flex flex-col items-center justify-center pt-10 bg-[#F9FAFB]'>
            <div className='user-review-title-block'>
                <h2>
                    INDI очима користувачів
                </h2>
            </div>
            <div className='swiper-button-block flex gap-5'>
                <div className="custom-prev">←</div>
                <div className="custom-next">→</div>
            </div>
            <div className='swiper-container flex align-center w-full gap-3 px-[30px] py-[30px]'>

                <Swiper
                    className='user-review-swiper '
                  observer={true}
                    observeParents={true}
                   navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                 modules={[Autoplay, Navigation]}
               
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, 
                    }}
                loop={true}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                >
                    <SwiperSlide>
                    <div className='user-review-item item w-full mx-auto flex flex-col items-center justify-between'>
                        <div className='item-text  text-[22px] font-regular text-center mb-4'>
                            <p>
                                INDI — це мій новий улюблений спосіб знаходити знижки. Граю по дорозі з роботи й завжди знаходжу щось цікаве поблизу.
                            </p>
                        </div>
                        <div className='item-author'>
                            <img src={alina} alt="Image"/>
                            <p className='text-[#667085] text-[16px]'>Анна Левченко, 25 років</p>
                            <p className='mb-[20px]'>Neczq12</p>
                            <StarRatings
                                rating={4.6}
                                starRatedColor="#FFD900"
                                starHoverColor='#FFD900'
                                starDimension="20px"
                                starSpacing="2px"
                                numberOfStars={5}
                                name='rating'
                                />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='user-review-item item w-full mx-auto flex flex-col items-center justify-between'>
                            <div className='item-text  text-[22px] font-regular text-center mb-4'>
                                    <p>
                                        Круто, що можна отримати знижку, просто погравши в гру. Це набагато цікавіше, ніж шукати купони в інтернеті.
                                    </p>
                            </div>
                                <div className='item-author'>
                                    <img src={alina} alt="Image"/>
                                    <p className='text-[#667085] text-[16px]'>Ігор Мельник, 27 років</p>
                                    <p className='mb-[20px]'>Neczq12</p>
                                    <StarRatings
                                        rating={4.6}
                                        starRatedColor="#FFD900"
                                        starHoverColor='#FFD900'
                                        starDimension="20px"
                                        starSpacing="2px"
                                        numberOfStars={5}
                                        name='rating'
                                        />
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='user-review-item item w-full mx-auto flex flex-col items-center justify-between'>
                            <div className='item-text  text-[22px] font-regular text-center mb-4'>
                                <p>
                                    Виграла безкоштовну каву у своєму улюбленому місці. Приємно, що акції дійсно працюють, а не просто замануха
                                </p>
                            </div>
                            <div className='item-author'>
                                <img src={alina} alt="Image"/>
                                <p className='text-[#667085] text-[16px]'>Оксана Шевчук, 30 років</p>
                                <p className='mb-[20px]'>Neczq12</p>
                                <StarRatings
                                    rating={4.6}
                                    starRatedColor="#FFD900"
                                    starHoverColor='#FFD900'
                                    starDimension="20px"
                                    starSpacing="2px"
                                    numberOfStars={5}
                                    name='rating'
                                    />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='user-review-item item w-full mx-auto flex flex-col items-center justify-between'>
                        <div className='item-text  text-[22px] font-regular text-center mb-4'>
                            <p>
 Особливо подобається маркетплейс — можна брати призи, навіть якщо не виходиш з дому. Ігри прості, але затягують.
                            </p>
                        </div>
                        <div className='item-author'>
                            <img src={alina} alt="Image"/>
                            <p className='text-[#667085] text-[16px]'> Артем Кравцов, 26 років</p>
                            <p className='mb-[20px]'>Neczq12</p>
                            <StarRatings
                                rating={4.6}
                                starRatedColor="#FFD900"
                                starHoverColor='#FFD900'
                                starDimension="20px"
                                starSpacing="2px"
                                numberOfStars={5}
                                name='rating'
                                />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='user-review-item item w-full mx-auto flex flex-col items-center justify-between'>
                        <div className='item-text  text-[22px] font-regular text-center mb-4'>
                            <p>
                                Замість нудного шопінгу — тепер це як квест. Знайшла знижку на каву через гру в INDI — кайф!
                            </p>
                        </div>
                        <div className='item-author'>
                            <img src={alina} alt="Image"/>
                            <p className='text-[#667085] text-[16px]'>Марія Поліщук, 25 років</p>
                            <p className='mb-[20px]'>Neczq12</p>
                            <StarRatings
                                rating={4.6}
                                starRatedColor="#FFD900"
                                starHoverColor='#FFD900'
                                starDimension="20px"
                                starSpacing="2px"
                                numberOfStars={5}
                                name='rating'
                                />
                        </div>
                    </div>
                    </SwiperSlide>
                 
                </Swiper>
            </div>


        </div>
          
    </section>
  )
}

export default UserReview