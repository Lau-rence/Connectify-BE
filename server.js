require('dotenv').config();

const express = require('express');
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

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`);
});