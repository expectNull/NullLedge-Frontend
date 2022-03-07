import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';

import './LoginPage.css';

async function logIn(email, pw) {
  if (!validator.isEmail(email)) {
    alert('Email 형식을 지켜주세요.');
    return;
  }
  const info = {
    email: email,
    pw: pw,
  };

  let response = await axios.post(
    process.env.REACT_APP_API_URL + '/getLogin',
    info,
    { withCredentials: true },
  );

  console.log(response);
  let ret = response.data;
  console.log(ret);
  if ('error' in ret) {
    alert(`${ret.error}`);
  } else {
    // 로그인 성공 리다이렉션 필요.
  }
}

function LoginPage(props) {
  return (
    <div className="loginpage">
      <div className="loginDiv">
        <h1>Login to your account</h1>
        <label htmlFor="idField">Email</label>
        <br />
        <input id="idField" className="field" />
        <br />
        <label htmlFor="pwField">Password</label>
        <br />
        <input id="pwField" type="password" className="field" />
        <br />
        <button
          className="loginbtn"
          onClick={() => {
            let email = document.getElementById('idField').value;
            let pw = document.getElementById('pwField').value;
            logIn(email, pw);
          }}
        >
          Login now
        </button>
        <button className="googlebtn">Sign-in with Google</button>
        <span>
          Don't have an account? <Link to="/register">Make account now</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
