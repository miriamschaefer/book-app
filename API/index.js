'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

//START DATABASE
mongoose.connect(config.db);
mongoose.Promise = global.Promise;

// CONNECTING AND BINDING TO ERROR
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//app.use(app.express.static('public'));

app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
})

