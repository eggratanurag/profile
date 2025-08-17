'use client';

import { useEffect, useState } from 'react';

export default function LikedSongs() {
  const [likedSongs, setLikedSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const res = await fetch('/api/spotify/liked-songs');
        if (!res.ok) {
          throw new Error('Failed to fetch liked songs');
        }
        const data = await res.json();
        setLikedSongs(data.items || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSongs();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading your liked songs...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">My Liked Songs on Spotify</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {likedSongs.slice(0, 12).map((item, index) => (
          <a
            key={index}
            href={item.track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <img
              src={item.track.album.images[0]?.url}
              alt={item.track.album.name}
              className="w-16 h-16 rounded mr-3"
            />
            <div className="overflow-hidden">
              <h3 className="font-medium truncate">{item.track.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {item.track.artists.map(artist => artist.name).join(', ')}
              </p>
              <p className="text-xs text-gray-500 truncate">{item.track.album.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
