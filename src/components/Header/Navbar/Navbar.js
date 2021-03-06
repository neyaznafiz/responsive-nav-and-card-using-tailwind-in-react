import React from 'react';
import Link from '../../Link/Link';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Coupons', link: '/coupons' },
        { id: 4, name: 'Contact', link: '/contact' }
    ]

    return (
        <nav className='bg-indigo-200'>

            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
            </div>

            <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;