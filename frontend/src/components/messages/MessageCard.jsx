import React from 'react'
import ConversationCard from './ConversationCard.jsx'
import { IoSend } from "react-icons/io5";
const MessageCard = () => {
  return (
    <div className='h-[97%] bg-red-400 mt-3  rounded-2xl p-4 mr-2 -ml-4 text-white font-semibold text-2xl'>
        <div className=' flex  items-center gap-4 bg-violet-600 p-3 rounded-2xl'>
          <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" width={45} alt="" />
        <h1>Sudhanshu Jha</h1>
        </div>
        <ConversationCard/>
        <div className='flex items-center justify-center w-full mt-1 text-black'>
        <input className='w-[96%] bg-cyan-100  rounded-l-2xl outline-none p-1 max-h-12 max-w shadow-xl shadow-black pl-4' type="text" />
        <IoSend size={40} className='bg-cyan-100 text-violet-600 p-1 rounded-r-full hover:bg-cyan-200'/>
        </div>
    </div>
  )
}

export default MessageCard