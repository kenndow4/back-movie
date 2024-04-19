import express, { Request, Response } from 'express'
import { getUpload, upload} from '../controllers/upload';
import { search } from '../controllers/search';




const router = express.Router();
router.post("/upload", upload);
router.post("/search", search);
router.get("/getda", getUpload );
export default router;