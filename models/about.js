import mongoose from 'mongoose';

//Structure of each tech
const aboutSchema = mongoose.Schema({
    year: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
});

const aboutMessage = mongoose.model('ABOUT MESSAGE MODEL', aboutSchema);

export default aboutMessage;