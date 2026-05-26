function Section06() {
    return (
        <div className="relative z-10 bg-black pt-10 lg:pt-16">
            <div className="container-global  w-full justify-end">
                <h2 className="title mb-10  text-right uppercase text-white lg:mb-16">
                    our projects
                </h2>
                <p className="description text-white text-right mt-2 mb-2 lg:mt-5 lg:mb-5">
                    From structured training sessions to real-world urban exploration, we focus on building
                </p>
            </div>
            <div className="container-global">
                <img
                    src="/icons/WhiteArrow.svg"
                    alt=""
                    width={277}
                    height={280}
                    className="h-10 w-auto rotate-90 object-contain select-none items-end sm:h-16 md:h-18 xl:h-24 mb-4 sm:mb-6 md:mb-3"
                    aria-hidden={true}
                />
                <div className="mb-10 h-px w-full bg-white/50 lg:mb-16" />
            </div>
            <div className="container-global grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-1 flex w-full flex-col items-start gap-4 p-4 sm:p-6 md:gap-5 md:p-8">
                    <h2 className="subtitle-2 uppercase text-white">Project 1</h2>
                    <p className="description max-w-full text-[15px] leading-relaxed text-white sm:text-[17px] md:text-lg lg:max-w-[80%]">
                        From structured training sessions to real-world urban exploration, we focus on building
                        strength, control, agility,
                    </p>
                </div>
                {/* Spacer tiles — large screens only */}
                <div
                    className="hidden aspect-square w-full lg:block"
                    aria-hidden
                />
                <div className="col-span-1 aspect-square w-full">
                    <img
                        src="/images/Home/Cloths.png"
                        alt="Project 1"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div
                    className="hidden aspect-square w-full lg:block"
                    aria-hidden
                />
                <div className="col-span-1 flex w-full flex-col items-end gap-4 p-4 text-right sm:p-6 md:gap-5 md:p-8">
                    <h2 className="subtitle-2 uppercase text-white">Project 1</h2>
                    <p className="description max-w-full text-[15px] leading-relaxed text-white sm:max-w-[90%] sm:text-[17px] md:text-lg lg:max-w-[80%]">
                        From structured training sessions to real-world urban exploration, we focus on building
                        strength, control, agility,
                    </p>
                </div>
                <div className="relative col-span-1 aspect-2/1 w-full overflow-hidden md:col-span-2">
                    <img
                        src="/images/Home/Cloths.png"
                        alt="Project 1"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
                <div className="col-span-1 aspect-square w-full">
                    <img
                        src="/images/Home/Cloths.png"
                        alt="Project 1"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative col-span-1 aspect-2/1 w-full overflow-hidden md:col-span-2">
                    <img
                        src="/images/Home/Cloths.png"
                        alt="Project 1"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
                <div className="col-span-1 flex w-full flex-col items-end gap-4 p-4 text-right sm:p-6 md:gap-5 md:p-8">
                    <h2 className="subtitle-2 uppercase text-white">Project 1</h2>
                    <p className="description max-w-full text-[15px] leading-relaxed text-white sm:max-w-[90%] sm:text-[17px] md:text-lg lg:max-w-[80%]">
                        From structured training sessions to real-world urban exploration, we focus on building
                        strength, control, agility,
                    </p>
                </div>
                <div className="col-span-1 aspect-square w-full bg-neutral-900">
                    <img
                        src="/images/Home/Cloths.png"
                        alt="Project 1"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Section06;
