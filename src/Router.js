import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage';
import LoginPage from './component/LoginPage/LoginPage';
import RegisterPage from './component/RegisterPage/RegisterPage';
import MyPage from './component/MyPage/My';
import Ranking from './component/Ranking/Ranking';

export function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/mypage" element={<MyPage />} />
      <Route exact path="/ranking" element={<Ranking />} />
    </Routes>
  );
}
