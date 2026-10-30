import Image from "next/image";
import AutoPlayVideo from "./Components/AutoPlayVideo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      {/* Video - fixed behind, autoplays when user scrolls */}
      <AutoPlayVideo />

      {/* Hero - scrolls with page, video reveals behind as user scrolls */}
      <section className="relative min-h-screen z-10">
        <div className="absolute inset-0">
          <Image
            src="/Images/Hero/Hero.JPG"
            alt="Parkour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Film grain - only over hero */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <nav className="relative px-6 md:px-12 py-6 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/Images/LOGO.png"
              alt="RAMP Logo"
              width={80}
              height={80}
              className="object-contain h-20 w-auto"
              priority
            />
            {/* <span className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-[0.2em]">RAMP</span> */}
          </a>
        </nav>

        <main className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 text-center">
        <p className="font-[var(--font-bebas)] text-sm md:text-base tracking-[0.4em] text-white/70 mb-4 uppercase">
          Street Parkour
        </p>
        <h1 className="font-[var(--font-bebas)] text-[clamp(3rem,12vw,8rem)] leading-[0.95] tracking-tight">
          COMING SOON
        </h1>
        <p className="mt-6 text-white/60 text-base md:text-lg max-w-md">
          Something raw is dropping. Stay tuned.
        </p>
        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
            Scroll for more
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </main>
      </section>

      {/* Spacer - enables scroll; video (fixed, z-0) shows through */}
      <div className="relative -z-10 min-h-screen" aria-hidden />
    </div>
  );
}
