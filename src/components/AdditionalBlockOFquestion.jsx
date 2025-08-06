import React from 'react'
import '../css/additionalblockquestion.css'
const AdditionalBlockOFquestion = () => {
  return (
    <div className='additional-block mt-20 mb-30'>
       <div className='additional-block-container mx-auto max-w-[1280px] flex flex-col items-center justify-center'>
         <div className='additional-block-title'>
            <h3>Вс ще є питання?</h3>  
        </div>
        <div className='additional-block-text'>
            <p>Зв'яжіться з нами для допомоги.</p>
        </div>
        <div className='additional-block-button'>
            <a href='#' className='btn'>Контакт</a>
        </div>
       </div>
    </div>
  )
}

export default AdditionalBlockOFquestion