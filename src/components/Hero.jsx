import React from 'react'

function Hero() {
    return (
        <div className=' bg-cover bg-no-repeat bg-local
        bg-center object-cover w-screen h-[250px] sm:min-h-[350px] md:min-h-[350px] 
        lg:min-h-[550px] xl:min-h-[550px] notebook15i:min-h-[570px]
        desktop:min-h-[550px] 2xl:min-h-[550px] 3xl:min-h-[650px] 6xl:min-h-[1000px]'>
            <div className='flex flex-col items-start  justify-start content-center 
            gap-4 
            md:flex-row md:gap-8 lg:gap-14 xl:gap-20 6xl:gap-32
            py-8  lg:pt-16 xl:pt-20 desktop:pt-24 6xl:pt-24 
            px-8 lg:px-10 6xl:px-24'>
                <div className='flex flex-col font-marker text-xl sm:text-2xl md:text-3xl
                lg:text-4xl notebook15i:text-5xl xl:text-5xl desktop:text-6xl 7xl:text-8xl
                gap-4 lg:gap-8 xl:gap-9 notebook15i:gap-10 7xl:gap-28
                md:py-6 lg:py-10 xl:py-12 notebook15i:py-14 desktop:py-16
                2xl:py-20 3xl:py-24 4xl:py-28 6xl:py-32 7xl:py-56
                dark:text-blue-500'>
                    <h1>Welcome to</h1>
                    <h1>Chihuahua World!</h1>
                </div>
                <div className='w-1/3 h-[50px] '>
                    <img className='w-full'
                        src='/images/Banner.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero