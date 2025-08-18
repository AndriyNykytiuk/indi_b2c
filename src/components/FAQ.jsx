import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const data = {
  Загальні: [
   { q: 'Як це працює?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
    { q: 'Чи потрібна інтеграція?', a: 'Ні, не потрібно підключати API чи касові системи. INDI працює автономно: ви просто створюєте пропозицію в особистому кабінеті, і вона одразу з’являється в застосунку.Ми зробили все, щоб запуск не вимагав розробників або зайвого часу. Менше ніж за 5 хвилин — і ви вже в ефірі.' },
     { q: 'Скільки це коштує?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Який трафік я отримаю?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Що, якщо клієнт не прийде?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
],
  Підключення: [
 { q: 'Як це працює?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
    { q: 'Чи потрібна інтеграція?', a: 'Ні, не потрібно підключати API чи касові системи. INDI працює автономно: ви просто створюєте пропозицію в особистому кабінеті, і вона одразу з’являється в застосунку.Ми зробили все, щоб запуск не вимагав розробників або зайвого часу. Менше ніж за 5 хвилин — і ви вже в ефірі.' },
     { q: 'Скільки це коштує?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Який трафік я отримаю?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Що, якщо клієнт не прийде?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
  ],
  Платформа: [
    { q: 'Як це працює?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
    { q: 'Чи потрібна інтеграція?', a: 'Ні, не потрібно підключати API чи касові системи. INDI працює автономно: ви просто створюєте пропозицію в особистому кабінеті, і вона одразу з’являється в застосунку.Ми зробили все, щоб запуск не вимагав розробників або зайвого часу. Менше ніж за 5 хвилин — і ви вже в ефірі.' },
     { q: 'Скільки це коштує?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Який трафік я отримаю?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Що, якщо клієнт не прийде?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
  ],
  Ціни: [
   { q: 'Як це працює?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
    { q: 'Чи потрібна інтеграція?', a: 'Ні, не потрібно підключати API чи касові системи. INDI працює автономно: ви просто створюєте пропозицію в особистому кабінеті, і вона одразу з’являється в застосунку.Ми зробили все, щоб запуск не вимагав розробників або зайвого часу. Менше ніж за 5 хвилин — і ви вже в ефірі.' },
     { q: 'Скільки це коштує?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Який трафік я отримаю?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
     { q: 'Що, якщо клієнт не прийде?', a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non rerum, hic maxime doloribus provident dolore id ipsam eos animi quasi. Vitae atque ipsam quos porro quaerat dolore odio deleniti consectetur. Soluta doloremque rem amet, provident nihil fugit quasi inventore quo ratione velit nulla odio autem sit quam ullam culpa?' },
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
                    transition={{ duration: 0.4 }}
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
