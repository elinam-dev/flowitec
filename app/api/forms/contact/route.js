import { NextResponse } from 'next/server';
import { sendEmail, getContactEmailTemplate } from '@/lib/email';
import { saveSubmission } from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, country, interest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ 
        error: 'Name, email, and message are required.' 
      }, { status: 400 });
    }

    // Prepare email data
    const emailData = {
      name,
      email,
      phone,
      company,
      country,
      interest,
      message
    };

    // Save submission to database
    try {
      await saveSubmission('contact', emailData);
    } catch (dbError) {
      console.warn('Failed to save submission to database:', dbError.message);
      // Don't fail the request if database save fails
    }

    // Send email to info@flowitec.com
    const emailResult = await sendEmail({
      to: 'info@flowitec.com',
      subject: `New Contact Form Submission from ${name}`,
      html: getContactEmailTemplate(emailData),
      formType: 'contact'
    });

    if (emailResult.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your message. We will contact you soon.' 
      });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      error: 'Failed to send message. Please try again.' 
    }, { status: 500 });
  }
}