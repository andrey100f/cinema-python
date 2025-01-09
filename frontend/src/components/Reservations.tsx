
import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchFilme } from "../utils/api/filme_api";
import { FilmProps } from "../utils/props";


interface ReservationForm {
  filmId: number;
  date: string;
}

const RezervarePage: React.FC = () => {
  // State to store films and the selected film
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null);
  const [reservationDate, setReservationDate] = useState<string>("");
  const [filmData, setFilmData] = useState<FilmProps[]>([]);

    async function fetchData() {
        const result = await fetchFilme();
        setFilmData(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

  // Fetch films from the backend
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetchFilme();  
        const availableFilms = response.filter((film: FilmProps) => film.in_program === true);

          setFilmData(availableFilms);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };
  
    fetchFilms();
  }, []);
  

  // Handle form submission
  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFilm || !reservationDate) {
      alert("Please select a film and date.");
      return;
    }

    const newReservation: ReservationForm = {
      filmId: selectedFilm,
      date: reservationDate,
    };

    try {
      await axios.post("/api/rezervari/", newReservation); // Adjust API URL
      alert("Reservation successful!");
    } catch (error) {
      console.error("Error creating reservation:", error);
      alert("Failed to create reservation.");
    }
  };

  /*function filterFilms() {
    if (filmData) {
        // Filter the films where "in_program" is true
        const filteredData = filmData.filter((film) => film.in_program == true);

        // Update state with sorted data
        filmData(filteredData);

    }
}*/

  return (
    <div className="reservation-container">
      <h2>Create Reservation</h2>
      <form onSubmit={handleReservationSubmit}>
        <div>
          <label htmlFor="film-select">Select Film</label>
          <select
            id="film-select"
            value={selectedFilm || ""}
            onChange={(e) => setSelectedFilm(Number(e.target.value))}
          >
            <option value="">--Select a film--</option>
            {filmData.map((film) => (
              <option key={film.id} value={film.id}>
                {film.titlu} ({film.an_aparitie})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="data">Reservation Date</label>
          <input
            type="date"
            id="data"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default RezervarePage;
