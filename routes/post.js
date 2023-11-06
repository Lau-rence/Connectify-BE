const express = require('express');

const {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
} = require('../controllers/postController')

const router = express.Router();

//Get all posts
router.get('/', getPosts);

//Single posts
router.get('/:id', getPost);

//Post posts
router.post('/', createPost);

//delete post
router.delete('/:id', deletePost);
//update post
router.patch('/:id', updatePost);

module.exports = router;