const app = require('express')
const express = require("express");
const router = express.Router(); //this creates an instance of a router
const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");
const { get } = require("mongoose");

//GET all blogs and a subscription
router.get("/", getBlogs);
// router.get("/", getBlogs, getSubscriptions);

//GET a single blog
router.get("/:id", getBlog);

// POST a new blog and a subscription
router.post("/", createBlog);
// router.post("/", createBlog, createSubscription);

//DELETE a blog
router.delete("/:id", deleteBlog);

//UPDATE a blog
router.patch("/:id", updateBlog);

module.exports = router;