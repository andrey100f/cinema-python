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
