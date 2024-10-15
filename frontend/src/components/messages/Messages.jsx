import React from 'react'
import MessageCard from './MessageCard'
const Messages = ({className}) => {
  return (
    <div className={`${className}  w-3/4`}>
            <MessageCard/>
    </div>
  )
}

export default Messages