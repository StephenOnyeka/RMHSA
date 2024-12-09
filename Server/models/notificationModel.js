const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    // titleImg: {
    //   type: String,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    body: {
      type: String, //Allows any kind of data
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
