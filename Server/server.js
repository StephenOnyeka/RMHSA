const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  </ul>
`;

// Route to handle form submissions
app.post("/submitContact", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"School Mailer" <ejeanobionyeka@gmail.com>', // Replace with your email
      to: "donmizzy.steve@gmail.com",
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
    res.status(500).json({ success: false, error: "Error sending email." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
