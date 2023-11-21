import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
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

app.use('/api/v1/jobs', jobRouter);

// app.get('/api/v1/jobs');

// // Create a job
// app.post('/api/v1/jobs');

// // Get a single job
// app.get('/api/v1/jobs/:id');

// // Edit a Job
// app.patch('/api/v1/jobs/:id');

// // Delete Job
// app.delete('/api/v1/jobs/:id');

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

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});
