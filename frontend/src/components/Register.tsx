import React, { useState } from "react";
import { AdaugareUtilizatorProps, adaugareInitialUtilizator } from "../utils/props";
import { register } from "../utils/api/utilizator_api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [utilizatorFields, setUtilizatorFields] = useState<AdaugareUtilizatorProps>(adaugareInitialUtilizator);

    function handleUtilizatorFields(e: React.ChangeEvent<HTMLInputElement>) {
        setUtilizatorFields({
            ...utilizatorFields,
            [e.target.name]: e.target.value
        });
    }

    async function handleRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        try {
            await register(utilizatorFields);
            toast.success("Utilizator adaugat cu success!");
            navigate("/login");
        } catch(error) {
            toast.error("A aparut o eroare...");
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="nume">Nume</label>
                    <input type="text" id="nume" name="nume" className="form-control" onChange={(e) => handleUtilizatorFields(e)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" className="form-control" onChange={(e) => handleUtilizatorFields(e)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="parola">Parola</label>
                    <input type="parola" id="parola" name="parola" className="form-control" onChange={(e) => handleUtilizatorFields(e)} required />
                </div>

                <button type="submit" className="btn btn-primary mt-3" onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
}

export default Register;
