import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';

// routes
import jobRouter from './routers/jobRouter.js';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// middleware to turn on json
app.use(express.json());

// basic routers and controllers
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post(
    '/api/v1/test',
    [body('name').notEmpty().withMessage('name is required')],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg);
            return res.status(400).json({ errors: errorMessages });
        }
        next();
    },
    (req, res) => {
        const { name } = req.body;
        res.json({ msg: `hello ${name}` });
    }
);

// middleware for creating, editing,  a job, deleting a job, and
app.use('/api/v1/jobs', jobRouter);

// Not Found Middleware
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

// Error Middleware
app.use(errorHandlerMiddleware);

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
