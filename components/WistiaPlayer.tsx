"use client";

import { useEffect } from 'react';
import Script from 'next/script';

interface WistiaPlayerProps {
  videoId: string;
}

export default function WistiaPlayer({ videoId }: WistiaPlayerProps) {
  useEffect(() => {
    // Initialize Wistia player when the component mounts
    const script = document.createElement('script');
    script.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup scripts when component unmounts
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, [videoId]);

  return (
    <div className="relative w-full aspect-video">
      <div className={`wistia_responsive_padding`} style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <div className={`wistia_responsive_wrapper`} style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
          <div className={`wistia_embed wistia_async_${videoId} videoFoam=true`} style={{ height: '100%', position: 'relative', width: '100%' }}>
            <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
              <img src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`} style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}