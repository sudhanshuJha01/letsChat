import SideBarInput from "./SideBarInput.jsx";
import { IoLogOut, IoSearchCircle } from "react-icons/io5";
import Conversation from "../conversation/Conversation.jsx";

const SideBar = ({ className }) => {
  return (
    <div
      className={`w-full lg:w-1/4 bg-red-400 m-3 rounded-3xl p-2 text-slate-100  ${className} `}
    >
      <div className="flex ml-1 mt-4 items-center px-5">
        <SideBarInput className={"rounded-2xl p-2 outline-none"} />
        <IoSearchCircle size={52} className="" />
      </div>
      <div className="ml-1 h-5/6">
        <Conversation />
        <IoLogOut size={30} className="mt-2" />
      </div>
    </div>
  );
};

export default SideBar;
