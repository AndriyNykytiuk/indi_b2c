import React, { useRef } from 'react';
import downl from '../img/line.svg';
import finger from '../img/finger.svg';
import gamepad from '../img/gamepad.svg';
import baks from '../img/dollar.svg';

import { motion } from 'framer-motion';
import {
  animateItem1,
  animateItem2,
  animateItemArrow1,
  animateItemArrow2,
  animateItem3,
  animateItemArrow3,
  animateItem4,
} from '../animate/animations';
import '../css/howitdoeswork.css';

const HowItDoesWork = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);

  return (
    <section>
      <div className='how-it-works-container mx-auto max-w-[1280px] flex flex-col items-center justify-center mt-20 mb-30'>
        <div className='how-it-works-title'>
          <h2 className='text-center text-xl font-regular md:text-center text-4xl font-bold block-title'>
            Як це працює
          </h2>
        </div>
        <div className='how-it-works-text'>
          <p className='text-center text-[#667085]'>
            Просто грай у телефоні або гуляй містом, збирай знижки, подарунки та бонуси.
          </p>
        </div>
        <div className='how-it-works-items item mt-10 grid grid-cols-1 md:grid-cols-4 md:gap-10'>
          {/* Step 1 */}
          <motion.div
            ref={step1Ref}
            className='item-container flex flex-col items-center justify-start gap-10'
            variants={animateItem1}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className='item-img'>
              <img src={downl} alt='Download' />
            </div>
            <div className='item-text'>
              <p className='text-[#667085]'>Крок 1</p>
              <p className='font-bold'>Завантаж INDI</p>
              <p className='text-[#667085]'>
                Отримай доступ до мапи пропозицій та маркетплейсу вигод
              </p>
            </div>
            <motion.div
              className='span'
              variants={animateItemArrow1}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            ref={step2Ref}
            className='item-container flex flex-col items-center justify-start gap-10'
            variants={animateItem2}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className='item-img'>
              <img src={finger} alt='Download' />
            </div>
            <div className='item-text'>
              <p className='text-[#667085]'>Крок 2</p>
              <p className='font-bold'>Обери пропозицію</p>
              <p className='text-[#667085]'>
                Кав’ярня, магазин або салон — просто обери, від кого хочеш отримати виграш
              </p>
            </div>
            <motion.div
              className='span'
              variants={animateItemArrow2}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            ref={step3Ref}
            className='item-container flex flex-col items-center justify-start gap-10'
            variants={animateItem3}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className='item-img'>
              <img src={gamepad} alt='Download' />
            </div>
            <div className='item-text'>
              <p className='text-[#667085]'>Крок 3</p>
              <p className='font-bold'>Шукай та грай, або грай та купуй</p>
              <p className='text-[#667085]'>
                Знаходь пропозиції у доповненій реальності власного міста, вигравай їх у міні-іграх. Або ж виконуй завдання, накопичуй INDI-коїни і купуй бажане.
              </p>
            </div>
            <motion.div
              className='span'
              variants={animateItemArrow3}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            ref={step4Ref}
            className='item-container flex flex-col items-center justify-start gap-10'
            variants={animateItem4}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className='item-img'>
              <img src={baks} alt='Download' />
            </div>
            <div className='item-text'>
              <p className='text-[#667085]'>Крок 4</p>
              <p className='font-bold'>Отримай і використовуй одразу</p>
              <p className='text-[#667085]'>
                Активуй вигоду: для офлайн-пропозицій — QR-код, для онлайн — промокод.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItDoesWork;
