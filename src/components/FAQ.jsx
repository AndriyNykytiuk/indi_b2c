import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const data = {
  Загальні: [
   { q: 'Як працює INDI?', a: '  Ви відкриваєте застосунок, знаходите картки з призами поруч або у внутрішньому маркетплейсі, виконуєте прості інтерактивні завдання — і отримуєте знижку або подарунок.' },
    { q: ' Чи потрібно щось оплачувати?', a: '  Ні. Завантаження та використання INDI безкоштовне для користувачів. Ви платите тільки, якщо купуєте товар чи послугу у партнера зі знижкою.' },
    
],
  Підключення: [
 { q: 'Чи потрібно щось встановлювати чи підключати?', a: ' Ні, спеціальна інтеграція чи касове обладнання не потрібні. Ви працюєте через наш особистий кабінет. Все налаштовується менше ніж за 5 хвилин.' },
    { q: 'Чи потрібні розробники для налаштування?', a: ' Ні. Ви можете запускати акції самостійно — без технічної команди чи додаткових витрат.' },
    { q: 'Як швидко я можу почати?', a: ' Ви можете запустити першу акцію вже сьогодні. Все, що вам потрібно — це зареєструватися в особистому кабінеті INDI.' },
    { q: 'Чи можу я змінювати пропозиції після запуску?', a: 'Так, ви можете редагувати умови акцій у будь-який час. Зміни будуть застосовані миттєво.' },
    { q: 'Чи можу я зупинити акцію в будь-який момент?', a: 'Так, ви можете призупинити або видалити акцію в будь-який час через особистий кабінет.' },
  ],
   Можливості: [
    { q: 'Які призи можна отримати?', a: '  Це можуть бути знижки, подарунки, безкоштовні позиції з меню, бонуси на наступну покупку або інші спеціальні пропозиції від партнерів.' },
    { q: ' Що таке внутрішній маркетплейс?', a: '  Це розділ у застосунку, де ви можете обміняти внутрішню валюту INDI, зароблену у іграх, на картки з призами, не виходячи з дому.' },
     { q: 'Що якщо клієнт не прийде?', a: ' Ви платите комісію лише за використані знижки. Якщо картку не активували — ви нічого не втрачаєте.' },
    { q: 'Чи можу я самостійно керувати пропозиціями?', a: 'Так, у вас є повний контроль над створенням, редагуванням і видаленням пропозицій у вашому особистому кабінеті.' },
  ],
  Використання: [
   { q: 'Як скористатися знижкою?', a: ' Після виграшу картки у грі або придбання її в маркетплейсі ви отримаєте QR-код або промокод. Покажіть QR-код на касі або введіть промокод при онлайн-замовленні.' },
    { q: 'Чи є обмеження за місцем або часом?', a: ' Так, деякі акції діють лише у певних локаціях або в зазначені години. Вся інформація вказана на картці з призом.' },
    { q: 'Що робити, якщо я не встиг використати знижку?', a: ' Якщо термін дії картки закінчився, вона стає недійсною. Але ви завжди можете виграти або придбати нову у маркетплейсі.' },
    { q: 'Чи можна грати без виходу з дому?', a: ' Так! Якщо не хочете шукати картки в місті, ви можете заробляти внутрішню валюту в іграх і купувати призи у маркетплейсі.' },
  ],
};

const FAQ = () => {
    const firstTopic=Object.keys(data)[0]
  const [activeTopic, setActiveTopic] = useState(firstTopic);
  const [openAnswerIdx, setOpenAnswerIdx] = useState(null);

  const toggleAnswer = (index) => {
    setOpenAnswerIdx(openAnswerIdx === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto max-w-[850px] p-4">
      {/* Заголовки */}
      <div className=" grid grid-cols-2 md:flex items-center flex-wrap justify-center  gap-4 mb-6">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveTopic(key);
              setOpenAnswerIdx(null); // скидає відкриту відповідь при зміні теми
            }}
            className={`py-1 px-2 rounded transition-all duration-300  cursor-pointer ${
              activeTopic === key ? 'text-white rounded-xl bg-[#FF6138]' : 'bg-white text-[#FF6138]'
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
      {/* Питання-Відповіді */}
      <ul className="space-y-4">
        {data[activeTopic].map((item, idx) => (
          <li key={idx} className="border-b-[1px] px-2 shadow-sm">
            <div className='flex items-center gap-2'>
                <h4 className='text-[#667085] text-xl font-medium opacity-60 '>{String(idx + 1).padStart(2, '0')}</h4>
              <button
              onClick={() => toggleAnswer(idx)}
              className="w-full text-left px-4 py-3 font-regular cursor-pointer transition-all duration-300"
            >
              {item.q}
            </button>
            <div onClick={() => toggleAnswer(idx)}>
                {openAnswerIdx===idx ? <IoIosArrowDown/>: <IoIosArrowUp/>}
            </div>
            </div>
           
            {openAnswerIdx === idx && (
                 <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto',overflow: 'hidden' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.1 }}
                    className="px-4 pb-3 border-t text-gray-600"
                    >
                    {item.a}
                </motion.div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
