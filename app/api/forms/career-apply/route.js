import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { saveSubmission } from '@/lib/db';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const coverLetter = formData.get('coverLetter');
    const cv = formData.get('cv');

    // Validate required fields
    if (!name || !email || !position) {
      return NextResponse.json({ 
        error: 'Name, email, and position are required.' 
      }, { status: 400 });
    }

    // Prepare submission data
    const submissionData = {
      name,
      email,
      phone,
      position,
      coverLetter
    };

    // Save submission to database
    const cvFileName = cv ? `${Date.now()}-${cv.name}` : null;
    const attachments = [];
    
    if (cv) {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cvFileName,
        content: buffer.toString('base64'),
        encoding: 'base64'
      });
    }

    try {
      await saveSubmission('career', submissionData, attachments);
    } catch (dbError) {
      console.warn('Failed to save submission to database:', dbError.message);
    }

    // Send email notification
    const emailTemplate = `
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
            <h2>New Job Application</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${name}
            </div>
            <div class="field">
              <span class="label">Email:</span> ${email}
            </div>
            <div class="field">
              <span class="label">Phone:</span> ${phone || 'N/A'}
            </div>
            <div class="field">
              <span class="label">Position:</span> ${position}
            </div>
            <div class="field">
              <span class="label">Cover Letter:</span>
              <p>${coverLetter ? coverLetter.replace(/\n/g, '<br>') : 'N/A'}</p>
            </div>
            ${cv ? `<div class="field"><span class="label">CV Attached:</span> ${cvFileName}</div>` : ''}
          </div>
        </div>
      </body>
      </html>
    `;

    const mailAttachments = [];
    if (cv) {
      mailAttachments.push({
        filename: cvFileName,
        content: Buffer.from(await cv.arrayBuffer())
      });
    }

    await sendEmail({
      to: 'info@flowitec.com',
      subject: `New Job Application from ${name} - ${position}`,
      html: emailTemplate,
      attachments: mailAttachments,
      formType: 'career'
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully! We will review your application and contact you soon.' 
    });
  } catch (error) {
    console.error('Career application error:', error);
    return NextResponse.json({ 
      error: 'Failed to submit application. Please try again.' 
    }, { status: 500 });
  }
}
