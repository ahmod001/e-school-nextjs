import NextLink from 'next/link';


const Link = ({ title, href }: { title: string, href: string }) => {
    return (
        <NextLink href={href} className='block xl:text-lg'>
            {title}
        </NextLink>
    );
};

export default Link;