import React from 'react'
import pckg from '../img/letterminus.svg'
import loud from '../img/loud.svg'
import shop from '../img/shop.svg'
import '../css/whyindi.css'

function WhyIndi() {
  return (
    <section className='why-indi px-2'>
        <div className='why-indi-container mx-auto max-w-[1280px] flex flex-col items-center justify-center bg-[#F9FAFB] rounded-[64px] md:p-20 '>
            <div className='why-indi__title-top flex flex-col gap-5 items-start justify-center md:flex-row gap-5 items-start justify-center mb-[40px]'>
                <div className='why-indi__title   '>
                    <h2 >Чому інді - твій новий спосіб заощаджувати із задоволенням ?</h2>
                </div>
                <div className='why-indi__subtitle text-[#667085] text-[20px] max-w-[526px] pt-[20px]'>
                    <p>Втомився від постійних витрат? INDI допоможе тобі заощаджувати, знаходячи вигоду поруч із тобою в будь-який час. Знижки, призи, акції — просто грай, вигравай і використовуй у брендів, які любиш.</p>
                </div>
            </div>
            <div className=' why-indi__items  grid grid-cols-1 place-items-center place-justify-center md:grid-cols-3 gap-[20px] max-w-[1055px] m-10'>
                <div className='why-indi__item  max-w-[370px] max-h-[390px] p-[5px] bg-[#FFFFFF]  rounded-[64px] shadow-md flex flex-col items-center justify-start flex-grow gap-[15px] md:items-start p-[60px]'>
                    <div className='item__image bg-[#F9FAFB] p-[15px] rounded-[32px] w-[88px] h-[88px] flex items-center justify-center'>
                        <img src={shop} alt="Image"/>
                    </div>
                    <div  className='item__text '>
                        <h3 className='font-bold text-[24px] mb-[15px]'>
                            Твої проблеми — наші рішення
                        </h3>
                        <p className='text-[#667085] text-[12px] md:text-[16px]'>
                            Ніякого більше безрезультатного та нудного пошуку промокдів. Заощаджуй із задоволенням
                        </p>
                    </div>
                </div>
                <div className='why-indi__item item p-[60px] max-w-[370px] max-h-[390px] bg-[#FFFFFF]  rounded-[64px] shadow-md flex flex-col items-center justify-start gap-[15px] md:items-start'>
                    <div className='item__image bg-[#F9FAFB] p-[15px] rounded-[32px] w-[88px] h-[88px] flex items-center justify-center'>
                        <img src={loud} alt="Image"/>
                    </div>
                    <div  className='item__text '>
                        <h3 className='font-bold text-[20px] mb-[15px]'>
                            Забудь про пластикові картки, купони та флаєра
                        </h3>
                        <p className='text-[#667085]'>
                            Все необхідне — на відстані одного дотику.
                        </p>
                    </div>
                </div>
                <div className='why-indi__item item   p-[60px] max-w-[370px] max-h-[390px] bg-[#FFFFFF]  rounded-[64px] shadow-md flex flex-col items-center justify-start gap-[15px] md:items-start'>
                    <div className='item__image bg-[#F9FAFB] p-[15px] rounded-[32px] w-[88px] h-[88px] flex items-center justify-center'>
                        <img src={pckg} alt="Image"/>
                    </div>
                    <div  className='item__text '>
                        <h3 className='font-bold text-[20px] mb-[15px]'>
                           Ніякого спаму - лише реальна вигода
                        </h3>
                        <p className='text-[#667085]'>
                           Кожна дія — ще один крок до реальної знижки чи подарунка.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyIndi