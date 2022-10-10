import mongoose from 'mongoose';

//Structure of each tech
const techSchema = mongoose.Schema({
    title: { type: String, required: true },
    tech: { type: Array, required: true },
});

const techMessage = mongoose.model('TECH MESSAGE MODEL', techSchema);

export default techMessage;