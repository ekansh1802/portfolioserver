import express from 'express';
import { getProjects, createProject } from '../controllers/project.js';

const router = express.Router();

//To get all the projects
router.get('/', getProjects);

//To create a project
router.post('/', createProject);

export default router;