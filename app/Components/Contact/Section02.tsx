import React from 'react'
import Image from 'next/image'
import ContactImage from '@/public/images/Home/Whoweare.png'
function Section02() {
  return (
    <div className='relative z-10 bg-black pt-26 lg:pt-30'>
      <div className='container-global'>
        <h1 className='title uppercase  max-w-[95%] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] 2xl:max-w-[900px] '>
          Let’s get <span className='text-secondary'>started</span>. Tell us about your business challenge.
        </h1>
      </div>
      <div className='container-global'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-end'>
          <div className='col-span-1 lg:col-span-1'>

            <p className='description mt-4 lg:mr-24 lg:mt-8'>
              Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help
            </p>
            <div className='bg-white/50 h-[1px] w-full my-10'></div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8'>
              <div className='col-span-1 lg:col-span-3 overflow-hidden'>
                <img
                  src='/images/Home/Whoweare.png'
                  alt='Contact'
                  width={1000}
                  height={1000}
                  className='w-full h-[300px] sm:h-[500px] lg:h-[600px] object-cover'
                />
              </div>
              <div className='col-span-1 lg:col-span-2 overflow-hidden'>
              <img
                  src='/images/Home/Cloths.png'
                  alt='Contact'
                  width={1000}
                  height={1000}
                  className='w-full h-[300px] sm:h-[500px] lg:h-[600px] object-cover'
                />
              </div>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-1 mt-8 lg:mt-0'>
            <form className='space-y-6'>
              {/* Name */}
              <div className='space-y-2'>
                <label htmlFor='name' className='block text-sm font-medium text-white'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Enter your name'
                  className='w-full  bg-white/10 px-6 py-3 text-sm text-white outline-none border border-white/10 placeholder:text-white/60 focus:border-secondary transition-all'
                />
              </div>

              {/* Email */}
              <div className='space-y-2'>
                <label htmlFor='email' className='block text-sm font-medium text-white'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Enter your email'
                  className='w-full  bg-white/10 px-6 py-3 text-sm text-white outline-none border border-white/10 placeholder:text-white/60 focus:border-secondary transition-all'
                />
              </div>

              {/* Service */}
              <div className='space-y-2'>
                <label htmlFor='service' className='block text-sm font-medium text-white'>
                  What service are you interested in
                </label>
                <select
                  id='service'
                  name='service'
                  className='w-full  bg-white/10 px-6 py-3 text-sm text-white outline-none border border-white/10 focus:border-secondary appearance-none transition-all'
                  defaultValue=''
                >
                  <option value='' disabled>
                    Select project type
                  </option>
                  <option value='web'>
                    Web development
                  </option>
                  <option value='mobile'>
                    Mobile app
                  </option>
                  <option value='ai'>
                    AI / Automation
                  </option>
                  <option value='other'>
                    Other
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div className='space-y-2'>
                <label htmlFor='budget' className='block text-sm font-medium text-white'>
                  Budget
                </label>
                <select
                  id='budget'
                  name='budget'
                  className='w-full  bg-white/10 px-6 py-3 text-sm text-white outline-none border border-white/10 focus:border-secondary appearance-none transition-all'
                  defaultValue=''
                >
                  <option value='' disabled>
                    Select project budget
                  </option>
                  <option value='1'>
                    Under $1,000
                  </option>
                  <option value='2'>
                    $1,000 - $5,000
                  </option>
                  <option value='3'>
                    $5,000 - $10,000
                  </option>
                  <option value='4'>
                    $10,000+
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className='space-y-2'>
                <label htmlFor='message' className='block text-sm font-medium text-white'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  placeholder='Tell us about your project'
                  className='w-full  bg-white/10 px-6 py-3 text-sm text-white outline-none border border-white/10 placeholder:text-white/60 focus:border-secondary transition-all resize-none'
                />
              </div>

              {/* Submit */}
              <button
                type='submit'
                className='w-full  bg-secondary text-white py-3 text-sm font-semibold shadow-md hover:bg-white hover:text-secondary transition-all duration-300'
              >
                Submit
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Section02