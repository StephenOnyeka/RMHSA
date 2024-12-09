//  THE ORIGINAL
const Blog = require("../models/blogModel");
const Subscriber= require("../models/subscribeModel")
const mongoose = require("mongoose");
const{ sendEmailNotification}= require("../emailService")

// const multer = require('multer');


//Get all blogs
// const getBlogs = async (req, res) => {
//   const blogs = await Blog.find({}).sort({ createdAt: -1 });

//   res.status(200).json(blogs);
// };
const getBlogs = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Current page number
  const limit = parseInt(req.query.limit) || 5; // Number of blogs per page
  const skip = (page - 1) * limit; // Calculate how many documents to skip

  try {
    // Fetch blogs with pagination
    const blogs = await Blog.find({})
      .sort({ createdAt: -1 }) // Sort by creation date
      .skip(skip) // Skip the previous pages
      .limit(limit); // Limit the number of blogs returned

    // Get the total count of blogs
    const totalPosts = await Blog.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalPosts / limit);

    // Send response
    res.status(200).json({
      blogs, // The current page of blogs
      totalPosts, // Total number of blogs
      totalPages, // Total number of pages
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
    const blog = await Blog.create({ title, desc, body });

    // Fetch subscribers' emails
    const subscribers = await Subscriber.find({}).select("email"); // Assuming your Subscriber model has an email field
    const subscriberEmails = subscribers.map((sub) => sub.email);

    // Send email notification
    await sendEmailNotification(subscriberEmails, blog);

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





// //  THE ORIGINAL
// const Blog = require("../models/blogModel");
// const Subscriber= require("../models/subscribeModel")
// const mongoose = require("mongoose");
// // const multer = require('multer');


// //Get all blogs
// // const getBlogs = async (req, res) => {
// //   const blogs = await Blog.find({}).sort({ createdAt: -1 });

// //   res.status(200).json(blogs);
// // };
// const getBlogs = async (req, res) => {
//   const page = parseInt(req.query.page) || 1; // Current page number
//   const limit = parseInt(req.query.limit) || 5; // Number of blogs per page
//   const skip = (page - 1) * limit; // Calculate how many documents to skip

//   try {
//     // Fetch blogs with pagination
//     const blogs = await Blog.find({})
//       .sort({ createdAt: -1 }) // Sort by creation date
//       .skip(skip) // Skip the previous pages
//       .limit(limit); // Limit the number of blogs returned

//     // Get the total count of blogs
//     const totalPosts = await Blog.countDocuments();

//     // Calculate total pages
//     const totalPages = Math.ceil(totalPosts / limit);

//     // Send response
//     res.status(200).json({
//       blogs, // The current page of blogs
//       totalPosts, // Total number of blogs
//       totalPages, // Total number of pages
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a single blog
// const getBlog = async (req, res) => {
//   const { id } = req.params; //getting the id property from the route paramaters property
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     // what this means is that if the id that we've got is not valid, return a response...
//     return res.status(404).json({ error: "No such blog" });
//   }

//   const blog = await Blog.findById(id);

//   if (!blog) {
//     return res.status(400).json({ error: "No such blog" });
//   }
//   res.status(200).json(blog);
// };

// // create a new blog
// const createBlog = async (req, res) => {
//   const { title, desc, body } = req.body;
//   // const titleImg = req.file;

//   // const upload = multer({ dest: "uploads/" }); // Specify the destination for uploaded files

//   let emptyFields = [];
//   // if (!titleImg) {
//   //   emptyFields.push("titleImg");
//   // }
//   if (!title) {
//     emptyFields.push("title");
//   }
//   if (!desc) {
//     emptyFields.push("desc");
//   }
//   if (!body) {
//     emptyFields.push("body");
//   }
//   if (emptyFields.length > 0) {
//     return res.status(400)
//       .json({ error: "Please fill in all the fields", emptyFields });
//   }

//   //add doc to db
//   try {
//     const blog = await Blog.create({title, desc, body });
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a  blog
// const deleteBlog = async (req, res) => {
//   const { id } = req.params; //getting the id property from the route paramaters property
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     // what this means is that if the id that we've got is not valid, return a response...
//     return res.status(404).json({ error: "No such blog" });
//   }

//   const blog = await Blog.findOneAndDelete({ _id: id });

//   if (!blog) {
//     return res.status(400).json({ error: "No such blog" });
//   }
//   res.status(200).json(blog);
// };

// // Update a blog
// const updateBlog = async (req, res) => {
//   const { id } = req.params; //getting the id property from the route paramaters property
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     // what this means is that if the id that we've got is not valid, return a response...
//     return res.status(404).json({ error: "No such blog" });
//   }

//   const blog = await Blog.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );

//   if (!blog) {
//     return res.status(400).json({ error: "No such blog" });
//   }
//   res.status(200).json(blog);
// };

// module.exports = {
//   getBlogs,
//   getBlog,
//   createBlog,
//   deleteBlog,
//   updateBlog,
// };
