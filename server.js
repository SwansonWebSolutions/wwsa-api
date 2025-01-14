const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const emailRouter = require('./routes/email');

const port = process.env.PORT;

const allowedDomains = [
    'http://localhost:3000',
    'https://wws-alliances.org',
    'https://www.wws-alliances.org'
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: allowedDomains,
}));

app.use('/api', emailRouter);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);  
});