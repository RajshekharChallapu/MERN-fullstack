const express = require('express');
const mongoose =require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');




mongoose.connect(keys.mongoURI);

//listening requests..btw express and node
const app = express();

//calling and returns app function from authRoutes file....
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);