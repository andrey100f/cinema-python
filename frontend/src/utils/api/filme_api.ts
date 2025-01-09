import axios from "axios";
import { AdaugareFilmProps, FilmProps } from "../props";

const baseUrl = "http://localhost:8000/api/filme/";

export async function fetchFilm(id: string | undefined) {
    try {
        const result = await axios.get(`${baseUrl}${id}`);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function modificareFilm(id: string | undefined, filmFields: FilmProps) {
    try {
        const result = await axios.put(`${baseUrl}${id}`, filmFields);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function adaugareFilm(filmFields: AdaugareFilmProps) {
    try {
        const result = await axios.post(baseUrl, filmFields);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function fetchFilme() {
    try {
        const result = await axios.get(baseUrl);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function stergereFilm(id: number) {
    try {
        const result = await axios.delete(`${baseUrl}${id}`);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}
