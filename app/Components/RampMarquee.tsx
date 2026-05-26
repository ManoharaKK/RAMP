'use client';

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from 'react';

const PHRASE = 'Ramp Parkour';
const SEP = '  •  ';
const MIN_COPIES = 16;
const MAX_COPIES = 96;
const STEP = 2;
const FILL_RATIO = 1.02;

function MarqueeSegment({
  copies,
  suffix,
  segmentRef,
}: {
  copies: number;
  suffix: string;
  segmentRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={segmentRef} className="flex shrink-0 flex-nowrap">
      {Array.from({ length: copies }, (_, i) => (
        <span
          key={`${suffix}-${i}`}
          className="inline-block shrink-0 px-1.5 text-[11px] font-bold leading-none tracking-wide text-black sm:px-2 sm:text-xs md:text-sm"
        >
          {PHRASE}
          <span className="text-black/40">{SEP}</span>
        </span>
      ))}
    </div>
  );
}

export default function RampMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(MIN_COPIES);

  const measure = useCallback(() => {
    const c = containerRef.current;
    const s = segmentRef.current;
    if (!c || !s) return;
    const cw = c.offsetWidth;
    if (cw === 0) return;
    const sw = s.getBoundingClientRect().width;
    if (sw < cw * FILL_RATIO && copies < MAX_COPIES) {
      setCopies((n) => Math.min(n + STEP, MAX_COPIES));
    }
  }, [copies]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useLayoutEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(c);
    return () => ro.disconnect();
  }, [measure]);

  useLayoutEffect(() => {
    let cancelled = false;
    void document.fonts?.ready?.then(() => {
      if (!cancelled) measure();
    });
    return () => {
      cancelled = true;
    };
  }, [measure]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden border-y border-black/10 bg-white py-2 md:py-2.5"
    >
      <h2 className="sr-only">Ramp Parkour</h2>
      <div
        className="power-tain-marquee-track flex w-max flex-nowrap will-change-transform"
        aria-hidden
      >
        <MarqueeSegment copies={copies} suffix="a" segmentRef={segmentRef} />
        <MarqueeSegment copies={copies} suffix="b" />
      </div>
    </div>
  );
}
