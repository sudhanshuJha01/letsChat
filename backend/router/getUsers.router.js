import {Router} from 'express';
import getUserController from '../controller/user.controller.js'
import authMiddleware from '../middlewares/Auth.middleware.js';
const router = Router();

router.get('/',authMiddleware,getUserController);

export default router