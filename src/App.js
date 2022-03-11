import { BrowserRouter as BRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Router } from './Router';
import { Header } from './utils/Header/Header';
import { AlertDiv } from './utils/Alert/Alert';
import Footer from './utils/Footer/Footer';
import { checkCookie } from './utils/checkCookie';
import { setLogin } from './actions/controlLogin';

import './App.css';
import { useEffect } from 'react';

function App() {
  const data = useSelector(store => store.loginReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCookie = async () => {
      let ret = await checkCookie();
      dispatch(setLogin(ret));
    };
    getCookie();
  }, []);

  return (
    <div className="App">
      {
        // store의 변화를 보여줄 뿐 다른 의미는 없음.
        console.log(data)
      }
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
