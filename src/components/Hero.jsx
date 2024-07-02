import React from 'react'

function Hero() {
    return (
        <div className=' '>
            <div className='flex flex-row items-start  justify-center content-center 
            gap-8 
             md:gap-12 lg:gap-14 xl:gap-20 6xl:gap-32
            py-8  lg:pt-16 xl:pt-20 desktop:pt-24 6xl:pt-24 
            px-8 lg:px-10 6xl:px-24'>
                <div className='flex flex-col font-marker text-sm sm:text-base md:text-3xl
                lg:text-4xl notebook15i:text-5xl xl:text-5xl desktop:text-6xl 7xl:text-8xl
                gap-2 lg:gap-8 xl:gap-9 notebook15i:gap-10 7xl:gap-28
                md:py-6 lg:py-10 xl:py-12 notebook15i:py-14 desktop:py-16
                2xl:py-20 3xl:py-24 4xl:py-28 6xl:py-32 7xl:py-56
                dark:text-blue-500'>
                    <h1>Welcome to</h1>
                    <h1>Chihuahua World!</h1>
                </div>
                <div className='w-1/3 h-full md:w-1/3 md:h-[50px]  '>
                    <img className=''
                        src='/images/Banner.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero