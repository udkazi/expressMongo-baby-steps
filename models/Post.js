const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    yearPublish: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
  });

module.exports = mongoose.model('Post', PostSchema);