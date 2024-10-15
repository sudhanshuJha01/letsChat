import React from 'react'
import demoName from '../../../config.js'

const Conversation = () => {
  console.log(demoName);
  return (
    <div className='h-full mt-2 p-3  bg-purple-600 rounded-2xl overflow-scroll'>
      {demoName?.map((item)=>{
        return <div className='flex items-center p-4 font-semibold gap-5 text-2xl hover:bg-purple-700 rounded-2xl'>
          <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" width={45}alt="" />
          <span>{item?.name}</span>
        </div>
      })}
    </div>
  )
}

export default Conversation