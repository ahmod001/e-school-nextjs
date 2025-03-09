import { Button } from "@/components/ui/button";
import Link from "next/link";

const Content = () => {
    return (
        <div className="space-y-[14px]">
            <p className="text-orange-500 text-lg font-medium">Are you ready to Learn?</p>

            <h1 className="text-5xl font-bold leading-12">Learn With fun  <br />
                on <span className="text-primary-green">any schedule</span></h1>

            <p className="text-primary-gray text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia natus beatae veritatis accusantium atque repellat similique est </p>

            <GetStarted />
        </div>
    );
};



const GetStarted = () => (
    <Link href={'/'}>
        <Button size={'lg'} className="bg-primary-green hover:bg-green-700 rounded-4xl xl:text-base">
            Get started
        </Button>
    </Link>
)
GetStarted.displayName = "GetStarted"


export default Content;