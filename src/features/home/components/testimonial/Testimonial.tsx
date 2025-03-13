import getUsers from "../../services/api/random-user";
import Title from "../shared/Title";
import { User } from "../../services/api/type";
import Carousel from "./carousel/Carousel";



const Testimonial = async () => {
    let users: User[] = [];

    try {
        const data = await getUsers();
        users = data.results;
    } catch (error) {
        console.error(error);
    }


    return (
        <section className="container mx-auto px-1.5">
            <Title>Testimonial</Title>
            <Carousel users={users} />
        </section>
    );
};

export default Testimonial;