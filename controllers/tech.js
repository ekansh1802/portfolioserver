//import mongoose from 'mongoose';
import techMessage from '../models/tech.js';

export const getTechs = async (req,res) => {
    try{
        const techs = await techMessage.find();
        res.status(200).json(techs);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Some error has occurred '});
    }
}

export const createTech = async (req, res) => {
    const tech = req.body;
    const newTech = new techMessage(tech);
    try{
        await newTech.save();
        res.status(200).json(newTech);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Some error has occurred '});
    }
}