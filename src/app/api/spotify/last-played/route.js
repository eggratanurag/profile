// app/api/spotify/last-played/route.js
import { NextResponse } from 'next/server';

export async function GET() {
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

    if (!authResponse.ok) {
      const authError = await authResponse.json();
      console.error('Auth error:', authError);
      throw new Error('Failed to refresh access token');
    }

    const authData = await authResponse.json();
    const { access_token } = authData;

    if (!access_token) {
      throw new Error('No access token received');
    }

    // 2. Try to fetch recently played tracks (last 1 track)
    let response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });

    // If recently-played fails, try currently playing as fallback
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      console.error('Recently played API error:', response.status, errorData);
      
      // Try currently playing as fallback
      const currentlyPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });

      if (currentlyPlayingResponse.ok) {
        const currentlyPlayingData = await currentlyPlayingResponse.json();
        if (currentlyPlayingData && currentlyPlayingData.item) {
          // Format it to match the recently-played structure
          return NextResponse.json({
            track: currentlyPlayingData.item,
            played_at: new Date().toISOString()
          });
        }
      }

      // If 204 (No Content) or 404, return null
      if (response.status === 204 || response.status === 404) {
        return NextResponse.json(null);
      }

      // If it's a scope/permission error, return null gracefully
      if (response.status === 403 || response.status === 401) {
        console.warn('Missing scope for recently-played endpoint. Need: user-read-recently-played');
        return NextResponse.json(null);
      }
      
      throw new Error(`Spotify API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    // Check if we have items
    if (!data.items || data.items.length === 0) {
      return NextResponse.json(null);
    }

    return NextResponse.json(data.items[0]);
    
  } catch (error) {
    console.error('Error fetching last played song:', error);
    return NextResponse.json(
      { error: 'Failed to fetch last played song', details: error.message },
      { status: 500 }
    );
  }
}
