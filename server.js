import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

const app = express();

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World get method');
});

app.post('/', (req, res) => {
    console.log(req);

    res.json({ message: 'Data Received', data: req.body });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});
