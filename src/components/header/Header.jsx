import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  return (
    <div className='w-screen '>
      <div className='flex  md:justify-between 
      md:flex-row px-4 md:px-6 py-4 bg-black 
      text-xl  md:text-xl
                lg:text-2xl xl:text-3xl notebook15i:text-3xl  desktop:text-3xl 7xl:text-6xl
      flex-wrap z-[20] text-white dark:text-blue-500'>
        <div className='lg:w-1/3'>
          <Logo />
        </div>
        <div className='w-full md:w-2/3'>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Header