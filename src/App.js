import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Components/views/LandingPage/LandingPage';
import LoginPage from './Components/views/LoginPage/LoginPage';
import RegisterPage from './Components/views/RegisterPage/RegisterPage';
import MyAnswer from './Components/views/MyAnswer/MyAnswer';
import MyQuestion from './Components/views/MyQuestions/MyQuestions';
import Ranking from './Components/views/Ranking/Ranking';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/myanswer" element={<MyAnswer />} />
        <Route exact path="/myanswer/:userId" element={<MyAnswer />} />
        <Route exact path="/myquestions" element={<MyQuestion />} />
        <Route exact path="/myquestions/:userId" element={<MyQuestion />} />
        <Route exact path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;
