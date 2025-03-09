import React, { ReactNode } from 'react';



interface Link {
    id: number;
    title: string;
    href: string;
}

interface Props {
    resourceName: string;
    data: Link[]
    dataToRender: React.ComponentType<any>
}


const RenderLinks: React.FC<Props> = ({ resourceName, data, dataToRender: Component }) => {
    return (
        <div>
            <Title>
                {resourceName}
            </Title>

            <nav className='space-y-1.5'>
                {data.map(link => (
                    <Component key={link.id} {...link} />
                ))}
            </nav>
        </div>
    );
};


const Title = ({ children }: { children: ReactNode }) => (
    <h3 className='text-lg xl:text-xl font-bold capitalize mb-1.5'>
        {children}
    </h3>
)
Title.displayName = "Title";


export default RenderLinks;