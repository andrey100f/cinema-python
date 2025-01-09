import { useNavigate, useParams } from "react-router-dom";
import { FilmProps, initialFilm } from "../utils/props";
import React, { useEffect, useState } from "react";
import { fetchFilm, modificareFilm } from "../utils/api/filme_api";
import { toast } from "react-toastify";

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [film, setFilm] = useState<FilmProps>(initialFilm);
    const [filmFields, setFilmFields] = useState<FilmProps>(initialFilm);

    useEffect(() => {
        async function fetchData() {
            const result = await fetchFilm(id);

            setFilmFields(result);
            setFilm(result);
        }

        fetchData();
    }, [id]);

    function handleChangeFilmField(e: React.ChangeEvent<HTMLInputElement>) {
        setFilmFields({
            ...filmFields,
            [e.target.name]: e.target.value
        });
    }

    function handleBack() {
        navigate("/home");
    }

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        try {
            await modificareFilm(id, filmFields);
            toast.success("Film modificat cu success!");
        } catch (err) {
            toast.error("A aparut o eroare" + err);
        }
    }

    return (
        <div className="container">
            <h2>Modificare Film</h2>

            <form>
                {film && (
                    <>
                        <div className="mb-3 mt-3">
                            <label htmlFor="id" className="form-label">ID</label>
                            <input type="text" className="form-control" id="id" name="id" value={filmFields.id} disabled />
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="titlu" className="form-label">Titlu</label>
                            <input type="text" className="form-control" id="titlu" name="titlu" placeholder="Introduceti titlul" value={filmFields.titlu} onChange={e => handleChangeFilmField(e)} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="an_aparitie" className="form-label">An Aparitie</label>
                            <input type="number" className="form-control" id="an_aparitie" name="an_aparitie" placeholder="Introduceti anul aparitiei" value={filmFields.an_aparitie} onChange={e => handleChangeFilmField(e)} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="pret_bilet" className="form-label">Pret Bilet</label>
                            <input type="number" className="form-control" id="pret_bilet" name="pret_bilet" placeholder="Introduceti pretul biletului" value={filmFields.pret_bilet} onChange={e => handleChangeFilmField(e)} />
                        </div>

                        <div className="mb-3 mt-3 form-check">
                            <label htmlFor="in_program" className="form-check-label">In Program</label>
                            <input type="checkbox" className="form-check-input" id="in_program" name="in_program" placeholder="In Program" checked={filmFields.in_program} onChange={e => handleChangeFilmField(e)} />
                        </div>
                    </>
                )}

                <button className="btn btn-primary" type="submit" onClick={e => handleSubmit(e)}>Modificare</button>
            </form>

            <div className="container d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleBack}>Mergi Inapoi</button>
            </div>
        </div>
    );

}

export default Edit;