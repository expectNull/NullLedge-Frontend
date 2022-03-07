import './App.css';
import { BrowserRouter as BRouter } from 'react-router-dom';
import { Router } from './Router';
import { Header } from './utils/Header/Header';
import { AlertDiv } from './utils/Alert/Alert';
import Footer from './utils/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AlertDiv />
      <Header />
      <BRouter>
        <Router />
      </BRouter>
      <Footer />
    </div>
  );
}

export default App;
