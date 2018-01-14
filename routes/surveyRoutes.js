const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits= require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports =app =>{
    app.post('/api/surveys',requireLogin, requireCredits, (req, res) =>{
        //making user to have atleast have min credits to take survey
        //diif properties
        const {title,subject,body,recipients}= req.body;

        const survey= new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({email:email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()

        });

    });

};