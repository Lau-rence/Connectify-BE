const express = require('express');

const create = require('../controllers/createPost')

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
router.post('/', create.createPost);

//delete post
router.delete('/:id', (req, res)=>{
    res.send({message: 'Delete a posts!'});
});
//update post
router.patch('/:id', (req, res)=>{
    res.send({message: 'Update post!'});
});

module.exports = router;