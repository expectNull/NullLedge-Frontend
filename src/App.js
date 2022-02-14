import './App.css';
import { BrowserRouter as BRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
  return (
    <div className="App">
      <BRouter>
        <Router />
      </BRouter>
    </div>
  );
}

export default App;
