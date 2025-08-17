import { signIn } from 'next-auth/react';

export default function GetRefreshToken() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button 
        onClick={() => signIn('spotify')}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Sign in to Spotify
      </button>
    </div>
  );
}