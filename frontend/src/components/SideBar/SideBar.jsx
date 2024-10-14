import SideBarInput from './SideBarInput.jsx'
import { IoSearchCircle } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className='flex items-center '>
        <SideBarInput/>
        <IoSearchCircle/>
    </div>
  )
}

export default SideBar