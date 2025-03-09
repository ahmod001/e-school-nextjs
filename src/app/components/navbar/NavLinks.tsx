import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Link as LinkType } from './Navbar';


const NavLinks = ({ navLinks }: { navLinks: LinkType[] }) => {
    return (
        <div className='flex gap-[38px] w-full'>
            {navLinks.map(link => (
                <NavLink key={link.id} href={link.href}>
                    {link.title}
                </NavLink>
            ))}
        </div>
    );
};


const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
    <Link className='text-navy-blue text-base xl:text-lg font-medium' href={href}>
        {children}
    </Link>
)

NavLink.displayName = "NavLink";



export default NavLinks;