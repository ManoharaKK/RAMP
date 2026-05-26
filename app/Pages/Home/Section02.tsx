import RampMarquee from "@/app/Components/RampMarquee";
import Image from "next/image";
export default function Section02() {
    return (
        <section
            className="relative z-10 bg-background pt-10 lg:pt-16 text-foreground"
            aria-labelledby="section02-heading"
        >
            <div className="container-global">
                <div className="flex flex-row items-end justify-between">
                    <div>
                        <img
                            src="/icons/WhiteArrow.svg"
                            alt=""
                            width={277}
                            height={280}
                            className="h-10 w-auto rotate-90 object-contain select-none items-end sm:h-16 md:h-18 xl:h-24 mb-4 sm:mb-6 md:mb-3"
                            aria-hidden={true}
                        />
                    </div>
                    <div className="flex flex-col items-end justify-end">
                        <p className="description uppercase">
                            who we are
                        </p>
                        <h2 className="title pl-[40%] text-right">
                            REDEFINING LIMITS THROUGH PARKOUR
                        </h2>
                    </div>
                </div>
                <div className="bg-white/50 h-[1px] w-full my-10"></div>
                <div className="grid items-stretch gap-4 lg:grid-cols-5 xl:gap-10">
                    <div
                        className="group relative min-h-[280px] w-full overflow-hidden outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-white/50 lg:col-span-2 lg:min-h-0 lg:h-full"
                        tabIndex={0}
                    >
                        <Image
                            src="/images/Home/Whoweare.png"
                            alt="Parkour team — who we are"
                            fill
                            sizes="(max-width: 1024px) 100vw, 38vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
                        />
                        <div
                            className="pointer-events-none absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/0 group-focus-within:bg-black/0"
                            aria-hidden
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 sm:p-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
                                Community
                            </h3>
                            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                                Traceurs of every level — training together, sharing spots, and pushing each
                                other to move with confidence.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div>
                            <div className="bg-white/50 h-[1px] w-full my-10"></div>
                            <p className="description text-white/80">
                                <span className="font-bold">We</span> are more than just a group of athletes  we are a movement built on freedom, Our community brings together beginners, passionate learners, and experienced traceurs who share the same mindset — to move without fear and to constantly push beyond what feels possible. We believe that anyone can start, and everyone has the potential to improve with consistency, dedication, and the right guidance. discipline, and self-expression. Parkour is not just about jumping over obstacles; it’s about overcoming limits, both physical and mental. Every wall, rail, and street becomes an opportunity to grow, adapt, and evolve.
                            </p>
                            <p className="description text-white/80 mt-5 xl:mt-10">
                                Our community brings together beginners, passionate learners, and experienced traceurs who share the same mindset — to move without fear and to constantly push beyond what feels possible. We believe that anyone can start, and everyone has the potential to improve with consistency, dedication, and the right guidance.
                            </p>
                            <div
                                className="group relative mt-10 h-[300px] w-full overflow-hidden outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-white/50 sm:aspect-video"
                                tabIndex={0}
                            >
                                <Image
                                    src="/images/Home/Weare.png"
                                    alt="RAMP community training together"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
                                />
                                <div
                                    className="pointer-events-none absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/0 group-focus-within:bg-black/0"
                                    aria-hidden
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 sm:p-8">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
                                        Community
                                    </h3>
                                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                                        Traceurs of every level — training together, sharing spots, and pushing
                                        each other to move with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
