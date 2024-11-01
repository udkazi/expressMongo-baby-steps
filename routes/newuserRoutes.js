const express = require('express');
const router = express.Router();
const User = require('../models/User');

// operation with mongoDb
//define mongo scheme or content model 
// const User = require('./models/User');
// const Post = require('./models/Post');

router.post('/newUsers', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/newUsers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports = router;