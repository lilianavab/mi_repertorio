import express from 'express';
import { getRepertorioHandler } from '../controller/repertorioHandler.js'

const router = express.Router();

// '/' = /canciones
router.get('/', getRepertorioHandler ) //http://localhost:3000/canciones

export default router;

