const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const emailRouter = require('./routes/email');
const app = express();

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: envFile });

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/email', emailRouter);

console.log(`Using ${envFile}`);

app.get('/', (req, res) => {
    res.json({ message: "response from server"});
});  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  
});