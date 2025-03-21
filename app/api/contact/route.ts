import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  try {
    console.log('Contact form API called');
    const { name, email, message } = await request.json();
    console.log('Received form data:', { name, email, message });

    if (!name || !email || !message) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }

    console.log('API Key:', process.env.RESEND_API_KEY ? 'Found' : 'Missing');
    
    try {
      console.log('Attempting to send email via Resend');
      const fromEmail = process.env.RESEND_FROM_EMAIL || 'contact@disequi.com';
      const toEmail = process.env.RESEND_TO_EMAIL || 'resend@disequi.com';
      
      console.log('Using from email:', fromEmail);
      console.log('Using to email:', toEmail);
      
      const emailParams = {
        from: fromEmail,
        to: [toEmail],  // In test mode, must send to the email associated with the account
        reply_to: email,  // Set reply-to as the form submitter's email
        subject: '[CONTACT FORM] New message from ' + name,
        html: `
          <div>
            <h1>New Contact Message</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="white-space: pre-wrap">${message}</div>
          </div>
        `,
        text: `New Contact Message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      };
      console.log('Email params:', JSON.stringify(emailParams, null, 2).replace(/(from|to|subject)/, '$1'));
      
      const { data, error } = await resend.emails.send(emailParams);
      console.log('Resend response:', { data, error });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error }, 
          { 
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          }
        );
      }

      console.log('Email sent successfully');
      return NextResponse.json(
        { success: true, data },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    } catch (sendError) {
      console.error('Error during Resend API call:', sendError);
      return NextResponse.json(
        { error: 'Failed to send email via Resend', details: sendError instanceof Error ? sendError.message : String(sendError) },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }
  } catch (error) {
    console.error('Unhandled error in contact API:', error);
    return NextResponse.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : String(error) },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}