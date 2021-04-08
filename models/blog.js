const mongoose = require('mongoose');
  const Schema  = mongoose.Schema;

// Todo: create a skill model

const blogSchema = new Schema({
  blog: String,
  level: String,
}, { timestamps: true });
    

module.exports  = mongoose.model('Blog', blogSchema);
