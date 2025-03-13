import React from 'react';
import Title from '../shared/Title';
import Cards from './cards/Cards';

import one from '@/features/home/assets/courses/one.png'
import two from '@/features/home/assets/courses/two.png'
import three from '@/features/home/assets/courses/three.png'


export interface Course {
    id: number;
    imgUrl: string;
    title: string;
    description: string;
}

const courses: Course[] = [
    {
        id: 1,
        imgUrl: one.src,
        title: 'Modern Psychology',
        description: 'Designation'
    },
    {
        id: 2,
        imgUrl: two.src,
        title: 'Modern Psychology',
        description: 'Designation'
    },
    {
        id: 3,
        imgUrl: three.src,
        title: 'Modern Psychology',
        description: 'Designation'
    }
]

const Courses = () => {


    return (
        <section className="container mx-auto px-1.5">
            <Title>Online Courses</Title>

            <Cards courseList={courses} />
        </section>
    );
};

export default Courses;