import mongoose from 'mongoose';

//Structure of each project
const projectSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: { type: Array, required: true },
    link: { type: String, required: false },
    url: { type: String, required: false },
    selectedFile: { type: String, required: true },
})

const projectMessage = mongoose.model('PROJECT MESSAGE MODEL', projectSchema);

export default projectMessage;