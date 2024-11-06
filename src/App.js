import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Pastikan ini sesuai dengan nama file Navbar.js
import './components/Navbar.css'; // Gunakan huruf besar yang sama untuk Navbar.css
import Home from './components/Home'; // Pastikan ini sesuai dengan nama file Home.js
import Genres from './components/Genres'; // Pastikan jalur ini benar


function App() {
  return (
      <Router>
          <Navbar />
          <Genres />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </Router>
  );
}

export default App;
