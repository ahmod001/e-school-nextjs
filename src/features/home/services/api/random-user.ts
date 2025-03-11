import { RandomUsers } from "./type";




const getUsers = async (): Promise<RandomUsers> => {
    const data = await fetch('https://randomuser.me/api/?results=10');
    return data.json();

}


export default getUsers;