import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SignIn from './SignIn';


export interface Link {
    id: number;
    title: string;
    href: string;
}

const links: Link[] = [
    {
        id: 1,
        title: "Books",
        href: '/books'
    },
    {
        id: 2,
        title: "Courses",
        href: '/courses'
    },
    {
        id: 3,
        title: "Others",
        href: '/others'
    },
    {
        id: 4,
        title: "Blog",
        href: '/blog'
    }
]

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-light-green '>
            <nav className='container mx-auto xl:py-[30px] py-7 px-1.5 '>
                <div className='flex flex-col md:flex-row gap-2 items-center justify-between'>
                    <Logo />

                    <div className='flex items-center gap-[38px] '>
                        <NavLinks navLinks={links} />
                        <SignIn />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;