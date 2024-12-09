const Notification = require("../models/notificationModel");
const Subscriber = require("../models/subscribeModel");
const mongoose = require("mongoose");
const { sendEmailNotification } = require("../notificationService");


const getNotifications = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Current page number
  const limit = parseInt(req.query.limit) || 5; // Number of notifications per page
  const skip = (page - 1) * limit; // Calculate how many documents to skip

  try {
    // Fetch notifications with pagination
    const notifications = await Notification.find({})
      .sort({ createdAt: -1 }) // Sort by creation date
      .skip(skip) // Skip the previous pages
      .limit(limit); // Limit the number of notifications returned

    // Get the total count of notifications
    const totalPosts = await Notification.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalPosts / limit);

    // Send response
    res.status(200).json({
      notifications, // The current page of notifications
      totalPosts, // Total number of notifications
      totalPages, // Total number of pages
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single notification
const getNotification = async (req, res) => {
  const { id } = req.params; //getting the id property from the route paramaters property
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // what this means is that if the id that we've got is not valid, return a response...
    return res.status(404).json({ error: "No such notification" });
  }

  const notification = await Notification.findById(id);

  if (!notification) {
    return res.status(400).json({ error: "No such notification" });
  }
  res.status(200).json(notification);
};

// create a new notification
const createNotification = async (req, res) => {
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
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //add doc to db
  try {
    const notification = await Notification.create({ title, desc, body });

    // Fetch subscribers' emails
    const subscribers = await Subscriber.find({}).select("email"); // Assuming your Subscriber model has an email field
    const subscriberEmails = subscribers.map((sub) => sub.email);

    // Send email notification
    await sendEmailNotification(subscriberEmails, notification);

    res.status(200).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a  notification
const deleteNotification = async (req, res) => {
  const { id } = req.params; //getting the id property from the route paramaters property
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // what this means is that if the id that we've got is not valid, return a response...
    return res.status(404).json({ error: "No such notification" });
  }

  const notification = await Notification.findOneAndDelete({ _id: id });

  if (!notification) {
    return res.status(400).json({ error: "No such notification" });
  }
  res.status(200).json(notification);
};

// Update a Notification
const updateNotification = async (req, res) => {
  const { id } = req.params; //getting the id property from the route paramaters property
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // what this means is that if the id that we've got is not valid, return a response...
    return res.status(404).json({ error: "No such notification" });
  }

  const notification = await Notification.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!notification) {
    return res.status(400).json({ error: "No such notification" });
  }
  res.status(200).json(notification);
};

module.exports = {
  getNotifications,
  getNotification,
  createNotification,
  deleteNotification,
  updateNotification,
};
