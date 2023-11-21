import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
// routes
import jobRouter from './routers/jobRouter.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// middleware to turn on json
app.use(express.json());

// basic routers and controllers
app.get('/', (req, res) => {
    res.send('Hello World get method');
});

app.post('/', (req, res) => {
    res.json({ message: 'Data Received', data: req.body });
});

// middleware for creating, editing,  a job, deleting a job, and
app.use('/api/v1/jobs', jobRouter);

// Not Found Middleware
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

// Error Middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: 'something went wrong' });
});

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server is listening at port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
