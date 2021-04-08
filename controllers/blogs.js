const Blog = require('../models/blog');

// todo: require skill model 


async function index(req, res) {
    // get all skills from the skill model
    try {
      const blogs = await Blog.find({});
      res.status(200).json(blogs); // http response as json data
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Something went wrong' });
      }
  }

async function create(req, res) {
    try {
      const blog = await Blog.create(req.body);
      res.status(201).json(blog);
      //index(req, res);
    } catch (error) {
      res.status(401).json({ error: 'Something went wrong' });
    }
}

module.exports = {
  index,
  create,

};
