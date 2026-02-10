import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message,  } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER, // Gmail email address
        pass: process.env.GMAIL_PASS, // Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "zoyakou2@gmail.com", // Add your recipient email here
      subject: "Zoya Kou | Full Stack Digital Manager & Tech-Savvy Virtual Assistant",
      html: `
        <h2>Let's Discuss Idea</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error in sending email", error }, { status: 500 });
  }
}
