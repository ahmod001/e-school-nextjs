import React from 'react';
import Content from './Content';
import Illustration from './Illustration';

const Hero = () => {
    return (
        <section className='bg-light-green '>
            <div className='container mx-auto px-1.5 py-[63px] grid place-items-center lg:grid-cols-2 gap-10'>
                <Content />
                <Illustration/>
            </div>
        </section>
    );
};

export default Hero;