import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/api/utilizator_api";
import { toast } from "react-toastify";

function Login() {
    const [username, setUsername] = useState("");
    const [parola, setParola] = useState("");
    const navigate = useNavigate(); 

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        try {
            const user = await login(username, parola);
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("user", JSON.stringify(user));

            if (username === "admin") {
                localStorage.setItem("admin", "true");
            }
            
            toast.success("V-ati conectat ca: " + username);
            navigate("/home");
        } catch (err) {
            toast.error("A aparut o eroare: username si parola invalide!");
            console.error(err);
        }
    };

    const handleRegisterRedirect = () => {
        navigate("/register"); 
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" value={parola} onChange={(e) => setParola(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary mt-3" onClick={e => handleLogin(e)}>Login</button>
            </form>

            <div className="mt-3">
                <p>Don't have an account?</p>
                <button onClick={handleRegisterRedirect} className="btn btn-secondary">Register</button>
            </div>
        </div>
    );
}

export default Login;
