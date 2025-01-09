import axios from "axios";
import { AdaugareRezervareProps, RezervareProps } from "../props";
import { fetchFilm } from "./filme_api";

const baseUrl = "http://localhost:8000/api/rezervari";

export async function fetchRezervariByUtilizatorId(id: string | undefined) {
    try {
        const result = await axios.get(`${baseUrl}?id_utilizator=${id}`);
        return Promise.resolve(buildRezervationArray(result.data));
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function adaugareRezervare(rezervare: AdaugareRezervareProps) {
    try {
        const result = await axios.post(`${baseUrl}/`, rezervare);
        return Promise.resolve(result.data);
    } catch(error) {
        throw new Error(error as string);
    }
}

    async function buildRezervationArray(rezervareData: RezervareProps[]) {
        const result: RezervareProps[] = [];
        for(const rezervare of rezervareData) {
            const film = await fetchFilm(rezervare.id_film.toString());
            result.push({
                ...rezervare,
                titlu: film.titlu
            });
        }

        return result;
    }