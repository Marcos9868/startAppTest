import { Table, Tr, Td, MovieBox, Img } from "./styles";

const Movies = () => {
  return (
    <div>
      <Table>
        <Tr>
          <Td>
            <MovieBox>
              <h3>Movie #1</h3>
              <Img src="" alt="No Image"/>
              <h4>Gender</h4>
              <h5>IMDB</h5>
            </MovieBox>
          </Td>
          <Td>
            <MovieBox>
              <h3>Movie #2</h3>
              <Img src="" alt="No Image"/>
              <h4>Gender</h4>
              <h5>IMDB</h5>
            </MovieBox>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <MovieBox>
              <h3>Movie #3</h3>
              <Img src="" alt="No Image"/>
              <h4>Gender</h4>
              <h5>IMDB</h5>
            </MovieBox>
          </Td>
          <Td>
            <MovieBox>
              <h3>Movie #4</h3>
              <Img src="" alt="No Image"/>
              <h4>Gender</h4>
              <h5>IMDB</h5>
            </MovieBox>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <MovieBox>
              <h3>Movie #5</h3>
              <Img src="" alt="No Image"/>
              <h4>Gender</h4>
              <h5>IMDB</h5>
            </MovieBox>
          </Td>
          <Td>
            <MovieBox>
              <h3>Movie #6</h3>
              <Img src="" alt="No Image"/>
              <h4>Gender</h4>
              <h5>IMDB</h5>
            </MovieBox>
          </Td>
        </Tr>
      </Table>
    </div>
  );
}

export default Movies;