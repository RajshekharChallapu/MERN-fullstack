
const express = require('express');
const passport= require('passport');
const GoogleStrategy =require('passport-google-oauth20').strategy;

//listening requests..btw express and node
const app = express();

/* //creates new instance..to authenticate user inside app ...passport.use ...is listening particular service here..
//console.developers.google.com */
passport.use(new GoogleStrategy());

/* //router handler..express app
app.get('/',(req,res)=>{
res.send({hi:'buddy'});
}); */

        
const PORT = process.env.PORT || 5000;
app.listen(PORT);