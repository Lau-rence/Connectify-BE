const express = require('express');

const router = express.Router();

//Get all posts
router.get('/', (req, res)=>{
    res.send({message: 'All posts!'});
});

//Single posts
router.get('/:id', (req, res)=>{
    res.send({message: 'Single post!'});
});

//Post posts
router.post('/', (req, res)=>{
    res.send({message: 'Insert posts!'});
});
//delete post
router.delete('/:id', (req, res)=>{
    res.send({message: 'Delete a posts!'});
});
//update post
router.patch('/:id', (req, res)=>{
    res.send({message: 'Update post!'});
});

module.exports = router;