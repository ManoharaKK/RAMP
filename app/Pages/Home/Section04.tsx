import GalleryCarousel from '@/app/Components/GalleryCarousel';

function Section04() {
    return (
        <div className='relative z-10 bg-white lg:pt-16 pt-10 text-foreground'>
            <div className="container-global">
                <h2 className="title text-left text-black lg:max-w-[60%]">
                    REDEFINING LIMITS THROUGH PARKOUR CULTURE
                </h2>
                <div className="mt-5 lg:flex lg:flex-row items-end justify-between gap-4 lg:mt-0">
                    <div className="min-w-0 flex-1">
                        <p className="description text-left text-black lg:max-w-[60%]">
                            From structured training sessions to real-world urban exploration, we focus on
                            building strength, control, agility,
                        </p>
                    </div>
                    <div className="flex shrink-0 justify-end self-end mt-5 lg:mt-0">
                        <img
                            src="/icons/BlackArrow.svg"
                            alt=""
                            width={277}
                            height={280}
                            className="h-10 w-auto rotate-90 object-contain select-none sm:h-16 md:h-18 xl:h-24"
                            aria-hidden={true}
                        />
                    </div>
                </div>
                <div className="my-10 h-px w-full bg-black/50" />
                <GalleryCarousel />
            </div>
        </div>
    )
}

export default Section04