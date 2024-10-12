import { Router } from "express";
import {sendMessage} from '../controller/message.controller.js'
import {getMessage} from '../controller/message.controller.js'
import authMiddleware from '../middlewares/Auth.middleware.js'
const router = Router();

router.post('/send/:id',authMiddleware,sendMessage)
router.get('/:id',authMiddleware,getMessage)




export default router;