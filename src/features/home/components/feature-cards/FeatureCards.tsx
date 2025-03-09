import React from 'react';
import Card from './Card';
import book from '../../assets/features/image 1.png'
import pen from '../../assets/features/image 2.png'
import math from '../../assets/features/image 3.png'
import check from '../../assets/features/image 4.png'


const data = [
    {
        id: 1,
        title: '1500+ Topic',
        desc: 'Learn Anythings',
        imgUrl: book.src
    },
    {
        id: 2,
        title: '1800+ Students',
        desc: 'Learn Anythings',
        imgUrl: pen.src
    },
    {
        id: 3,
        title: '1800+ Students',
        desc: 'Learn Anythings',
        imgUrl: math.src
    },
    {
        id: 4,
        title: '2000+ Student',
        desc: 'Learn Anythings',
        imgUrl: check.src
    }
]

const FeatureCards = () => {
    return (
        <section className='container mx-auto px-1.5 flex flex-wrap justify-center gap-[30px]'>
            {data.map(card => (
                <Card key={card.id} {...card} />
            ))}
 
        </section>
    );
};

export default FeatureCards;