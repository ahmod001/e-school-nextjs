import MainLayout from '@/app/Layout/MainLayout';
import React from 'react';
import Hero from './components/hero/Hero';
import FeatureCards from './components/feature-cards/FeatureCards';
import Testimonial from './components/testimonial/Testimonial';

const Home = () => {
    return (
        <MainLayout>
            <section className='space-y-10 pb-10'>
                <Hero />
                <FeatureCards/>
                <Testimonial/>
            </section>
        </MainLayout>
    );
};

export default Home;