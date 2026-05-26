'use client';

import Image from 'next/image';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useCallback, useEffect, useState } from 'react';

const SLIDES = [
  {
    src: '/images/Home/Whoweare.png',
    alt: 'RAMP project — team',
  },
  {
    src: '/images/Home/Weare.png',
    alt: 'RAMP project — community',
  },
  {
    src: '/images/Home/Cloths.png',
    alt: 'RAMP project — apparel',
  },
];

const DESCRIPTION =
  'From structured training sessions to real-world urban exploration, we focus on building strength, control, agility,';

export default function ProjectsHeroCarousel() {
  const [active, setActive] = useState(0);
  const count = SLIDES.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="relative min-h-[min(85vh,820px)] w-full md:min-h-[min(88vh,900px)]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === active ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
              aria-hidden
            />
          </div>
        ))}

        <div className="relative z-20 flex h-full min-h-[inherit] flex-col justify-end px-5 pb-8 pt-24 sm:px-8 sm:pb-10 md:px-10 md:pb-12 lg:px-14">
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="max-w-xl">
              <h2
                id="projects-heading"
                className="font-[var(--font-bebas)] text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Our projects
              </h2>
              <p className="description mt-4 text-white/90 md:mt-5">{DESCRIPTION}</p>
            </div>

            <div className="flex flex-row items-center justify-end gap-3 md:gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-sm text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 sm:h-14 sm:w-14"
                aria-label="Previous slide"
              >
                <GrPrevious className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-12 w-12 items-center justify-center rounded-sm text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 sm:h-14 sm:w-14"
                aria-label="Next slide"
              >
                <GrNext className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden />
              </button>
            </div>
          </div>

          <div
            className="mt-10 flex justify-center gap-2 md:mt-12"
            role="tablist"
            aria-label="Slide indicators"
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-10 bg-neutral-300 sm:w-12'
                    : 'w-5 bg-neutral-600 sm:w-6'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
