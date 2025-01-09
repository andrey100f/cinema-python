import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { FilmProps } from "../utils/props";
import { fetchFilme, stergereFilm } from "../utils/api/filme_api";

function ListFilm() {
    const [filmData, setFilmData] = useState<FilmProps[]>();
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [sortOrderPrice, setSortOrderPrice] = useState<"asc" | "desc">("asc");
    const admin = localStorage.getItem("admin") === "true";

    async function fetchData() {
        const result = await fetchFilme();
        setFilmData(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleStergere(filmId: number) {
        await stergereFilm(filmId);
        fetchData();
        toast.success("Film sters cu success!");
    }

    function handleSortByTitlu() {
        if (filmData) {
            const sortedData = [...filmData].sort((a, b) => {
                const nameA = a.titlu.toLowerCase();
                const nameB = b.titlu.toLowerCase();
                if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
                if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
            setFilmData(sortedData);
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        }
    }

    function handleSortByPrice() {
        if (filmData) {
            const sortedData = [...filmData].sort((a, b) => {
                const priceA = a.pret_bilet;
                const priceB = b.pret_bilet;
                if (priceA < priceB) return sortOrderPrice === "asc" ? -1 : 1;
                if (priceA > priceB) return sortOrderPrice === "asc" ? 1 : -1;
                return 0;
            });
            setFilmData(sortedData);
            setSortOrderPrice(sortOrderPrice === "asc" ? "desc" : "asc");
        }
    }

    return (
        <div className="container">
            <table className="table tabke-bordered">
                <thead>
                    <tr>
                        <th>Film ID</th>
                        <th onClick={handleSortByTitlu} style={{ cursor: "pointer" }}>
                            Titlu {sortOrder === "asc" ? "▲" : "▼"}
                        </th>
                        <th>An Aparitie</th>
                        <th onClick={handleSortByPrice} style={{ cursor: "pointer" }}>
                            Pret Bilet {sortOrderPrice === "asc" ? "▲" : "▼"}
                        </th>
                        <th>In Program</th>
                        { admin && <th>Actions</th> }
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
                                { admin && <td>
                                    <NavLink to={`/view/${film.id}`} className="btn btn-success mx-2">Vizualizare</NavLink>
                                    <NavLink to={`/edit/${film.id}`} className="btn btn-info mx-2">Modificare</NavLink>
                                    <button className="btn btn-danger" onClick={() => handleStergere(film.id)}>Stergere</button>
                                </td> }
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListFilm;