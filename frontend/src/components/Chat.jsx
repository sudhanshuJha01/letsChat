import { SideBar, Messages } from "../components/index.js";

const Chat = () => {
  return (
    <div className=" text-black flex h-screen gap-1.5">
      <SideBar  />
      <Messages className="max-lg:hidden" />
    </div>
  );
};

export default Chat;
