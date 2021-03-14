const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { connect } = require('./routes/auth');

/// Connect to Database
dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => { console.log('Connected to DB');
});

/// Import Routes
const authRoute = require('./routes/auth');

/// Routes Middlewares
app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server up and running'));