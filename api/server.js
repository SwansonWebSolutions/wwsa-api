const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const emailRouter = require('./routes/email');
const app = express();

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: envFile });

const port = process.env.PORT;
const domain = process.env.DOMAIN;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use('/api', emailRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  
});