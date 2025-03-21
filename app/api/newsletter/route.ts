import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

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
    console.log('Newsletter subscription API called');
    const { email, firstName, lastName } = await request.json();
    console.log('Received subscription data:', { email, firstName, lastName });

    if (!email) {
      console.log('Validation failed: Email is required');
      return NextResponse.json(
        { error: 'Email is required' },
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
    console.log('Audience ID:', AUDIENCE_ID ? AUDIENCE_ID : 'Missing');
    
    try {
      console.log('Attempting to create contact via Resend');
      const contactParams = {
        email,
        firstName: firstName || '',
        lastName: lastName || '',
        unsubscribed: false,
        audienceId: AUDIENCE_ID,
      };
      console.log('Contact params:', JSON.stringify(contactParams, null, 2));
      
      const { data, error } = await resend.contacts.create(contactParams);
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

      console.log('Contact created successfully');
      return NextResponse.json(
        { success: true, data },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    } catch (createError) {
      console.error('Error during Resend API call:', createError);
      return NextResponse.json(
        { error: 'Failed to subscribe via Resend', details: createError instanceof Error ? createError.message : String(createError) },
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
    console.error('Unhandled error in newsletter API:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter', details: error instanceof Error ? error.message : String(error) },
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