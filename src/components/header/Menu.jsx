import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Menu = () => {

    const [nav, setNav] = useState(false);
    const menuLinks = [
        {
            title: "About Us",
            link: "/aboutus",
        },
        {
            title: "Chi Breeds",
            link: "/chibreeds",
        },
        {
            title: "Contact Us",
            link: "/contactus",
        },
    ]

    return (
        <div>
            <div>
                {/*Desktop and above*/}
                <div className='hidden md:flex md:justify-center 
                md:gap-8 lg:gap-20 
                 font-bold'>

                    {menuLinks.map(({ title, link }) => (
                        <Link key={link} to={link}>
                            <p>{title}</p>
                        </Link>
                    ))}


                </div>
                {/*Mobile*/}
                <div onClick={() => setNav(!nav)} className='absolute right-12 top-4 md:hidden text-white dark:text-blue-500 cursor-pointer'>
                    {nav ? <AiOutlineMenu size={32} /> : <AiOutlineMenu size={32} />}
                </div>

            </div>
            {nav && (
                <div className='  '>
                    {menuLinks.map(({ title, link }) => (
                        <Link key={link} to={link}>
                            <p>{title}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Menu