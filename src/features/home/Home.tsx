import MainLayout from '@/app/Layout/MainLayout';
import React from 'react';
import Hero from './components/hero/Hero';
import FeatureCards from './components/feature-cards/FeatureCards';
import Testimonial from './components/testimonial/Testimonial';
import Courses from './components/courses/Courses';

const Home = () => {
    return (
        <MainLayout>
            <section className='space-y-10 pb-10'>
                <Hero />
                <FeatureCards />
                <Courses />
                <Testimonial />
            </section>
        </MainLayout>
    );
};

export default Home;