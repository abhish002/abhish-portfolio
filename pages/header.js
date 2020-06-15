import React from 'react';
import Link from 'next/link';

export const Header = () => {
    return (
        <div className='header'>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/about'>
                <a>About</a>
            </Link>
        </div>
    )
}

export default Header;
