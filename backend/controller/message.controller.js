import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'

const sendMessage = async (req , res)=>{
    const {message}=req.body;
    const {id:recieverId} = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
        participants:{
            $all:[senderId,recieverId]
        }
    })

    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,recieverId]
        })
    }

    const newMessage = new Message({
        message,
        senderId,
        recieverId,
        
    })
    if(newMessage){
        conversation.messages.push(newMessage)
    }

    await Promise.all([conversation.save(),newMessage.save()]);
    res.status(200).json(newMessage)
}

const getMessage =async (req , res)=>{
    try {
            const {id:userToChatId} = req.params;
            const senderId = req.user._id;

            const conversation = await Conversation.findOne({
                participants:{$all:[senderId,userToChatId]}
            }).populate("messages")

            if(!conversation) return res.status(200).json([]);

            const messages = conversation.messages;

            res.status(200).json(messages)


    } catch (error) {
            console.log("error in the get message controller");
            res.status(500).json({
                msg:"Internel error "
            })
            
    }
}



export {sendMessage,getMessage};