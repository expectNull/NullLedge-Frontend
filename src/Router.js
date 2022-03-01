import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage';
import LoginPage from './component/LoginPage/LoginPage';
import MyPage from './component/MyPage/My';
import PostPage from './component/PostPage/Post';
import { Ranking } from './component/Ranking/Ranking';
import RegisterPage from './component/RegisterPage/RegisterPage';
import SettingPage from './component/SettingPage/Setting';
import TagPage from './component/TagPage/TagPage';
import EditorPage from './component/EditorPage/EditorPage';

export function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/mypage" element={<MyPage />} />
      <Route exact path="/mypage/:name" element={<MyPage />} />
      <Route exact path="/post" element={<PostPage />} />
      <Route exact path="/post/:postid" element={<PostPage />} />
      <Route exact path="/ranking" element={<Ranking />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/setting" element={<SettingPage />} />
      <Route exact path="/tags" element={<TagPage />} />
      <Route exact path="/tags/:value" element={<TagPage />} />
      <Route exact path="/ask" element={<EditorPage />} />
    </Routes>
  );
}
