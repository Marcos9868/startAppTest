import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { Nav, Logo, Form, Input, SearchButton } from './styles';
import axios from 'axios';
import { useState } from 'react';

const NavBar = () => {
  const [movies, setMovies] = useState([]);
  function handleMovies() {
    
  }

  return (
    <Nav>
      <Logo>
        <Link to='/'><BiCameraMovie /> StartApp Movies</Link>
      </Logo>
      <Form>
        <Input type="text" placeholder='Buscar filme' value={ movies }/>
        <SearchButton onClick={handleMovies}>
          <BiSearchAlt2 />
          Buscar
        </SearchButton>
      </Form>
    </Nav>
  )
}

export default NavBar;

