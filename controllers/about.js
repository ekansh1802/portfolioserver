//import mongoose from 'mongoose';
import aboutMessage from '../models/about.js';

export const getAbouts = async (req,res) => {
    try{
        const abouts = await aboutMessage.find();
        res.status(200).json(abouts);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Some error has occurred '});
    }
}

export const createAbout = async (req, res) => {
    const about = req.body;
    const newAbout = new aboutMessage(about);
    try{
        await newAbout.save();
        res.status(200).json(newAbout);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: 'Some error has occurred '});
    }
}