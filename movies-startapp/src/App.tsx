import './App.css';
import FooterMovie from './components/footer/Footer';
import Movies from './components/movies/Movies';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Movies />
      <FooterMovie />
    </div>
  )
}

export default App;
