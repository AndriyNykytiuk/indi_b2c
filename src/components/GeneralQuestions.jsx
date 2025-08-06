import React,{useState} from 'react'
import ListOfquestions from './ListOfquestions'
const GeneralQuestions = () => {
    const [isGeneral,setIsGeneral]=useState(false)
  return (
    <div>
        <div className='title-qustions' onClick={()=>setIsGeneral(prev=>!prev)}>
            <h3 className={`${isGeneral ? 'bg-[#FF6138]': ''}`}>Загальні</h3>
        </div>
        {isGeneral && <ListOfquestions/>}
    </div>
  )
}

export default GeneralQuestions