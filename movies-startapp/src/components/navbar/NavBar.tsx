import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { Nav, Logo, Form, Input, SearchButton } from './styles';

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <Link to='/'><BiCameraMovie /> StartApp Movies</Link>
      </Logo>
      <Form>
        <Input type="text" placeholder='Buscar filme' />
        <SearchButton type="submit">
          <BiSearchAlt2 />
          Buscar
        </SearchButton>
      </Form>
    </Nav>
  )
}

export default NavBar;

