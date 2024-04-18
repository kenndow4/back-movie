import express from 'express'
import authRouter from './auth'
import uploadRouter from './upload'

const router = express.Router();
router.use("/api",authRouter );
router.use("/api",uploadRouter );

export default router;