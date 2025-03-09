import Image from 'next/image';
import React from 'react';

import logo from '@/assets/logo.png'
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'}>
            <Image className='h-12 xl:h-14 w-fit' src={logo} alt='e-school' />
        </Link>
    );
};

export default Logo;