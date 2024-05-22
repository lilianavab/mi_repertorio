import express from 'express';
import { postRepertorioHandler } from '../controller/repertorioHandler.js'

const router = express.Router();

// '/' = /cancion
router.post('/', postRepertorioHandler ) //http://localhost:3000/cancion

export default router;

