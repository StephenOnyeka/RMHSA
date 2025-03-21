require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogs");
const notificationRoutes = require("./routes/notifications");
const subscriptionRoutes = require("./routes/subscriptions");
const adminRoutes = require("./routes/admin");

// const { sendTransacEmail } = require("@sendinblue/client");


// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));


//middleware for blogs
app.use(express.json()); //What this does is any request that comes in, it looks if it has some body to the request, so some data that we're sending to the server and if it does, then it passes it and attaches it to the request object so we can access it in the request handler
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes for the blogs
app.use("/api/blogs", blogRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/admin", adminRoutes);


mongoose
  // .connect(process.env.MONGO_URI)
  .connect(MONGO_URI)
  .then(() => {
    console.log("db has connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

// Configure Nodemailer transporter
const Transport = require("nodemailer-brevo-transport");
const transporter = nodemailer.createTransport(
  new Transport({
    apiKey: process.env.BREVO_API,
  })
);

// Function to generate the email output
const output = (req) => `
  <p>You have a new message from your school website</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: <b>${req.body.name}</b></li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: <b>${req.body.subject}</b></li>
    <li>Message: ${req.body.message}</li>
  </ul>`;
// Route to handle form submissions
app.post("/submitContact", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"School Mailer" <rosamysticahsa@gmail.com>',
      to: "rosamysticahsa@gmail.com , paulczie77@gmail.com",
      subject: "Message from the contact form",
      text: "Hello world?", // Plain text version
      html: output(req), // Generate HTML content from the output function
    });
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("Error response:", error.response.body);
    }
    res.status(500).json({ success: false, error: "Error sending email." });
  }

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







// require("dotenv").config();

// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// const PORT = process.env.PORT;
// const mongoose = require("mongoose");
// const blogRoutes = require("./routes/blogs");
// const subscriptionRoutes = require("./routes/subscriptions");
// // const { sendTransacEmail } = require("@sendinblue/client");


// // Middleware
// app.use(cors());
// app.use(bodyParser.json({ limit: "100mb" }));
// app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
// app.use("/", (req, res) => {
//   res.send("Server is running successfully");
// });

// //middleware for blogs
// app.use(express.json()); //What this does is any request that comes in, it looks if it has some body to the request, so some data that we're sending to the server and if it does, then it passes it and attaches it to the request object so we can access it in the request handler
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// //routes fot the blogs
// app.use("/api/blogs", blogRoutes);
// // app.use("/api/blogs/:id", blogRoutes);
// app.use("/api/subscriptions", subscriptionRoutes);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("db has connected successfully");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Configure Nodemailer transporter
// const Transport = require("nodemailer-brevo-transport");
// const transporter = nodemailer.createTransport(
//   new Transport({
//     apiKey: process.env.BREVO_API,
//   })
// );

// // Function to generate the email output
// const output = (req) => `
//   <p>You have a new message from your school website</p>
//   <h3>Contact Details</h3>
//   <ul>
//     <li>Name: <b>${req.body.name}</b></li>
//     <li>Email: ${req.body.email}</li>
//     <li>Subject: <b>${req.body.subject}</b></li>
//     <li>Message: ${req.body.message}</li>
//   </ul>`;
// // Route to handle form submissions
// app.post("/submitContact", async (req, res) => {
//   try {
//     const info = await transporter.sendMail({
//       from: '"School Mailer" <rosamysticahsa@gmail.com>',
//       to: "rosamysticahsa@gmail.com , paulczie77@gmail.com",
//       subject: "Message from the contact form",
//       text: "Hello world?", // Plain text version
//       html: output(req), // Generate HTML content from the output function
//     });
//     console.log("Message sent: %s", info.messageId);
//     res.status(200).json({
//       success: true,
//       message: "Contact form submitted successfully!",
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     if (error.response) {
//       console.error("Error response:", error.response.body);
//     }
//     res.status(500).json({ success: false, error: "Error sending email." });
//   }

// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });