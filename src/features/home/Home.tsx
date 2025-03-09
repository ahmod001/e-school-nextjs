import MainLayout from '@/app/Layout/MainLayout';
import React from 'react';
import Hero from './components/hero/Hero';
import FeatureCards from './components/feature-cards/FeatureCards';

const Home = () => {
    return (
        <MainLayout>
            <section className='space-y-10 pb-10'>
                <Hero />
                <FeatureCards/>
            </section>
        </MainLayout>
    );
};

export default Home;