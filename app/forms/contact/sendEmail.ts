import nodemailer from "nodemailer";
import { FormSchemaType } from "./schema";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_FROM_PASSWORD,
  },
});

const sendMail: (emailDetails: FormSchemaType) => void = function (
  emailDetails: FormSchemaType
) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "Contact Form message",
    text: `The following details were sent in a contact form on 
    mikejamesrust.com
    email: ${emailDetails.email ?? "Not provided"}
    message: ${emailDetails.message ?? "Not provided"}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      // do something useful
    }
  });
};

export default sendMail;