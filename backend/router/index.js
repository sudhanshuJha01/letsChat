import {Router} from 'express';
import authRouter from './auth.router.js'
import messageRouter from './message.router.js'
import  getUsersRoutes from './getUsers.router.js'
const router = Router()


router.use('/auth',authRouter);
router.use('/msg',messageRouter);
router.use('/user',getUsersRoutes);


export default router