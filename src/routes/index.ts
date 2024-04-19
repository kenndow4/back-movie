import express from 'express'
import authRouter from './auth'
import uploadRouter from './upload'
import deleteRouter from './delete'


const router = express.Router();
router.use("/api",authRouter );
router.use("/api",uploadRouter );
router.use("/api",deleteRouter );

export default router;