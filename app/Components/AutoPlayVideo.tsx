'use client';

import { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';

const YOUTUBE_VIDEO_ID = 'TnFWNk9rw40';

export default function AutoPlayVideo() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Street vibe background (visible behind iframe until YouTube paints) */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute inset-0 opacity-[0.02] overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] -rotate-12" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 80px, #fff 80px, #fff 81px)`,
          }} />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {shouldPlay && (
        <>
          <p className="relative font-[var(--font-bebas)] text-xs md:text-base tracking-[0.2em] md:tracking-[0.4em] text-white/60 uppercase z-10 text-center max-w-full">
            Run. Jump. Own the street.
          </p>
          <div className="relative w-full max-w-4xl aspect-video shrink-0 z-10">
            <div className="w-full h-full bg-black border-4 border-white rounded-xl shadow-lg">
              <YouTube
                videoId={YOUTUBE_VIDEO_ID}
                className="w-full h-full rounded-xl"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                    rel: 0,
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    loop: 1,
                    playlist: YOUTUBE_VIDEO_ID,
                  },
                }}
                onEnd={(e) => e.target.playVideo()}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-2 bg-black/40"
        aria-hidden
      />
      {/* Centered block, bottom of viewport; tagline sits on bottom line */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end pt-28  sm:pt-32 ">
        <div className="container-global pointer-events-auto flex w-full max-w-3xl flex-col items-center gap-6 mb-10">
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              variant="primary"
              size="medium"
              type="button"
              color="primary"
              text="Click me"
              loading={false}
              disabled={false}
              onClick={() => {}}
            >
              Shop Now
            </Button>
            {/* <Button
              variant="secondary"
              size="medium"
              type="button"
              color="secondary"
              text="Click me"
              loading={false}
              disabled={false}
              onClick={() => {}}
            >
              Shop Now
            </Button> */}
          </div>
          <p className="text-subtitle tracking-[0.3em]">
            Run and Jump with the best shoes for parkour
          </p>
        </div>
        <RampMarquee />
      </div>
    </div>
  );
}
