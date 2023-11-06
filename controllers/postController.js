const Post = require('../models/postModel');
const mongoose = require('mongoose');

//create post
const createPost = async (req, res) => {
    const { author, post } = req.body;
    try{
        const postVariable = await Post.create({author, post});
        res.status(200).json(postVariable);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//get all posts
const getPosts = async (req, res) => {
    try{
        const postVariable = await Post.find({}).sort({createdAt: -1});
        res.status(200).json(postVariable);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//get a single post
const getPost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "There is no such post."})
    }
    try{
        const postVariable = await Post.findById(id);
        if(!postVariable){
            return res.status(400).json({error: "There is no such post."});
        }
        res.status(200).json(postVariable);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//delete post
const deletePost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "There is no such post."})
    }
    const postVariable = await Post.findOneAndDelete({_id: id});
    if(!postVariable){
        return res.status(400).json({error: "There is no such post."});
    }
    res.status(200).json(postVariable);
}

//update post
const updatePost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "There is no such post."})
    }
    const postVariable = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if(!postVariable){
        return res.status(400).json({error: "There is no such post."});
    }
    res.status(200).json(postVariable);
}

module.exports = {
    createPost, 
    getPosts,
    getPost,
    deletePost,
    updatePost
};