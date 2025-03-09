import Image from "next/image";
import img from '../../assets/illustration.png'
const Illustration = () => {
    return (
        <div className="flex lg:justify-end justify-center order-first lg:order-none">
            <Image src={img} alt="e-school" className="md:h-[20rem] w-fit" />
        </div>
    );
};

export default Illustration;