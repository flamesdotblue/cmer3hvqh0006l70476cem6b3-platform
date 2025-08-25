"use client";

import { ASSET_URL } from '@/lib/constants';
import { useEffect, useState } from 'react';

export default function Background() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = ASSET_URL;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Blurred asset backdrop to tint the whole UI */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${ASSET_URL})`,
          filter: 'blur(40px) saturate(1.15) brightness(1.05)',
          transform: 'scale(1.05)',
        }}
      />
      {/* Soft color overlay to unify tones and improve contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 10% 10%, rgba(255,255,255,0.35), rgba(255,255,255,0) 60%),\\\n             radial-gradient(1200px 800px at 90% 0%, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%)',
        }}
      />
      {/* Vignette for focus */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(80% 80% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.12) 100%)'
      }} />
    </div>
  );
}
