import React from 'react'
import RampMarquee from '@/app/Components/RampMarquee'

function Section07() {
    return (
        <div className='relative z-10 bg-black pt-10 lg:pt-16'>
            <div className="container-global">
                <div className='bg-white/50 h-[1px] w-full my-10'></div>
                <h1 className='hero-title uppercase text-white'>
                    parkout team
                </h1>
                <div className='flex flex-row items-end justify-between'>
                    <p className='hero-title uppercase text-white'>
                        based in
                    </p>
                    <p className='hero-title uppercase text-white'>
                        .LK
                    </p>
                </div>
                <div className='mt-10 lg:mt-26 flex justify-end'>
                    <p className='description text-white text-right lg:max-w-[30%]'>
                    When calculating the 40 % of 250 , simply convert the percentage value to a ratio that represents the percentage and multiplied it with the value in question
                    </p>
                    
                </div>
                <img
                            src="/icons/WhiteArrow.svg"
                            alt=""
                            width={277}
                            height={280}
                            className="h-10 w-auto rotate-90 object-contain select-none items-end sm:h-16 md:h-18 xl:h-24 mb-4 sm:mb-6 md:mb-3"
                            aria-hidden={true}
                        />
                <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 mt-10 lg:mt-26'>
                    <div className='col-span-1'>
                        <img src="/images/Home/Cloths.png" alt="Team" className='w-full h-full object-cover' />
                    </div>
                    <div className='col-span-1'>
                        <img src="/images/Home/Cloths.png" alt="Team" className='w-full h-full object-cover' />
                    </div>
                    <div className='col-span-1'>
                        <img src="/images/Home/Cloths.png" alt="Team" className='w-full h-full object-cover' />
                    </div>
                    <div className='col-span-1'>
                        <img src="/images/Home/Cloths.png" alt="Team" className='w-full h-full object-cover' />
                    </div>
                    <div className='col-span-1'>
                        <img src="/images/Home/Cloths.png" alt="Team" className='w-full h-full object-cover' />
                    </div>
                    <div className='col-span-1'>
                        <img src="/images/Home/Cloths.png" alt="Team" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='bg-white/50 h-[1px] w-full '></div>
               
            </div>
            
        </div>
    )
}

export default Section07