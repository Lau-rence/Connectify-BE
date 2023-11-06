require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
//routers
const post = require('./routes/post');

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/post',post);

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to database and listening to port ${process.env.PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })

