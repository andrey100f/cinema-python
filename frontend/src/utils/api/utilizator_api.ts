import axios from "axios";
import { AdaugareUtilizatorProps } from "../props";

const utilizatorUrl = "http://localhost:8000/api/users/";
const loginUrl = "http://localhost:8000/api/login/";

export async function login(username: string, parola: string) {
    try {
        const result = await axios.post(loginUrl, {username, parola});
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function register(registerData: AdaugareUtilizatorProps) {
    try {
        console.log(registerData);
        const result = await axios.post(utilizatorUrl, registerData);
        return Promise.resolve(result.data);
    } catch(error) {
        throw new Error(error as string);
    }
}