export interface FilmProps {
    id: number,
    titlu: string,
    an_aparitie: number,
    pret_bilet: number,
    in_program: boolean
}

export interface AdaugareFilmProps {
    titlu: string,
    an_aparitie: number,
    pret_bilet: number,
    in_program: boolean
}

export interface AdaugareUtilizatorProps {
    nume: string,
    username: string,
    parola: string,
}

export interface RezervareProps {
    id: number,
    id_film: number,
    id_utilizator: number,
    data: string,
    titlu: string
};

export interface AdaugareRezervareProps {
    id_film: number | null,
    id_utilizator: number,
    data: string
}

export const initialFilm = {
    id: 0,
    titlu: "",
    an_aparitie: 0,
    pret_bilet: 0,
    in_program: false
}

export const adaugareInitialFilm = {
    titlu: "",
    an_aparitie: 0,
    pret_bilet: 0,
    in_program: false
}

export const initialProfil = {
    id: 0,
    username: "",
    nume: "",
    parola: "",
    puncte: 0
}

export const adaugareInitialUtilizator = {
    nume: "",
    username: "",
    parola: ""
};
