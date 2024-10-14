import {SideBar , Conversation} from '../components/index.js'

const Chat = ({chatData , profilePic , }) => {
  return (
<div className=' h-screen text-black flex justify-center items-center'>
<SideBar/>
<Conversation/>
</div>
  );
};

export default Chat;
