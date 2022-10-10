//import mongoose from 'mongoose';
import projectMessage from '../models/project.js';

export const getProjects = async (req,res) => {
    try{
        const projects = await projectMessage.find();
        res.status(200).json(projects);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Some error has occurred '});
    }
}

export const createProject = async (req, res) => {
    const project = req.body;
    const newProject = new projectMessage(project);
    try{
        await newProject.save();
        res.status(200).json(newProject);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Some error has occurred '});
    }
}