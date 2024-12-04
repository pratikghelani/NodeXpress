const express = require('express');
const app = express();
const mongoose = require('mongoose');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(compression());
app.use(helmet());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



/* Routes end */
const start = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
        console.log('Database connected');

        const PORT = process.env.PORT || 3005;
        app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));

        app.get('/', (req, res) => {
            return res.status(200).json({
                status: 200,
                message: 'GET request to the homepage'
            });
        });

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

start();