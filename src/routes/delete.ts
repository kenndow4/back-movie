import express, { Request, Response } from 'express'
import { deleteU } from '../controllers/delete';






const router = express.Router();
router.post("/delete",deleteU );

export default router;