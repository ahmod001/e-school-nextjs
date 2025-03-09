import Image from "next/image";
import { ReactNode } from "react";


interface Props {
    imgUrl: string,
    title: string,
    desc?: string
}
const Card = ({ imgUrl, title, desc }: Props) => {
    return (
        <div className="bg-light-green hover:bg-white transition-all duration-200 cursor-pointer hover:shadow-md rounded-[10px] w-[270px] h-[270px] flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                <Img src={imgUrl} alt={title} />

                <div className="text-center space-y-0.5">
                    <Title>{title}</Title>
                    <Description>{desc}</Description>
                </div>
            </div>
        </div>
    );
};

const Img = ({ src, alt }: { src: string, alt: string }) => (
    <Image src={src} width={100} height={100} className="h-[83px] w-fit" alt={alt} />
)

Img.displayName = "Img";


const Title = ({ children }: { children: ReactNode }) => (
    <h3 className="font-medium text-2xl text-navy-blue">{children}</h3>
)
Title.displayName = "Title";



const Description = ({ children }: { children?: ReactNode }) => (
    <p className="text-navy-blue text-base">{children}</p>
)
Description.displayName = "Description";

export default Card;