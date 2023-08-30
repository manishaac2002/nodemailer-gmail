const nodemailer = require('nodemailer')
require("dotenv").config()

//create a reusable transporter for default smtp transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,//PORT Number for smtp 
    secure: false,//make it true for other ort numbers
    auth: {
        user: process.env.USER,//sender gmail address
        pass: process.env.APP_PASSWORD,//app password from Gmail account
    },
});

const mailOptions = {
    from: {
        name: "atre Team ",
        address: process.env.USER
    }, // sender address
    to: ["manisha.jsdev@gmail.com"], // list of receivers
    subject: "Send email from nodemailer ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
        console.log("Email has been sent successfully");
    } catch (error) {
        console.error(error);
    }
}
sendMail(transporter, mailOptions)



