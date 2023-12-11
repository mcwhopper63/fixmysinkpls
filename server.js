import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

// routes
import jobRouter from './routers/jobRouter.js';
import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
// import { validateJobInput } from './middleware/validationMiddleware.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// middleware to use cookie parser
app.use(cookieParser());

// middleware to turn on json
app.use(express.json());

// basic routers and controllers
app.get('/', (req, res) => {
    res.send('Hello World');
});

// app.post('/api/v1/test', validateJobInput, (req, res) => {
//     const { name } = req.body;
//     res.json({ msg: `hello ${name}` });
// });

// middleware for creating, editing,  a job, deleting a job, and
app.use('/api/v1/jobs', authenticateUser, jobRouter);

// middleware for creating, editing,  a job, deleting a user
app.use('/api/v1/auth', authRouter);

// middleware for creating, editing,  a job, deleting a user
app.use('/api/v1/user', userRouter);

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
