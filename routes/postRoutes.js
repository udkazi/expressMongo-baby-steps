const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// operation with mongoDb
// define mongo scheme or content model 
// const User = require('./models/User');
// const Post = require('./models/Post');

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name email');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

//http://localhost:3000/posts/user/userId123
router.get('/posts/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const posts = await Post.find({ author: userId }).populate('author', 'name email'); // Populate author details
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.post('/posts', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;