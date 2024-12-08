import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { FilmProps } from "../utils/props";
import { fetchFilme, stergereFilm } from "../utils/api";

function List() {
    const [filmData, setFilmData] = useState<FilmProps[]>();

    async function fetchData() {
        const result = await fetchFilme();
        setFilmData(result);
        console.log(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleStergere(filmId: number) {
        await stergereFilm(filmId);
        fetchData();
        toast.success("Film sters cu success!");
    }

    return (
        <div className="container">
            <table className="table tabke-bordered">
                <thead>
                    <tr>
                        <th>FilmId</th>
                        <th>Titlu</th>
                        <th>An Aparitie</th>
                        <th>Pret Bilet</th>
                        <th>In Program</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    { filmData && filmData.map((film) => {
                        return (
                            <tr key={film.id}>
                                <td>{film.id}</td>
                                <td>{film.titlu}</td>
                                <td>{film.an_aparitie}</td>
                                <td>{film.pret_bilet}</td>
                                <td>{film.in_program == true ? "Da" : "Nu"}</td>
                                <td>
                                    <NavLink to={`/view/${film.id}`} className="btn btn-success mx-2">Vizualizare</NavLink>
                                    <NavLink to={`/edit/${film.id}`} className="btn btn-info mx-2">Modificare</NavLink>
                                    <button className="btn btn-danger" onClick={() => handleStergere(film.id)}>Stergere</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default List;