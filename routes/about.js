import express from 'express';
import { getAbouts, createAbout } from '../controllers/about.js';

const router = express.Router();

//To get all the tech
router.get('/', getAbouts);

//To create a project
router.post('/', createAbout);

export default router;