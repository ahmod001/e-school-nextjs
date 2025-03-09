import React from 'react';
import Slogun from './Slogun'
import RenderLinks from './RenderLinks'
import Copyright from './Copyright'
import Link from './Link'

const courseLinks = [{
    id: 1,
    title: 'Graphic Design',
    href: '/course/graphic-design'
},
{
    id: 2,
    title: 'Web Design',
    href: '/course/web-design'
},
{
    id: 3,
    title: 'Kochi Design',
    href: '/course/kochi-design'
}]

const Footer = () => {

    return (
        <footer className='bg-navy-blue text-white '>
            <div className='container mx-auto px-1.5 grid md:grid-cols-2 gap-7 py-[62px]'>
                <Slogun />


                <div className='grid md:grid-cols-3 grid-cols-2 place-items-center md:place-items-start'>
                    <RenderLinks resourceName='Course' data={courseLinks} dataToRender={Link} />
                    <RenderLinks resourceName='Others' data={courseLinks} dataToRender={Link} />
                </div>
            </div>

            <Copyright />

        </footer>
    );
};

export default Footer;