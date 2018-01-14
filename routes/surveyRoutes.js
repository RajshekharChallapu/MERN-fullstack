const requireLogin = require('../middlewares/requireLogin');
const requireCredits= require('../middlewares/requireCredits');

module.exports =app =>{
    app.post('/api/surveys',requireLogin, requireCredits, (req, res) =>{
        //making user to have atleast have min credits to take survey

    });

};