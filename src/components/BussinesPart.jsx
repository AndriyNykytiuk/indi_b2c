import React from 'react'
import man from '../img/manOrange.svg'
import analitic from '../img/analiticOrasngre.svg'
import rocket from '../img/rocketOrange.svg'
import casebox from '../img/ci_suitcase.svg'
import '../css/bussinespart.css'


const BussinesPart = () => {
  return (
    <section className='bussines-part mb-[100px]'>

        <div className='bussines-part-container mx-auto max-w-[1280px] flex flex-col items-center justify-center pt-10'>
            <div className='bussines-part__title-block'>
                <h2 className='text-center  text-[#FFFFFF]    md:text-center  block-title'>Твій бізнес теж може стати частиною гри!</h2>
                <p className='text-center text-[18px] text-[#667085]'>Хочеш більше задоволених клієнтів?</p>
                <p className='text-center text-[20px] text-[#FFFFFF]'>Це не банер. Це емоція, яку запам’ятають.</p>
            </div>
            <div className='bussines-items flex flex-col md:grid grid-cols-3 gap-4 m-10'>
                <div className='bussines-item item  w-full mx-auto flex flex-col items-center justify-start'>
                    <div className='item__img mb-6'>
                        <img src={man} alt="Image"/>
                    </div>
                    <div className='item__title font-bold text-[24px] mb-[20px]'>
                        <h3>
                            Просте залучення
                        </h3>
                    </div>
                    <div className='item__text text-[#667085] text-[16px]'>
                        <p>
                            Користувачі бачать тебе на мапі, та в маркетплейсі взаємодіють з пропозицією та приходять за виграшем.
                        </p>
                    </div>
                </div>
                <div className='bussines-item item  w-full mx-auto flex flex-col items-center justify-start'>
                    <div className='item__img mb-6'>
                        <img src={analitic} alt="Image"/>
                    </div>
                    <div className='item__title max-w-[250px] font-bold text-[24px] mb-[20px]'>
                        <h3>
                            Аналітика і контроль
                        </h3>
                    </div>
                    <div className='item__text text-[#667085] max-w-[280px] text-[16px]'>
                        <p>
                           Ти повністю керуєш процесом та аналізуєш ефективність. Обираєш локації та створюєш пропозиції різного типу. Бачиш, хто ними зацікавився, а хто вже скористався, контролюєш акаунти своїх менеджерів.
                        </p>
                    </div>
                </div>
                <div className='bussines-item item  w-full mx-auto flex flex-col items-center justify-start'>
                    <div className='item__img mb-6'>
                        <img src={rocket} alt="Image"/>
                    </div>
                    <div className='item__title font-bold text-[24px] mb-[20px]'>
                        <h3>
                          Старт за 5 хвилин
                        </h3>
                    </div>
                    <div className='item__text max-w-[260px] text-[#667085] text-[16px]'>
                        <p>
                            Без технічних заморочок. Заповни коротку форму — і твій аккаунт вже в INDI. Ми допоможемо сформулювати оффер й одразу протестуємо його.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bussines-block-button flex items-center justify-center bg-[#FFFFFF] px-3 py-2 rounded-[8px]'>
                <a href='#' className='btn-add text-[#FF6138] flex gap-3'>Долучи свій біснес <img src={casebox} alt="Image"/></a>
                
            </div>
        </div>

    </section>
  )
}

export default BussinesPart