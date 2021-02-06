const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const MONGO_CONFIG = process.env.MONGO_CONFIG;

//Router
//
//
app.use(express.urlencoded({ extended: true }));
app.use( cors() );
//# user router
const userRouter = require('./router/users');
app.use('/users', userRouter);

//# action Router
const actionRouter = require('./router/action');
app.use('/action' ,actionRouter);


//Mongo Connection
mongoose.connect(MONGO_CONFIG ,{ useNewUrlParser: true,useUnifiedTopology: true } ,(err)=>{
    if(!err){
        console.log('Database Connected')
    }else{
        console.log(err)
    }
});


// PORT Listening
app.listen( PORT, (err , res)=>{
    if(!err){
         console.log('App is listening PORT : '+PORT);
    }else{
        console.log(err);
    }
});


