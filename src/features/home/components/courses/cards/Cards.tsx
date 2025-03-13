import React from 'react';
import CourseCard from './CourseCard';
import one from '@/features/home/assets/courses/one.png'
import { Course } from '../Courses';


const Cards = ({ courseList }: { courseList: Course[] }) => {
    return (
        <div className='flex flex-wrap justify-center gap-[27px]'>
            {
                courseList.map(course => (
                    <CourseCard key={course.id} {...course} />
                ))
            }
        </div>
    );
};



export default Cards;