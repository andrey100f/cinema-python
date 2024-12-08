import React, { useState } from "react";
import { AdaugareFilmProps, adaugareInitialFilm } from "../utils/props";
import { adaugareFilm } from "../utils/api";
import { toast } from "react-toastify";
import List from "./List";

function Home() {
    const [filmFields, setFilmFields] = useState<AdaugareFilmProps>(adaugareInitialFilm);
    const [loading, setLoading] = useState(false);

    function handleChangeFilmField(e: React.ChangeEvent<HTMLInputElement>) {
        setFilmFields({
            ...filmFields,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        try {
            await adaugareFilm(filmFields);
            toast.success("Film adaugat cu success!");
        } catch (error) {
            toast.error("Eroare la adaugarea filmului!" + error);
        }

        setLoading(true);
    }

    if (loading) {
        return <Home />
    }

    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">Cinema - Film Page</h2>

            <div className="row">
                <div className="col-md-3">
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

                    <button className="btn btn-primary" type="submit" onClick={e => handleSubmit(e)}>Adaugare</button>
                </div>

                <div className="col-md-9">
                    <List />
                </div>
            </div>
        </div>
    );
}

export default Home;