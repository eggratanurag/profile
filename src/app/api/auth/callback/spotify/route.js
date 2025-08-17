// app/api/spotify/route.js
export async function GET() {
  // 1. Get fresh access token using refresh token
  const authResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_SPOTIFY_CLIENT_ID}:${process.env.NEXT_SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
    })
  });

  const { access_token } = await authResponse.json();

  // 2. Fetch liked songs
  const tracks = await fetch("https://api.spotify.com/v1/me/tracks?limit=10", {
    headers: { Authorization: `Bearer ${access_token}` }
  });

  return Response.json(await tracks.json());
}