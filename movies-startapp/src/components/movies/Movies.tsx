import { Img, Movie, RenderMovie } from './styles';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IMovies } from 'src/interfaces/IMovies';

const Movies = () => {
  const movieMock = [
    {
      id: 1,
      title: 'Death Race',
      gender: 'Race',
      release: 2013,
      imdb: 7.2,
    },
    {
      id: 2,
      title: 'Lord Of The Rings: Return Of The King',
      gender: 'Fiction',
      release: 2004,
      imdb: 8.8,
    },
    {
      id: 3,
      title: 'Star Wars: Return of The Sith',
      gender: 'Fiction',
      release: 1999,
      imdb: 8.6,
    },
    {
      id: 4,
      title: 'Lord Of The Rings: The Two Thrones',
      gender: 'Fiction',
      release: 2002,
      imdb: 8.2,
    },
    {
      id: 5,
      title: 'The Expendables',
      gender: 'Action',
      release: 2010,
      imdb: 7.6,
    },
  ];

  const [movies, setMovies] = useState<IMovies[]>([]);

  async function getAllMovies() {
    await axios
      .get('http://localhost:3333/movies')
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllMovies()
  }, []);

  console.log(movies);

  return (
    <Movie>
      {movies.length === 0 && <h1>Nothing to show yet :(</h1>}
      {movies.map((item) => (
        <RenderMovie>
          <h3>{item.title}</h3>
          <Img alt='No Image'/>
          <h4>{item.gender}</h4>
          <h5>{item.release}</h5>
          <h5>{item.imdb}</h5>
        </RenderMovie>
      ))}
    </Movie>
  );
};

export default Movies;

// {movies?.map((movie: any) => {
//   <div>
//     <div>
//       <h3>{movie.title}</h3>
//       <Img src="" alt="No Image"/>
//       <h4>{movie.gender}</h4>
//       <h5>{movie.release}</h5>
//       <h5>{movie.imdb}</h5>
//     </div>
//   </div>
// })}

{
  /* <h3>{item.title}</h3>
              <Img src="" alt="No Image"/>
              <h4>{movie.gender}</h4>
              <h5>{movie.release}</h5>
              <h5>{movie.imdb}</h5> */
}

{/* <Table>
      <THead>
        <TrFirst>
          {Object.keys(movieMock[0]).map((item) => (
            <th>{item}</th>
          ))}
        </TrFirst>
      </THead>
      <tbody>
        {movieMock.map((movie) => (
          <tr key={movie.id}>
            {Object.values(movie).map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table> */}