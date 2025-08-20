import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import relube from '../img/relube.svg'
import webflow from '../img/webflow.svg'
import '../css/slider.css'



const Swipercomponent = () => {
  return (
    <section className='swiper-section'>

        <div className='swiper-container  flex  align-center gap-3 pt-[30px] pb-[30px]'>
         
          <Swiper
           modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false, 
              pauseOnMouseEnter: false,
            }}
          loop={true}
          spaceBetween={10}
          speed={3000}
          slidesPerView={'auto'}
           allowTouchMove={false}
         
          grabCursor={false}
          pagination={{ clickable: true }}
          breakpoints={{
            768:{
              slidesPerView:9,
              spaceBetween:20,
            },
          }}
          
        >
          <SwiperSlide className='swiper-pict' ><img src={relube} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide  className='swiper-pict'><img src={webflow} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={relube} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={webflow} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={relube} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={webflow} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide className='swiper-pict' ><img src={relube} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide  className='swiper-pict'><img src={webflow} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={relube} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={webflow} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={relube} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide className='swiper-pict'><img src={webflow} alt="Slide 2" /></SwiperSlide>
  
        </Swiper>
        </div>


    </section>
  )
}

export default Swipercomponent