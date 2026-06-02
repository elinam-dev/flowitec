import { NextResponse } from 'next/server';
import { getSubmissions } from '@/lib/db';

// Simple auth check - you can enhance this with proper authentication
function isAuthorized(request) {
  const authHeader = request.headers.get('authorization');
  const token = process.env.ADMIN_API_TOKEN;
  
  // If no token is set in env, allow access (for development)
  if (!token) {
    console.warn('⚠️ ADMIN_API_TOKEN not set - admin API is open');
    return true;
  }
  
  return authHeader === `Bearer ${token}`;
}

export async function GET(request) {
  // Check authorization
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'contact';
    const limit = parseInt(searchParams.get('limit') || '100', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const submissions = await getSubmissions(type, limit, offset);

    return NextResponse.json({
      success: true,
      data: submissions,
      count: submissions.length
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
