import { useEffect, useState } from "react";
import { RezervareProps } from "../utils/props";
import { fetchRezervariByUtilizatorId } from "../utils/api/rezervare_api";

function ListRezervare() {
    const [rezervareData, setRezervareData] = useState<RezervareProps[]>();


    useEffect(() => {
        const fetchData = async () => {
            const utilizator = localStorage.getItem("user") || "";
            const utilizatorId = JSON.parse(utilizator).id;
            const rezervareData = await fetchRezervariByUtilizatorId(utilizatorId);
            setRezervareData(rezervareData);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>Lista Rezervari</h2>
            <table className="table tabke-bordered">
                <thead>
                    <tr>
                        <th>ID Film</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    { rezervareData && rezervareData.map((rezervare) => {
                        return (
                            <tr key={rezervare.id}>
                                <td>{rezervare.titlu}</td>
                                <td>{rezervare.data}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListRezervare;