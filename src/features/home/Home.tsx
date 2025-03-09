import MainLayout from '@/app/Layout/MainLayout';
import React from 'react';
import Hero from './components/hero/Hero';

const Home = () => {
    return (
        <MainLayout>
            <section>
                <Hero />
            </section>
        </MainLayout>
    );
};

export default Home;