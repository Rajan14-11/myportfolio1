import { createTransport } from "nodemailer";

export const sendMail = async (userMessage,next) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({to:'rajangoyal710@gmail.com',from:'rajangoyal125@gmail.com',subject:'message to contact the developer',text:userMessage})
  // next();
};
