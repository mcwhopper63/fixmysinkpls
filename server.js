import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

const app = express();

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(express.json());

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

app.get('/', (req, res) => {
    res.send('Hello World get method');
});

app.post('/', (req, res) => {
    console.log(req);
    res.json({ message: 'Data Received', data: req.body });
});

app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({ jobs });
});

// Create a job
app.post('/api/v1/jobs', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res
            .status(400)
            .json({ msg: 'please provide company and position' });
    }
    const id = nanoid(10);
    const job = { id, company, position };
    jobs.push(job);
    res.status(200).json({ job });
});

// Get a single job
app.get('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    res.status(200).json({ job });
});

// Edit a Job
app.patch('/api/v1/jobs/:id', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res
            .status(400)
            .json({ msg: `Pls provide company and position` });
    }
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res
            .status(404)
            .json({ msg: `that job doesn't exist with that id: ${id}` });
    }
    job.company = company;
    job.position = position;
    res.status(200).json({ msg: 'job modified', job });
});

// Delete Job
app.delete('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;

    const newJobs = jobs.filter((job) => job.id !== id);
    jobs = newJobs;
    return res.status(200).json({ msg: 'job deleted' });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});
