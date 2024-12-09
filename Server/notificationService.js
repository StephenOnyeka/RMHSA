// This email service is designed to notify subscribers when a new notification is created.

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
const sendEmailNotification = async (subscribers, notification) => {
  const mailOptions = {
    from: '"Rosa Mystica Notifications" <rosamysticahsa@gmail.com>', // Sender address
    to: subscribers.join(","), // List of subscribers
    subject: `Notification: ${notification.title}`, // Subject line
    text: `A new notification post for parents and guardians has been published!\n\nTitle: ${notification.title}\nDescription: ${notification.desc}\nRead more: http://localhost:3000/notifications/${notification._id}`,
    text: `Hello`,
    html: `<p>A new notification post has been published!</p><p><strong>Title:</strong> ${notification.title}</p><p><strong>Description:</strong> ${notification.desc}</p><p><a href="http://localhost:3000/notifications/${notification._id}">Read more</a></p>`, // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendEmailNotification };
