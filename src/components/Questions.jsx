
import GeneralQuestions from './GeneralQuestions'
import '../css/qustions.css'

const Questions = () => {
 
  return (
    <section className='questions'>

        <div className='qustions-container mx-auto max-w-[1280px] flex flex-col gap-2'>
            <div className='questions-title'>
                <h2 className='text-center text-2xl font-regular  md:text-center text-4xl font-bold block-title'>Питання</h2>
            </div>
            <div className='text-center'>
              <h4 className='text-[#667085]'>Знайди відповіді на найпоширеніші запитання про INDI.</h4>
            </div>
        </div>

    </section>
  )
}

export default Questions