import React from 'react';
import Header from '../../utils/Header/Header';
import './LoginPage.css';

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
        <button className="loginbtn">Login now</button>
        <button className="googlebtn">Sign-in with Google</button>
        <span>
          Don't have an account?
          <a className="register" href="/#">
            {' '}
            Join free today
          </a>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
