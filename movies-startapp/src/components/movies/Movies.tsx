import { Table, Tr, Td, MovieBox, Img } from "./styles";
import axios from "axios";
import { useState, useEffect } from 'react';
import { IMovies } from "src/interfaces/IMovies";

const Movies = () => {

  const movieMock = [
  {
    "id": 1,
    "title": "Death Race",
    "gender": "Race",
    "release": 2013,
    "imdb": 7.2
  },
  {
    "id": 2,
    "title": "Lord Of The Rings: Return Of The King",
    "gender": "Fiction",
    "release": 2004,
    "imdb": 8.8
  },
  {
    "id": 3,
    "title": "Star Wars: Return of The Sith",
    "gender": "Fiction",
    "release": 1999,
    "imdb": 8.6
  },
  {
    "id": 4,
    "title": "Lord Of The Rings: The Two Thrones",
    "gender": "Fiction",
    "release": 2002,
    "imdb": 8.2
  },
  {
    "id": 5,
    "title": "The Expendables",
    "gender": "Action",
    "release": 2010,
    "imdb": 7.6
  }
]
  
  const [movies , setMovies] = useState<IMovies[]>([]);

  async function getAllMovies() {
    await axios.get('http://localhost:3333/movies')
    .then((response) => setMovies(response.data))
    .catch((err) => console.log(err));
  } 

  useEffect(() => {
  }, [])

  console.log(movies)

  return (
    <div>
      {movieMock.map((movie, index) => (
        <div key={index}>
          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>  
  );
}

export default Movies;