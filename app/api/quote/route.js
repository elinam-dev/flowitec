import { NextResponse } from 'next/server';
import { sendEmail, getContactEmailTemplate } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

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
      message
    };

    // Send email using the email utility
    const emailResult = await sendEmail({
      to: 'info@flowitec.com',
      subject: `New Quote Request from ${name}`,
      html: getContactEmailTemplate(emailData),
      formType: 'quote'
    });

    if (emailResult.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your quote request. We will contact you soon.' 
      });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json({ 
      error: 'Failed to send quote request. Please try again.' 
    }, { status: 500 });
  }
}