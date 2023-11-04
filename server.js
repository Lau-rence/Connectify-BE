require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('Connectify')
});

app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
});