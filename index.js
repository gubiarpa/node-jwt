const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { connect } = require('./routes/auth');

/// Connect to Database
const _user = 'gubiarpa';
const _pass = 'ReV6LCjWDgAngaETz1zcVjOe8Ce3sg';
mongoose.connect(`mongodb+srv://${ _user }:${ _pass }@cluster0.vyp0a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
    () => { console.log('Connected to DB');
});

/// Import Routes
const authRoute = require('./routes/auth');

/// Routes Middlewares
app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server up and running'));