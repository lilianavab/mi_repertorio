import express from 'express';
import { deleteRepertorioHandler } from '../controller/repertorioHandler.js'

const router = express.Router();

// '/' = /eliminar/:id
router.delete('/:id', deleteRepertorioHandler ) //http://localhost:3000/eliminar/:id

export default router;

