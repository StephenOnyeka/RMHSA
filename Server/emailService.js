// This email service is designed to notify subscribers when a new blog is posted.

// emailService.js
const nodemailer = require("nodemailer");
const Transport = require("nodemailer-brevo-transport");

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport(
  new Transport({
    apiKey: process.env.BREVO_API,
  })
);

// Function to generate the email output
const sendEmailNotification = async (subscribers, blog) => {
  const mailOptions = {
    from: '"Rosa Mystica Blogs" <rosamysticahsa@gmail.com>', // Sender address
    to: subscribers.join(","), // List of subscribers
    subject: `New Blog Post: ${blog.title}`, // Subject line
    text: `A new blog post has been published!\n\nTitle: ${blog.title}\nDescription: ${blog.desc}\nRead more: http://localhost:3000/blogs/${blog._id}`,
    text: `Hello`,
    html: `<p>A new blog post has been published!</p><p><strong>Title:</strong> ${blog.title}</p><p><strong>Description:</strong> ${blog.desc}</p><p><a href="http://localhost:3000/blogs/${blog._id}">Read more</a></p>`, // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendEmailNotification };
