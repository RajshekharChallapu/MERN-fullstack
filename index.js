
const express = require('express');

//listening requests..btw express and node
const app = express();

//router handler..express app
app.get('/',(req,res)=>{
res.send({hi:'there'});
});

        
const PORT = process.env.PORT || 5000;
app.listen(PORT);