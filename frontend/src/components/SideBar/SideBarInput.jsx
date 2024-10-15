import React from 'react'

const SideBarInput = ({className}) => {
  return (
    <div>
      <input className={`${className} bg-white text-black font-semibold`} type="text" placeholder='chat with' />
    </div>
  )
}

export default SideBarInput