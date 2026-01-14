// app/api/spotify/liked-songs/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '10';

  try {
    // 1. Refresh access token
    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.NEXT_SPOTIFY_CLIENT_ID}:${process.env.NEXT_SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.NEXT_SPOTIFY_REFRESH_TOKEN
      })
    });

    const { access_token } = await authResponse.json();

    // 2. Fetch liked songs
    const response = await fetch(`https://api.spotify.com/v1/me/tracks?limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });

    const data = await response.json();
    return NextResponse.json(data.items);
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch liked songs' },
      { status: 500 }
    );
  }
}