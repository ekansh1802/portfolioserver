import express from 'express';
import { getTechs, createTech } from '../controllers/tech.js';

const router = express.Router();

//To get all the tech
router.get('/', getTechs);

//To create a project
router.post('/', createTech);

export default router;