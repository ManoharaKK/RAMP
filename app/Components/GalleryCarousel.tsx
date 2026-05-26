'use client';

import Image from 'next/image';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = [
  { src: '/images/Home/Whoweare.png', alt: 'RAMP parkour team' },
  { src: '/images/Home/Weare.png', alt: 'RAMP community' },
  { src: '/images/Home/Cloths.png', alt: 'RAMP clothing' },
  { src: '/images/Home/Whoweare.png', alt: 'RAMP parkour team' },
  { src: '/images/Home/Weare.png', alt: 'RAMP community' },
  { src: '/images/Home/Cloths.png', alt: 'RAMP clothing' },
  { src: '/images/Home/Whoweare.png', alt: 'RAMP parkour team' },
  { src: '/images/Home/Weare.png', alt: 'RAMP community' },
];

export default function GalleryCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setProgress(0);
      return;
    }
    setProgress(el.scrollLeft / max);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener('scroll', updateProgress, { passive: true });
    const ro = new ResizeObserver(updateProgress);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateProgress);
      ro.disconnect();
    };
  }, [updateProgress]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>('[data-carousel-slide]');
    const next = slide?.nextElementSibling as HTMLElement | null;
    const gap =
      next && slide
        ? Math.max(0, next.offsetLeft - slide.offsetLeft - slide.offsetWidth)
        : 12;
    const fallback =
      el.clientWidth < 768 ? el.clientWidth / 1.5 : el.clientWidth / 4;
    const delta = slide?.offsetWidth ? slide.offsetWidth + gap : fallback;
    el.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  const arrowNav = (
    <div className="flex flex-row items-center gap-2">
      <button
        type="button"
        onClick={() => scrollByDir(-1)}
        className="flex h-12 w-12 items-center justify-center rounded-sm text-black transition-colors outline-none hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/20 sm:h-14 sm:w-14"
        aria-label="Previous images"
      >
        <GrPrevious className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => scrollByDir(1)}
        className="flex h-12 w-12 items-center justify-center rounded-sm text-black transition-colors outline-none hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/20 sm:h-14 sm:w-14"
        aria-label="Next images"
      >
        <GrNext className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden />
      </button>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        {/* Desktop / tablet: arrows on the left */}
        <div className="hidden shrink-0 md:flex md:flex-row md:items-center">{arrowNav}</div>

        {/* Scroll strip + mobile arrows on bottom line */}
        <div className="min-w-0 w-full flex-1">
          <div
            ref={scrollerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery"
            className="scrollbar-hide flex w-full min-w-0 flex-nowrap gap-3 overflow-x-auto pb-1 pt-0.5 snap-x snap-mandatory md:gap-4"
          >
            {SLIDES.map((slide, i) => (
              <div
                key={`${slide.src}-${i}`}
                data-carousel-slide
                className="group relative h-[260px] min-w-0 shrink-0 snap-start overflow-hidden rounded-sm basis-[calc((100%-0.75rem)/1.5)] md:h-[300px] md:basis-[calc((100%-3rem)/4)] lg:h-[360px] xl:h-[380px]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 767px) 70vw, 22vw"
                  className="object-cover grayscale transition-[filter] duration-300 ease-out group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Mobile: arrows on bottom line under the strip */}
          <div className="mt-4 flex justify-center md:hidden">{arrowNav}</div>

          {/* Progress + Show all */}
          <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex flex-1 justify-center">
              <div
                className="relative h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-neutral-300 sm:max-w-[240px]"
                aria-hidden
              >
                <div
                  className="absolute top-0 h-full w-1/3 rounded-full bg-neutral-600 transition-[left] duration-150 ease-out"
                  style={{ left: `${progress * (200 / 3)}%` }}
                />
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 self-end bg-black px-8 py-3 text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90 sm:self-auto"
            >
              Show all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
