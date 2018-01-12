const express = require('express');
const mongoose =require('mongoose');
const cookieSession = require('cookie-session');
const passport =require('passport');
const bodyParser =require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

//listening requests..btw express and node
const app = express();

app.use(bodyParser.json());

//middlewares
app.use(cookieSession({
maxAge:30*24*60*60*1000,
keys:[keys.cookieKey]
})
);

app.use(passport.initialize());
app.use(passport.session());

//calling and returns app function from authRoutes file....
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);