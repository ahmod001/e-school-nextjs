import { User } from '@/features/home/services/api/type';
import {
    Carousel as _Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Card from './Card';

const testimonial = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nostrum minus deleniti animi dolores ab sequi, sint quos asperiores pariatur molestias in perspiciatis itaque, ratione fugit rem repellendus quaerat sunt!`
const Carousel = ({ users }: { users: User[] }) => {
    return (
        <_Carousel>
            <CarouselContent>
                {users.map(user => (
                    <CarouselItem key={user.login.uuid}>
                        <Card imgUrl={user.picture.medium} name={user.name.first}
                            testimonial={testimonial} />
                    </CarouselItem>))}
            </CarouselContent>
        </_Carousel>

    );
};

export default Carousel;