function Section03() {
    return (
        <section
            className="relative z-10 bg-background lg:py-16 py-10 text-foreground"
            aria-labelledby="section02-heading"
        >
            <div className="container-global">
                <div className='bg-white/50 h-[1px] w-full my-10'></div>
                <div className="grid gap-4 grid-cols-4 lg:items-end">
                    <div className="col-span-3">
                        <h2 className="title text-right">
                            REDEFINING LIMITS THROUGH PARKOUR CULTURE
                        </h2>
                    </div>
                    <div className="flex justify-end col-span-1">
                        <img
                            src="/icons/WhiteArrow.svg"
                            alt=""
                            width={277}
                            height={280}
                            className="h-10 w-auto rotate-90 object-contain select-none sm:h-16 md:h-18 xl:h-24"
                            aria-hidden={true}
                        />
                    </div>
                </div>
                <div className='bg-white/50 h-[1px] w-full my-10'></div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-end">
                    <div className="lg:col-span-1">
                        <div className="flex flex-col lg:pb-0">
                            <div className="mb-6 h-px w-full bg-white/50 lg:mb-8" />
                            <h2 className="title text-right">1.3M+</h2>
                            <div className="my-6 h-px w-full bg-white/50 lg:my-8" />
                            <h3 className="subtitle-2 text-right lg:text-left uppercase">Clothing Sold</h3>
                            <p className="description mt-3 xl:mt-5 text-right lg:text-left">
                                From structured training sessions to real-world urban exploration, we focus
                                on building strength, control, agility,
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-2 my-5 lg:my-0">
                        <img
                            src="/images/Home/Cloths.png"
                            alt="RAMP clothing"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                    <div className="self-start lg:col-span-1">
                        <h2 className="title text-right">100%</h2>
                        <h3 className="subtitle-2 text-right uppercase">REDEFINING LIMITS </h3>
                        <div className="my-6 h-px w-full bg-white/50 lg:my-8" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section03