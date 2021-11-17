const nodemailer = require("nodemailer");

async function sendEmail(userEmail, spaceUserEmail, userName, message) {
  console.log("space email", spaceUserEmail);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // console.log("transporter", transporter);

  const emailOptions = {
    from: userEmail, // sender address
    to: spaceUserEmail, // list of receivers
    subject: "I need help! Contact request", // Subject line
    html: message, // html body
  };

  try {
    console.log(emailOptions);
    let info = await transporter.sendMail(emailOptions);

    console.log("Message sent: %s", info.messageId);
    return "success";
  } catch (e) {
    console.log(e.message);
  }

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = { sendEmail };
