import React, { useState, useEffect } from "react";
import { AdaugareFilmProps, adaugareInitialFilm, FilmProps } from "../utils/props";
import { adaugareFilm, fetchFilme } from "../utils/api/filme_api";
import { toast } from "react-toastify";
import ListFilm from "./ListFilm";
import { useNavigate } from 'react-router-dom';
import { adaugareRezervare } from "../utils/api/rezervare_api";
import ListRezervare from "./ListRezervare";

function Home() {
    const [filmFields, setFilmFields] = useState<AdaugareFilmProps>(adaugareInitialFilm);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 
    const admin = localStorage.getItem("admin") === "true";

    const [selectedFilm, setSelectedFilm] = useState<number | null>(null);
    const [filmData, setFilmData] = useState<FilmProps[]>([]);
    const [dataRezervare, setDataRezervare] = useState("");

    async function fetchFilmData() {
        const response = await fetchFilme();  
        const availableFilms = response.filter((film: FilmProps) => film.in_program === true);

        setFilmData(availableFilms);
    }

    useEffect(() => {        
        fetchFilmData();
    }, []);

    function handleChangeFilmField(e: React.ChangeEvent<HTMLInputElement>) {
        setFilmFields({
            ...filmFields,
            [e.target.name]: e.target.value
        });
    }

    async function handleAdaugareFilm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        try {
            await adaugareFilm(filmFields);
            toast.success("Film adaugat cu success!");
        } catch (error) {
            toast.error("Eroare la adaugarea filmului!" + error);
        }

        setLoading(true);
    }

    async function handleRezevare() {
        const utilizator = localStorage.getItem("user") || "";
        const rezervareData = {
            id_film: selectedFilm,
            id_utilizator: JSON.parse(utilizator).id,
            data: dataRezervare
        };

        try {
            await adaugareRezervare(rezervareData);
            window.location.reload();
            alert("Rezervare adaugata cu succes!");
        } catch (error) {
            toast.error("A aparut o eroare la adaugarea filmului");
            console.error(error);
        }
    }

    async function handleLogout() {
        localStorage.clear();
        toast.success("Te-ai deconectat!");
        navigate('/login');
    }

    if (loading) {
        return <Home />
    }

    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">Cinema - Film Page</h2>

            <button className="btn btn-primary" type="submit" onClick={handleLogout}>Logout</button>

            <div className="row">
                { admin == true && <div className="col-md-3">
                    <div className="mb-3 mt-3">
                        <label htmlFor="titlu" className="form-label">Titlu</label>
                        <input type="text" className="form-control" id="titlu" name="titlu" placeholder="Introduceti titlul" onChange={e => handleChangeFilmField(e)} />
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="an_aparitie" className="form-label">An Aparitie</label>
                        <input type="number" className="form-control" id="an_aparitie" name="an_aparitie" placeholder="Introduceti anul aparitiei" onChange={e => handleChangeFilmField(e)} />
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="pret_bilet" className="form-label">Pret Bilet</label>
                        <input type="number" className="form-control" id="pret_bilet" name="pret_bilet" placeholder="Introduceti pretul biletului" onChange={e => handleChangeFilmField(e)} />
                    </div>

                    <div className="mb-3 mt-3 form-check">
                        <label htmlFor="in_program" className="form-check-label">In Program</label>
                        <input type="checkbox" className="form-check-input" id="in_program" name="in_program" placeholder="In Program" onChange={e => handleChangeFilmField(e)} />
                    </div>

                    <button className="btn btn-primary" type="submit" onClick={e => handleAdaugareFilm(e)}>Adaugare</button>
                </div> }

                { admin === false && <div className="col-md-3">
                    <div className="mb-3 mt-3">
                        <label htmlFor="titlu" className="form-label">Titlu</label>
                        <select className="form-control" id="titlu" value={selectedFilm || ""} onChange={(e) => setSelectedFilm(Number(e.target.value))}>
                            <option value="">--Selecteaza un film--</option>
                            {filmData.map((film) => (
                                <option key={film.id} value={film.id}>
                                    {film.titlu} ({film.an_aparitie})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="data" className="form-label">Data</label>
                        <input type="date" className="form-control" id="data" name="data" onChange={(e) => setDataRezervare(e.target.value)} required />
                    </div>

                    <button className="btn btn-primary" type="submit" onClick={handleRezevare}>Rezervare</button>
                </div> }

                <div className="col-md-9">
                    <ListFilm />
                    { admin === false && <ListRezervare /> }
                </div>
            </div>
        </div>
    );
}

export default Home;