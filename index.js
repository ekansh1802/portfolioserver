import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

//Routes
import projectRoutes from './routes/project.js';
import techRoutes from './routes/tech.js';
import aboutRoutes from './routes/about.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//Starting route for every project
app.use('/projects', projectRoutes);

//Starting route for every tech
app.use('/techs', techRoutes);

//Starting route for every about
app.use('/abouts', aboutRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Server is running'});
})

const CONNECTION_URL = 'mongodb+srv://Ekansh:e12456840a@cluster0.fgrob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

//To avoid warnings
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on PORT ${PORT} and connected to the database`)))
.catch((error) => console.log(error.message));

//To avoid warnings
//mongoose.set('useFindAndModify', false);