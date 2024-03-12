// app/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API route hit');
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Dynamic import for nodemailer to ensure it's only used on the server side
      const nodemailer = await import('nodemailer');

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "bidigcorp@gmail.com",
          pass: 'Bid1g#2024',
        },
      });

      const mailOptions = {
        from: 'bidigcorp@gmail.com',
        to: `${email}`,
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}


