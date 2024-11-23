// const Blog = require("../models/blogModel");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Specify the destination for uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Append the current timestamp to the filename
//   },
// });

// const upload = multer({ storage: storage });

// // Get all blogs
// const getBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find({}).sort({ createdAt: -1 });
//     res.status(200).json(blogs);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch blogs" });
//   }
// };

// // Get a single blog
// const getBlog = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such blog" });
//   }
//   try {
//     const blog = await Blog.findById(id);
//     if (!blog) {
//       return res.status(404).json({ error: "No such blog" });
//     }
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch blog" });
//   }
// };

// // Create a new blog
// const createBlog = async (req, res) => {
//   const { title, desc, body } = req.body;
//   const titleImg = req.file; // Get the uploaded file

//   let emptyFields = [];
//   if (!titleImg) emptyFields.push("titleImg");
//   if (!title) emptyFields.push("title");
//   if (!body) emptyFields.push("body");

//   // Return error if any fields are empty
//   if (emptyFields.length > 0) {
//     return res
//       .status(400)
//       .json({ error: "Please fill in all the fields", emptyFields });
//   }

//   // Add document to the database
//   try {
//     const blog = await Blog.create({
//       titleImg: titleImg.path, // Save the path of the uploaded file
//       title,
//       desc,
//       body,
//     });
//     res.status(201).json(blog); // 201 Created
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a blog
// const deleteBlog = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such blog" });
//   }
//   try {
//     const blog = await Blog.findOneAndDelete({ _id: id });
//     if (!blog) {
//       return res.status(404).json({ error: "No such blog" });
//     }
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete blog" });
//   }
// };

// // Update a blog
// const updateBlog = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such blog" });
//   }
//   try {
//     const blog = await Blog.findOneAndUpdate(
//       { _id: id },
//       { ...req.body },
//       { new: true } // Return the updated document
//     );
//     if (!blog) {
//       return res.status(404).json({ error: "No such blog" });
//     }
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update blog" });
//   }
// };

// module.exports = {
//   getBlogs,
//   getBlog,
//   createBlog: upload.single("titleImg"), // Use multer middleware for file uploads
//   deleteBlog,
//   updateBlog,
// };



//  THE ORIGINAL
const Blog = require("../models/blogModel");
const mongoose = require("mongoose");
// const multer = require('multer');

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
  // const titleImg = req.file;

  // const upload = multer({ dest: "uploads/" }); // Specify the destination for uploaded files

  let emptyFields = [];
  // if (!titleImg) {
  //   emptyFields.push("titleImg");
  // }
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
    return res.status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //add doc to db
  try {
    const blog = await Blog.create({title, desc, body });
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
