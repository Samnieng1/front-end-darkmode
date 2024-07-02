import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='font-marker font-extrabold text-white dark:text-blue-500'>
            <Link to={'/'}>
            ChiWorld
            </Link>
            
        </div>
    )
}

export default Logo
