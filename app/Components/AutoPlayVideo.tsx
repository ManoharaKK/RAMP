'use client';

import Button from './button/Button';
import RampMarquee from './RampMarquee';

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

      {/* Mobile: full viewport height, 16:9 cover (crop). Desktop: container + letterboxed 16:9 */}
      <div className="absolute inset-0 z-1 overflow-hidden bg-black lg:flex lg:items-center lg:justify-center">
        <div className="relative h-full min-h-dvh w-full overflow-hidden bg-black lg:container-global lg:min-h-0 lg:h-auto lg:w-full">
          <div className="relative h-full w-full overflow-hidden bg-black lg:aspect-video lg:h-auto">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1`}
              title="Parkour video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="pointer-events-none absolute border-0 max-lg:left-1/2 max-lg:top-1/2 max-lg:h-[56.25vw] max-lg:min-h-full max-lg:w-screen max-lg:min-w-[177.77vh] max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 lg:inset-0 lg:h-full lg:w-full lg:min-h-0 lg:min-w-0 lg:translate-x-0 lg:translate-y-0"
            />
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
