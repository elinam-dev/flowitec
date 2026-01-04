// Email utility for form notifications
// Email Routing:
// - Get a Quote / Contact: info@flowitec.com
// - Applications Engineer: godwin.asamoah@flowitec.com (phone: 0247986652)
// - Services: service@flowitec.com
// - Careers: hradmin@flowitec.com

import nodemailer from 'nodemailer';

// Email addresses for different form types
export const EMAIL_RECIPIENTS = {
  contact: 'info@flowitec.com',
  quote: 'info@flowitec.com',
  service: 'service@flowitec.com',
  career: 'hradmin@flowitec.com',
  applications: 'godwin.asamoah@flowitec.com'
};

// Applications Engineer contact
export const APPLICATIONS_ENGINEER = {
  name: 'Godwin Asamoah',
  email: 'godwin.asamoah@flowitec.com',
  phone: '0247986652'
};

// Create SMTP transporter
function createTransporter() {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // For self-signed certificates
    }
  });
}

export async function sendEmail({ to, subject, html, attachments = [], formType = 'contact' }) {
  try {
    // Determine recipient based on form type
    const recipient = to || EMAIL_RECIPIENTS[formType] || EMAIL_RECIPIENTS.contact;
    
    // If no SMTP configuration, fall back to console logging
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
      console.log('📧 Email would be sent (No SMTP configured):');
      console.log('To:', recipient);
      console.log('Subject:', subject);
      console.log('HTML:', html);
      console.log('Attachments:', attachments.length);
      
      return {
        success: true,
        message: 'Email logged (No SMTP configured)',
        recipient
      };
    }

    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      subject: subject,
      html: html,
      attachments: attachments
    };

    const result = await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      message: 'Email sent successfully',
      recipient,
      messageId: result.messageId
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: error.message,
      recipient: to
    };
  }
}

export function getContactEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0D47A1; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0D47A1; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Flowitec - Get a Quote Request</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span> ${data.name}
          </div>
          <div class="field">
            <span class="label">Company:</span> ${data.company || 'N/A'}
          </div>
          <div class="field">
            <span class="label">Email:</span> ${data.email}
          </div>
          <div class="field">
            <span class="label">Phone:</span> ${data.phone || 'N/A'}
          </div>
          <div class="field">
            <span class="label">Country:</span> ${data.country || 'N/A'}
          </div>
          <div class="field">
            <span class="label">Interest:</span> ${data.interest || 'General Inquiry'}
          </div>
          <div class="field">
            <span class="label">Message:</span><br>
            ${data.message}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function getServiceRequestEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0D47A1; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0D47A1; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Service Request - ${data.serviceType}</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span> ${data.name}
          </div>
          <div class="field">
            <span class="label">Company:</span> ${data.company}
          </div>
          <div class="field">
            <span class="label">Email:</span> ${data.email}
          </div>
          <div class="field">
            <span class="label">Phone:</span> ${data.phone}
          </div>
          <div class="field">
            <span class="label">Location:</span> ${data.location}
          </div>
          <div class="field">
            <span class="label">Service Type:</span> ${data.serviceType}
          </div>
          <div class="field">
            <span class="label">Message:</span><br>
            ${data.message}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function getCareerApplicationEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0D47A1; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0D47A1; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Job Application - ${data.position}</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span> ${data.name}
          </div>
          <div class="field">
            <span class="label">Email:</span> ${data.email}
          </div>
          <div class="field">
            <span class="label">Phone:</span> ${data.phone}
          </div>
          <div class="field">
            <span class="label">Position:</span> ${data.position}
          </div>
          <div class="field">
            <span class="label">Cover Letter:</span><br>
            ${data.coverLetter || 'N/A'}
          </div>
          <div class="field">
            <span class="label">CV:</span> Attached
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
