import { Button } from '@/components/ui/button';
import React, { ReactNode } from 'react';


interface Props {
    imgUrl: string,
    title: string,
    description: string
}

const CourseCard = ({ imgUrl, title, description }: Props) => {
    return (
        <div className='space-y-[16px] rounded-[18px] py-[24px] w-fit px-[20px] shadow hover:shadow-lg transition-all duration-100'>
            <Thumbnail imgUrl={imgUrl} />

            <div className='space-y-[3px]'>
                <Title>{title}</Title>
                <Description>
                    {description}
                </Description>
            </div>

            <BuyCourse />
        </div>
    );
};


const Thumbnail = ({ imgUrl }: { imgUrl: string }) => (
    <div
        className='h-[234px] w-[331px] rounded-[11px]'
        style={{
            background: `center / cover no-repeat url(${imgUrl})`,
        }}
    />
);

Thumbnail.displayName = 'Thumbnail';


const Title = ({ children }: { children: ReactNode }) => (
    <h3 className="font-medium text-2xl text-navy-blue">{children}</h3>
)
Title.displayName = "Title";


const Description = ({ children }: { children?: ReactNode }) => (
    <p className="text-navy-blue text-base">{children}</p>
)
Description.displayName = "Description";


const BuyCourse = () => (
    <Button className="bg-primary-green hover:bg-green-700 rounded-4xl xl:text-base cursor-pointer">
        Buy Course
    </Button>
)
BuyCourse.displayName = "BuyCourse"

export default CourseCard;