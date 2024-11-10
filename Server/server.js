// var express = require("express");
// var bodyParser = require("body-parser");
// var app = express();

// const contactUsPage = require("./pages/contactUs")

// var nodemailer = require("nodemailer");

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get("/contactUs", function (req, res) {
//   res.send(contactUsPage);
// }); //getting the contact page

// app.post("/submitContact", urlencodedParser, function (req, res) {
//     const output = `
//     <p> You have a new message from your school website </p>
//     <h3> Contact Details </h3>
//     <ul>
//     <li>Name:${req.body.name} </li><br />
//     <li>Email:${req.body.email}</li><br />
//     <li>Subject:${req.body.subject}</li><br />
//     <li>Message:${req.body.message}</li>
//     </ul>
//     `;

//     const Transport = require("nodemailer-brevo-transport");
//     const transporter = nodemailer.createTransport(
//         new Transport({
//             apiKey:
//                 "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 ",
//         })
// );

//   // async..await is not allowed in global scope, must use a wrapper
//   async function main() {
//     try {
//       const info = await transporter.sendMail({
//         from: '"Nodemailer Contact-App" <ejeanobionyeka@gmail.com>',
//         to: "donmizzy.steve@gmail.com, ejeanobionyeka@gmail.com",
//         subject: "School Website Contact-App Message",
//         text: "Hello world?",
//         html: output,
//       });
//       console.log("Message sent: %s", info.messageId);
//       res.sendFile(__dirname + "/contactSuccess.js", { data: req.body });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res.sendFile(__dirname + "/pages/contactUs.js"); // Optionally, you can send back the contact form
//     }
//   }
//   main().catch(console.error);
// });

// app.listen(3100);
// console.log("Listening to port 3100");

// server.js
// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer transporter
const Transport = require("nodemailer-brevo-transport");
const transporter = nodemailer.createTransport(
  new Transport({
    apiKey:
      "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 ",
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
