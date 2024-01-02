import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';

// routes
import jobRouter from './routers/jobRouter.js';
import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';

// public folder
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
// import { validateJobInput } from './middleware/validationMiddleware.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, '.client/public')));

// middleware to use cookie parser
app.use(cookieParser());

// middleware to turn on json
app.use(express.json());

// basic routers and controllers

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

// middleware for creating, editing,  a job, deleting a job, and
app.use('/api/v1/jobs', authenticateUser, jobRouter);

// middleware for creating, editing,  a job, deleting a user
app.use('/api/v1/auth', authRouter);

// middleware for creating, editing,  a job, deleting a user
app.use('/api/v1/users', authenticateUser, userRouter);

// Not Found Middleware
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

// Error Middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5173;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server is listening at port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
