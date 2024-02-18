import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from  './pages/Home/Home'
import MovieList from './Components/Cards/MovieList/MovieList';
import MovieTrailer from './pages/movieTrailer/MovieTrailer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='movie/:id' element={<MovieTrailer/>} />
          <Route path='movies/:type' element={<MovieList/>} />
          <Route path='/*' element={<h1>page not found 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
