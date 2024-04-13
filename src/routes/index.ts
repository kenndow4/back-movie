import express from 'express'
import authRouter from './auth'

const route = express.Router();
route.use("/api",authRouter )

export default route;