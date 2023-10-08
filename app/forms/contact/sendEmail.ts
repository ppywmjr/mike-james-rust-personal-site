import nodemailer from "nodemailer";
import { FormSchemaType } from "./schema";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_FROM_PASSWORD,
  },
});

const environment = process.env.NEXT_PUBLIC_VERCEL_ENV;

const sendMail: (emailDetails: FormSchemaType) => void = async function (
  emailDetails: FormSchemaType
) {
  const now = new Date();
  const dateTimeStamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

  const mailOptions = {
    from: { address: process.env.EMAIL_FROM, name: "Mike James Rust" },
    to: process.env.EMAIL_TO,
    subject: "mikejamesrust.com Contact Form",
    text: `mikejamesrust.com : the following details were sent in a contact form
    email: ${emailDetails.email ?? "Not provided"}
    message: ${emailDetails.message ?? "Not provided"}
    on environment: ${environment}
    at ${dateTimeStamp}`,
  };

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info);
      }
    });
  });
};

export default sendMail;
