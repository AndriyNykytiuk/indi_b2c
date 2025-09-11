import React,{useRef} from 'react'
import '../css/features.css'
import { motion } from 'framer-motion'
import FineTuningVideo from './FineTuningVideo'
import { item1Animate,item2Animate,item3Animate,visibleTextBlock } from '../animate/animations'

const Features = () => {
  const item1Ref=useRef(null)
  const item2Ref=useRef(null)
  const item3Ref=useRef(null)
  const visibleBlockRef=useRef(null)
  return (
    <section className='features mb-[100px]'>
      <div className='features-container mx-auto max-w-[1280px] flex flex-col items-center justify-center pt-10'>
        <div className='features-title-block text-center mb-8 w-full md:w-1/2'>
          <h2 className='fetures-title'>Наші фішки</h2>
          <p className='text-lg text-gray-600 max-w-[500px] mx-auto mt-4'>
            INDI — це більше, ніж знижки. Це новий досвід покупок, де вигода стає грою.
          </p>
        </div>

        <div className='features-content-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1280px]'>
            <div className='features-item left'>
              <div className='features-content-item left p-4 max-w-[350px] flex flex-col items-start'>
                <motion.div className='left-item number mb-[30px] bg-[#FF8C66] px-[15px] rounded-[40px]'
                  ref={item1Ref}
                  variants={item1Animate}
                  initial={{ opacity: 0, x: 100 }}
                   transition={{ duration: 0.5,ease: 'easeOut'}}
                  whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 1 }}
                >
                  <h3 className='text-md font-bold text-[#FFFFFF]'>01</h3>
                </motion.div>
                <motion.div
                ref={visibleBlockRef}
                variants={visibleTextBlock}
                initial={{opacity:0,x:0}}
                transition={{duration:1,ease: 'easeIn'}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.1}}
                >
                  <div className='left-item title mb-[30px]'>
                  <h4 className='text-xl font-semibold'>Втягуюсь з першого кліка</h4>
                  </div>
                  <div className='left-item text'>
                  <p className='text-[#9f9f9f]'>
                      Пошук подарунків через AR; ретро-ігри, що завжди заряджають емоціями; та багато іншого.
                  </p>
                  </div>
                </motion.div>
             </div>
             <div className='features-content-item left p-4 max-w-[350px] flex flex-col items-start'>
                <motion.div className='left-item number mb-[30px] bg-[#9E66FF] px-[15px] rounded-[40px]'
                       ref={item2Ref}
                  variants={item1Animate}
                  initial={{ opacity: 0, x: -100 }}
                   transition={{duration: 0.5,ease: 'easeOut'}}
                  whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 1 }}
                >
                  <h3 className='text-md font-bold text-[#FFFFFF]'>02</h3>
                </motion.div>
                <motion.div
                   ref={visibleBlockRef}
                variants={visibleTextBlock}
                initial={{opacity:0,x:0}}
                transition={{duration:1,ease: 'easeIn'}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.1}}
                >
                  <div className='left-item title mb-[30px]'>
                    <h4 className='text-xl font-semibold'>Офлайн чи онлайн - дайте обидва</h4>
                </div>
                <div className='left-item text'>
                      <p className='text-[#9f9f9f]'>
                      Отримуй знижки й подарунки як від онлайн, так і від офлайн бізнесів — просто гуляючи містом або виконуючи завдання в грі, лежачи на дивані.
                      </p>
               </div>
                </motion.div>
             </div>
          <div className='features-content-item left p-4 max-w-[350px] flex flex-col items-start'>
                <motion.div className='left-item number mb-[30px] bg-[#FF6669] px-[15px] rounded-[40px]'
                      ref={item3Ref}
                  variants={item3Animate}
                  initial={{ opacity: 0, x: 100 }}
                   transition={{duration: 0.5,ease: 'easeOut'}}
                  whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 0.1 }}
                >
                  <h3 className='text-md font-bold text-[#FFFFFF]'>03</h3>
                </motion.div>
                <motion.div
                       ref={visibleBlockRef}
                variants={visibleTextBlock}
                initial={{opacity:0,x:0}}
                transition={{duration:1,ease: 'easeIn'}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.1}}
                >
                  <div className='left-item title mb-[30px]'>
                    <h4 className='text-xl font-semibold'>Все своє ношу з собою</h4>
                </div>
                <div className='left-item text'>
                    <p className='text-[#9f9f9f]'>
                      Нові прозиції, виграні бонуси, використані знижки - усе в тебе в телефоні, завжди під рукою.
                    </p>
               </div>
                </motion.div>
             </div>
            </div>
            <div className='features-items right flex-grow flex items-stretch '>
              <div className='features-content-item right p-4 flex flex-col items-center justify-center flex-grow'>
                <FineTuningVideo />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Features
