import React from 'react'

function Section03() {
  return (
    <div className='relative z-10 bg-black '>
        <div className='container-global'>
        <div className='mt-16 text-white'>
            <h1 className='title uppercase  text-white'>
            Find Us On The <span className='text-secondary'>Map</span>
            </h1>
            <p className='description mt-4 max-w-[600px] text-white'>
              Locate our office easily and get in touch with us for any inquiries or support.
            </p>
            <div className='bg-white/50 h-[1px] w-full my-10'></div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
              {/* Address card */}
              <div className='col-span-1 lg:col-span-1  p-6 sm:p-8 flex flex-col justify-between text-white'>
                <div>
                  <h2 className='subtitle-2  mb-3'>
                    Vertex Academy HQ
                  </h2>
                  <p className='description text-white'>
                    456 Elm Street, Suite 210<br />
                    Downtown District<br />
                    Los Angeles, CA 90015<br />
                    United States
                  </p>
                </div>
                <div className='mt-6 space-y-1 text-sm'>
                  <p className='font-medium'>Phone: <span className='font-normal'>+1 (213) 555‑0123</span></p>
                  <p className='font-medium'>Email: <span className='font-normal'>hello@vertex.academy</span></p>
                </div>
              </div>

              {/* Map / View location */}
              <div className='col-span-1 lg:col-span-2  overflow-hidden'>
                <div className='relative w-full h-[260px] sm:h-[320px] lg:h-[360px] bg-white/10 flex flex-col'>
                  <iframe
                    title='Vertex Academy Location'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.870268803169!2d-118.26728092369248!3d34.04071387316326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b9d7c9c0c7%3A0x9e8b5e3b7f2a7d39!2sDowntown%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
                    className='w-full h-full border-0'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                  <button
                    type='button'
                    className='absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary text-white px-8 py-2 text-sm font-semibold shadow-md hover:bg-white hover:text-secondary transition-all duration-300'
                  >
                    View Location
                  </button>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section03