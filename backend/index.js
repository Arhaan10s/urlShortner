const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.SERVER_PORT || 3000;

app.use('/api', require('./Routes/api'));

app.use('/', require('./Routes/redirect'));

app.listen(port, () => console.log(`Server running on port ${port}`));
