const app = require("express");
const express = require("express");
const router = express.Router(); //this creates an instance of a router
const {
  getNotifications,
  getNotification,
  createNotification,
  deleteNotification,
  updateNotification,
} = require("../controllers/notificationController");
const { get } = require("mongoose");

//GET all Notifications and a subscription
router.get("/", getNotifications);
// router.get("/", getNotifications, getSubscriptions);

//GET a single Notification
router.get("/:id", getNotification);

// POST a new Notification and a subscription
router.post("/", createNotification);
// router.post("/", createNotification, createSubscription);

//DELETE a Notification
router.delete("/:id", deleteNotification);

//UPDATE a Notification
router.patch("/:id", updateNotification);

module.exports = router;
