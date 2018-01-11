const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);

});
passport.deserializeUser((id, done) => {
    User
        .findById(id)
        .then(user => {
            done(null, user);
        });

});

/* //creates new instance..to authenticate user inside app ...passport.use ...is listening particular service here..passport setup..service config
//console.developers.google.com */
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},
//callback function
async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id})

    //tells us ..have a record with given access ID
    if (existingUser) {
        done(null, existingUser);
    } 
        //if we don't have user ID..it create new record
      const user= await new User({googleId: profile.id}).save()
            done(null, user);
    

    /*  console.log('accessToken', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile); */

}
)
);