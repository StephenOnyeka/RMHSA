const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

//Get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

// Get a single blog
const getBlog = async (req, res) => {
  const { id } = req.params; //getting the id property from the route paramaters property
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // what this means is that if the id that we've got is not valid, return a response...
    return res.status(404).json({ error: "No such blog" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(400).json({ error: "No such blog" });
  }
  res.status(200).json(blog);
};

// create a new blog
const createBlog = async (req, res) => {
  const { title, desc, body } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!desc) {
    emptyFields.push("desc");
  }
  if (!body) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //add doc to db
  try {
    const blog = await Blog.create({ title, desc, body });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a  blog
const deleteBlog = async (req, res) => {
  const { id } = req.params; //getting the id property from the route paramaters property
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // what this means is that if the id that we've got is not valid, return a response...
    return res.status(404).json({ error: "No such blog" });
  }

  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(400).json({ error: "No such blog" });
  }
  res.status(200).json(blog);
};

// Update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params; //getting the id property from the route paramaters property
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // what this means is that if the id that we've got is not valid, return a response...
    return res.status(404).json({ error: "No such blog" });
  }

  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!blog) {
    return res.status(400).json({ error: "No such blog" });
  }
  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
