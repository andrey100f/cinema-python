import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilmProps, initialFilm } from "../utils/props";
import { fetchFilm } from "../utils/api/filme_api";

function View() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [film, setFilm] = useState<FilmProps>(initialFilm);

    useEffect(() => {
        async function fetchData(id: string | undefined) {
            const result = await fetchFilm(id);
            setFilm(result);
        }

        fetchData(id);
    }, [id]);

    function handleBack() {
        navigate("/home");
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Detalii Film</h1>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>FilmId</th>
                                    <th>Titlu</th>
                                    <th>An Aparitie</th>
                                    <th>Pret Bilet</th>
                                    <th>In Program</th>
                                </tr>
                            </thead>

                            <tbody>
                                { film && (
                                    <tr>
                                        <th>{film.id}</th>
                                        <th>{film.titlu}</th>
                                        <th>{film.an_aparitie}</th>
                                        <th>{film.pret_bilet}</th>
                                        <th>{film.in_program == true ? "Da" : "Nu"}</th>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center">
                <div>
                    <button className="btn btn-primary" onClick={handleBack}>Inapoi la Pagina Principala</button>
                </div>
            </div>
        </>
    );
}

export default View;