import Image from "next/image";

interface Props {
    imgUrl: string,
    name: string,
    testimonial: string
}

const Card = ({ imgUrl, name, testimonial }: Props) => {
    return (
        <div className="flex gap-5 items-center justify-center max-w-3xl mx-auto select-none">
            <ClientImage imgUrl={imgUrl} alt={name} />

            <p className="text-primary-gray text-lg font-medium">
                {testimonial}
            </p>
        </div>
    );
};

const ClientImage = ({ imgUrl, alt }: { imgUrl: string, alt: string }) => (
    <Image src={imgUrl} width={200} height={200} className="rounded-full h-[120px] w-[120px]" alt={alt} />
)
ClientImage.displayName = "ClientImage";



export default Card;