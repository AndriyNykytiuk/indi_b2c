import React,{useState} from 'react'
import '../css/additionalblockquestion.css'
const AdditionalBlockOFquestion = () => {
  const[isContact,setIsContact]=useState(false)
  return (
    <div className='additional-block mt-20 mb-30'>
       <div className='additional-block-container mx-auto max-w-[1280px] flex flex-col items-center justify-center'>
         <div className='additional-block-title'>
            <h3>Вс ще є питання?</h3>  
        </div>
        <div className='additional-block-text'>
            <p>Зв'яжіться з нами для допомоги.</p>
        </div>
        <div className='additional-block-button relative'
        onMouseEnter={() => setIsContact(true)}
        onMouseLeave={() => setIsContact(false)}
        >
            <a href='#' className='btn'>Контакт</a>
            {isContact && (
              <div className="absolute top-[50px] left-8 bg-black p-2 rounded-xl shadow">
                <p className="text-bold text-white">в процесі наповнення</p>
              </div>
            )}
        </div>
       </div>
    </div>
  )
}

export default AdditionalBlockOFquestion