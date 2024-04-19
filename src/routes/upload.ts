import express, { Request, Response } from 'express'
import { upload} from '../controllers/upload';
import { search } from '../controllers/search';




const router = express.Router();
router.post("/upload", upload);
router.post("/search", search);
export default router;