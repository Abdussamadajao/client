// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
type Data = {
  name: string;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const {  } = req.body;

//

//
type Fields = {
  name: string;
  email: string;
  about: string;
  phone: string;
  msg: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { name, email, msg, about, phone } = req.body as Fields;

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "abdussamadajao@gmail.com",
      pass: "Akinyemi",
    }
  });

  try {
    const getEmail = await transport.sendMail({
      from: email,
      to: "abdussamadajao@gmail.com",
      subject: `Contact form Submission fro ${name}`,
      html: `<p>You have a new contact form submission</p> <br/>
          <p> <b>Name:</b> ${name}</p>
          <p> <b>Email:</b> ${email}</p>
          <p> <b>Subject:</b> ${about}</p>
          <p> <b>Phone:</b> ${phone}</p>
          <p> <b>Message:</b> ${msg}</p>
          `,
    });

    console.log("Message Sent", getEmail.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
};

export default handler;
