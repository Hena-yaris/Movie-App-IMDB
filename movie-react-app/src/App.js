import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<h1>Hello there </h1>} />
          <Route path='movie/:id' element={<h1>movie detail page </h1>} />
          <Route path='movies/:type' element={<h1>movie list page</h1>} />
          <Route path='*' element={<h1>page not found 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
