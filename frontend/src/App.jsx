import "./css/App.css";
import Favorite from "./pages/Favorite";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { MovieProvider } from "./contexts/MovieContext";
import { Route, Routes } from 'react-router-dom';

function App() {
  const movieNumber = 1;

  if (movieNumber==1){
    return(
      <MovieProvider>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
        </MovieProvider>
    );
  }
}

export default App;