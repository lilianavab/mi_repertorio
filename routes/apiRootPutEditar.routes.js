import express from 'express';
import { putRepertorioHandler } from '../controller/repertorioHandler.js'

const router = express.Router();

// '/' = /editar/:id
router.put('/:id', putRepertorioHandler ) //http://localhost:3000/editar/:id

export default router;

