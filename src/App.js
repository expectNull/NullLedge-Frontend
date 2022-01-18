import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Navbar from './components/views/Navbar/Navbar';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <Footer />
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
