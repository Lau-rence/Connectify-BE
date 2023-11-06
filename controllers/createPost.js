const Post = require('../models/postModel');

async function createPost (req, res) {
    const { author, post } = req.body;

    try{
        const insertPost = await Post.create({author, post});
        res.status(200).json(insertPost);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { createPost };