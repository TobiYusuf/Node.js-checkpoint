// email-sender.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com",
  subject: "Sending Email using Node.js",
  text: "This is a test email!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
