require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
//routers
const posts = require('./routes/posts');

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/posts',posts);

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

