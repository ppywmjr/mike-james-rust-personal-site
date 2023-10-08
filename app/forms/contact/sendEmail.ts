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

const sendMail: (emailDetails: FormSchemaType) => Promise<any> = (
  emailDetails: FormSchemaType
) => {
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
  const verify = () => {
    return new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is");
          resolve(success);
        }
      });
    });
  };

  const promise = new Promise((resolve, reject) => {
    verify()
      .then(() => {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(`Email send error: ${error}`);
            reject(`Email could not be sent: ${error}`);
          } else {
            resolve(info);
          }
        });
      })
      .catch((error) => {
        console.log(`Email connection error: ${error}`);
        reject(`Connection could not be made: ${error}`);
      });
  });
  return promise;
};

export default sendMail;
