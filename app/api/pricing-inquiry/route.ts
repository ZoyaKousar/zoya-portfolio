// app/api/pricing-inquiry/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, projectDetails, selectedPlan, price } = await request.json();

        // Validate required fields
        if (!name || !email || !phone || !projectDetails || !selectedPlan) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.GMAIL_USER, // Gmail email address
                pass: process.env.GMAIL_PASS, // Gmail app password
            },
        });

        // Email content
        const mailOptions = {
            from: `"Portfolio Inquiry" <${process.env.GMAIL_USER}>`,
            to: 'zoyakou2@gmail.com',
            subject: `New Project Inquiry - ${selectedPlan} Plan from ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #e0e0e0; }
            .plan-badge { display: inline-block; background: #667eea; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Project Inquiry</h2>
              <p>${selectedPlan} Plan Selected</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Client Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email Address:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value">${phone}</div>
              </div>
              
              <div class="field">
                <div class="label">Selected Plan:</div>
                <div class="value"><span class="plan-badge">${selectedPlan} - $${price}</span></div>
              </div>
              
              <div class="field">
                <div class="label">Project Details:</div>
                <div class="value">${projectDetails.replace(/\n/g, '<br/>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was submitted from your portfolio website.</p>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
        New Project Inquiry - ${selectedPlan} Plan
        
        Client Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Selected Plan: ${selectedPlan} - $${price}
        
        Project Details:
        ${projectDetails}
        
        This inquiry was submitted from your portfolio website.
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Optional: Send auto-reply to client
        const autoReplyOptions = {
            from: `"Zoya Kou" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: 'Thank you for your inquiry - Zoya Kou',
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Your Inquiry!</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out! I've received your inquiry regarding the <strong>${selectedPlan} Plan</strong>.</p>
              <p>I will review your project details and get back to you within <strong>24 hours</strong> to schedule a consultation call.</p>
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Check out my portfolio for similar projects</li>
                <li>Prepare any additional questions you might have</li>
                <li>Book a quick call via my Calendly if you prefer immediate discussion</li>
              </ul>
              <p>Looking forward to working together!</p>
              <p>Best regards,<br/>Zoya Kou</p>
            </div>
            <div class="footer">
              <p>© 2024 Zoya Kou | Mobile App Developer</p>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
        Thank You for Your Inquiry!
        
        Dear ${name},
        
        Thank you for reaching out! I've received your inquiry regarding the ${selectedPlan} Plan.
        
        I will review your project details and get back to you within 24 hours to schedule a consultation call.
        
        Looking forward to working together!
        
        Best regards,
        Zoya Kou
      `,
        };

        await transporter.sendMail(autoReplyOptions);

        return NextResponse.json(
            { message: 'Inquiry sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send inquiry' },
            { status: 500 }
        );
    }
}