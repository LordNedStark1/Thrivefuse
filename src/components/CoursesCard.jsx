import React from 'react'
import '../css/CourseCard.css'
import LinearWithValueLabel from './ProgressBar'

function CoursesCard({courseTitle, image, progress}) {
  return (
    <div className=' bg-white rounded mt-2 shadow-md shadow-slate-600 mr-4 w-56 '>
       <div className=' ml-5 mt-3' >
       <div className='img-title-div flex pt-4'  >
            <img src={image} alt='' width={35} height={35}/>
            <span className='ml-24'>{courseTitle}</span>
        </div>
        <div className='pt-9  w-44 mb-4 ml-2 '>
          <LinearWithValueLabel value={progress} />
      </div>
       </div>
         </div>
  )
}

export default CoursesCard
